import express from "express";
import {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "./controllers/post.js";
import "./db/index.js";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());

app.route("/posts").get(getAllPosts).post(createPost);

app.route("/posts/:id").get(getPostById).put(updatePost).delete(deletePost);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
