import React from 'react';
import style from "./NavBar.module.scss"
import {logoutIcon, messageIcon, musicIcon, newsIcon, profileIcon, settingsIcon} from "./icons";

const NavBar = () => {
    return (
        <nav className={style.navigation}>
            <ul className={style.navigation__links}>
                <li className={style.navigation__link}>
                    <a href="#" className={`${style.navigation__link_item} ${style.active}`}>
                        <i>{profileIcon}</i>
                        Feed
                    </a>
                </li>
                <li className={style.navigation__link}>
                    <a href="#" className={style.navigation__link_item}>
                        <i>{messageIcon}</i>
                        Messages
                    </a>
                </li>
                <li className={style.navigation__link}>
                    <a href="#" className={style.navigation__link_item}>
                        <i>{newsIcon}</i>
                        News
                    </a>
                </li>
                <li className={style.navigation__link}>
                    <a href="#" className={style.navigation__link_item}>
                        <i>{musicIcon}</i>
                        Music
                    </a>
                </li>
                <li className={style.navigation__link}>
                    <a href="#" className={style.navigation__link_item}>
                        <i>{settingsIcon}</i>
                        Settings
                    </a>
                </li>
            </ul>
            <div className={style.navigation__link_item}>
                <i>{logoutIcon}</i>
                Logout
            </div>
        </nav>
    );
};

export default NavBar;