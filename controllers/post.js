import Posts from "../models/Posts.js";

const getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error." });
  }
};
const createPost = async (req, res) => {
  try {
    const { author, title, content, cover } = req.body;

    if (!author || !title || !content || !cover)
      return res.status(400).json({ error: "Missing required fields" });

    const newPost = await Posts.create(req.body);

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error." });
  }
};
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Posts.findByPk(id);

    if (!post)
      return res.status(404).json({ error: "This post was not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error." });
  }
};
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { author, title, content, cover } = req.body;

    if (!author || !title || !content || !cover)
      return res.status(400).json({ error: "Missing required fields" });

    const post = await Posts.findByPk(id);

    if (!post)
      return res.status(404).json({ error: "This post was not found" });

    await post.update(req.body);

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error." });
  }
};
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Posts.findByPk(id);

    if (!post)
      return res.status(404).json({ error: "This post was not found" });

    await post.destroy();
    res.json({ message: "Post was deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error." });
  }
};

export { getAllPosts, createPost, getPostById, updatePost, deletePost };
