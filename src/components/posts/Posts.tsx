import React, {createRef} from 'react';
import style from "./Posts.module.scss";
import Post from "./Post/Post";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {PostsPropsType} from "../../redux/types";


const addButtonIcon = <FontAwesomeIcon icon={faPlusCircle}/>


const Posts: React.VFC<PostsPropsType> = (
    {posts, newPostText, updateNewPostTextActionCreator, addPostActionCreator}
) => {
    const newPostElement = createRef<HTMLTextAreaElement>();
    const addNewPost = () => {
        addPostActionCreator()
    }
    const onPostChange = () => {
        const text = newPostElement.current?.value;
        updateNewPostTextActionCreator(text)
    }
    return (
        <main className={style.main}>
            <div className={style.form}>
                <textarea className={style.form__textarea}
                          placeholder={"Share your thoughts"}
                          ref={newPostElement}
                          value={newPostText}
                          onChange={onPostChange}
                />
                <button className={style.form__button}
                        onClick={addNewPost}
                >
                    <i>{addButtonIcon}</i>
                    Add
                </button>
            </div>
            {posts.map(post => (
                <Post key={post.id}
                      message={post.message}
                      like={post.like}
                      disLike={post.disLike}
                />
            ))}
        </main>
    );
};

export default Posts;