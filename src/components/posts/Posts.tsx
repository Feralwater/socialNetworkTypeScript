import React from 'react';
import style from "./Posts.module.scss";
import Post from "./Post/Post";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {PostsPageType} from "../../redux/state";


const addButtonIcon = <FontAwesomeIcon icon={faPlusCircle}/>

const Posts = (props: PostsPageType) => {
    const {posts} = props
    return (
        <main className={style.main}>
            <div className={style.form}>
                <textarea className={style.form__textarea} placeholder={"Share your mind"}>
                </textarea>
                <button className={style.form__button}>
                    <i>{addButtonIcon}</i>
                    Add
                </button>
            </div>
            {posts.map(post => (
                <Post message={post.message}
                      like={post.like}
                      disLike={post.disLike}
                />
            ))}
        </main>
    );
};

export default Posts;