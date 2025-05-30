import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const Posts = sequelize.define('Posts',{
    author:{
        type:DataTypes.STRING,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    cover:{
        type:DataTypes.STRING(555),
        allowNull:false
    },
    // date:{
    //     type:DataTypes.DATE,
    //     allowNull:false

    // }
})
 // Posts.sync();

 export default Posts;