import React from 'react';
import style from "./Profile.module.scss";

const Profile = () => {
    return (
        <div className={style.profile}>
            <img src="/img/avatar.png" alt="avatar"/>
            <span className={style.name}>Stella Johnson</span>
            <div className={style.profile__info}>
                <div className={style.profile__info_details}><span>Posts</span>130</div>
                <div className={style.profile__info_details}><span>Following</span>1230</div>
                <div className={style.profile__info_details}><span>Followers</span>2430</div>
            </div>
        </div>
    );
};

export default Profile;