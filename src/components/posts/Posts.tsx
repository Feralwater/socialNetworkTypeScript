import React from 'react';
import style from "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <main className={style.main}>
            <textarea ></textarea>
            <button>add post</button>
            <Post/>
        </main>
    );
};

export default Posts;