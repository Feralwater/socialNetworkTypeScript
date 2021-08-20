import React from 'react';
import style from "./Post.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'


const likeButtonIcon = <FontAwesomeIcon icon={faThumbsUp}/>
const disLikeButtonIcon = <FontAwesomeIcon icon={faThumbsDown}/>

const Post = () => {
    return (
        <>
            <div className={style.user}>
                <div>
                    <img className={style.user__image} src="./img/avatar.png" alt="avatar"/>
                </div>
                <div className={style.user__post}>
                    <div className={style.user__name}>Johnson Smith</div>
                    <div className={style.post__body}>post body</div>
                </div>
            </div>
            <div className={style.buttons}>
                <button>
                    <i>{likeButtonIcon}</i>
                    <span>123</span></button>
                <button>
                    <i>{disLikeButtonIcon}</i>
                    <span>1</span></button>
            </div>
        </>
    );
};

export default Post;