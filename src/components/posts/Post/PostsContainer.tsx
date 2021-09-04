import React, {createRef} from 'react';
import style from "./Posts.module.scss";
import Post from "./Post/Post";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {PostType} from "../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/posts-reducer";


const addButtonIcon = <FontAwesomeIcon icon={faPlusCircle}/>

type PropsType = {
    posts: Array<PostType>
    dispatch: any
    newPostText: string
}

const Posts = (props: PropsType) => {
    const {posts, dispatch, newPostText} = props;
    const newPostElement = createRef<HTMLTextAreaElement>();
    const addNewPost = () => {
        dispatch(addPostActionCreator())
    }
    const onPostChange = () => {
        const text = newPostElement.current!.value;
        dispatch(updateNewPostTextActionCreator(text))
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
                <Post message={post.message}
                      like={post.like}
                      disLike={post.disLike}
                />
            ))}
        </main>
    );
};

export default Posts;