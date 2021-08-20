import React from 'react';
import style from "./Posts.module.scss";
import Post from "./Post/Post";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'


const addButtonIcon = <FontAwesomeIcon icon={faPlusCircle}/>

const Posts = () => {
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
            <Post/>
            <Post/>
        </main>
    );
};

export default Posts;