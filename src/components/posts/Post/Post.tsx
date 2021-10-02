import React from 'react';
import style from "./Post.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'
import {PostType} from "../../../redux/types";


const likeButtonIcon = <FontAwesomeIcon icon={faThumbsUp}/>
const disLikeButtonIcon = <FontAwesomeIcon icon={faThumbsDown}/>

const Post: React.VFC<PostType> = (
    {message, like, disLike}
) => {
    return (
        <>
            <div className={style.user}>
                <div>
                    <img className={style.user__image} src="/img/avatar.png" alt="avatar"/>
                </div>
                <div className={style.user__post}>
                    <div className={style.user__name}>Johnson Smith</div>
                    <div className={style.post__body}>{message}</div>
                </div>
            </div>
            <div className={style.buttons}>
                <button>
                    <i>{likeButtonIcon}</i>
                    <span>{like > 0 ? like : ""}</span></button>
                <button>
                    <i>{disLikeButtonIcon}</i>
                    <span>{disLike > 0 ? disLike : ""}</span></button>
            </div>
        </>
    );
};

export default Post;