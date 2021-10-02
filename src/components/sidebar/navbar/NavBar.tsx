import React from 'react';
import style from "./NavBar.module.scss"
import {logoutIcon, messageIcon, musicIcon, newsIcon, profileIcon, settingsIcon, feedIcon} from "./icons";
import {searchIcon} from "../../header/icons";
import NavBarItem from "./navBarItem/NavBarItem";
import s from "./navBarItem/NavBarItem.module.scss"


const NavBar = () => {
    return (
        <nav className={style.navigation}>
            <ul className={style.navigation__links}>
                <NavBarItem url={"feed"} icon={feedIcon}>Feed</NavBarItem>
                <NavBarItem url={"dialogs"} icon={messageIcon}>Messages</NavBarItem>
                <NavBarItem url={"explore"} icon={searchIcon}>Explore</NavBarItem>
                <NavBarItem url={"news"} icon={newsIcon}>News</NavBarItem>
                <NavBarItem url={"music"} icon={musicIcon}>Music</NavBarItem>
                <NavBarItem url={"settings"} icon={settingsIcon}>Settings</NavBarItem>
                <NavBarItem url={"profile"} icon={profileIcon}>Profile</NavBarItem>
            </ul>
            <div className={s.navigation__link_item}>
                <i>{logoutIcon}</i>
                Logout
            </div>
        </nav>
    );
};

export default NavBar;