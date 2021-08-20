import React from 'react';
import style from "./Posts.module.scss";
import Post from "./Post/Post";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'


const addButtonIcon = <FontAwesomeIcon icon={faPlusCircle}/>

export type PostType = {
    message: string
    like: number | ""
    disLike: number | ""
}

const Posts = () => {
    return (
        <main>
            <div className={style.form}>
                <textarea className={style.form__textarea} placeholder={"Share your mind"}>
                </textarea>
                <button className={style.form__button}>
                    <i>{addButtonIcon}</i>
                    Add
                </button>
            </div>
            <Post message={"Hello, how are you"}
                  like={234}
                  disLike={34}
            />
            <Post message={"It`s my first post"}
                  like={""}
                  disLike={""}
            />
        </main>
    );
};

export default Posts;