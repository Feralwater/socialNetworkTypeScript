import React from 'react';
import style from "./NavBar.module.scss"
import {logoutIcon, messageIcon, musicIcon, newsIcon, profileIcon, settingsIcon} from "./icons";
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={style.navigation}>
            <ul className={style.navigation__links}>
                <li className={style.navigation__link}>
                    <NavLink to="/feed" className={`${style.navigation__link_item}`}
                             activeClassName={style.active}
                    >
                        <i>{profileIcon}</i>
                        Feed
                    </NavLink>
                </li>
                <li className={style.navigation__link}>
                    <NavLink to="/dialogs" className={style.navigation__link_item}
                             activeClassName={style.active}
                    >
                        <i>{messageIcon}</i>
                        Messages
                        <span className={style.navigation__counter}>3</span>
                    </NavLink>
                </li>
                <li className={style.navigation__link}>
                    <NavLink to="/news" className={style.navigation__link_item}
                             activeClassName={style.active}
                    >
                        <i>{newsIcon}</i>
                        News
                    </NavLink>
                </li>
                <li className={style.navigation__link}>
                    <NavLink to="/music" className={style.navigation__link_item}
                             activeClassName={style.active}
                    >
                        <i>{musicIcon}</i>
                        Music
                    </NavLink>
                </li>
                <li className={style.navigation__link}>
                    <NavLink to="/settings" className={style.navigation__link_item}
                             activeClassName={style.active}
                    >
                        <i>{settingsIcon}</i>
                        Settings
                    </NavLink>
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