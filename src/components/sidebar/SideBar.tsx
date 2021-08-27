import React from 'react';
import style from "./SideBar.module.scss";
import Profile from "./profile/Profile";
import NavBar from "./navbar/NavBar";


const SideBar = () => {
    return (
        <div className={style.sidebar}>
            <div className={style.logo_block}>
                <img src="/img/logo.png" alt="logo"/>
                <span>Social Network</span>
            </div>
            <Profile/>
            <NavBar/>
        </div>
    );
};

export default SideBar;