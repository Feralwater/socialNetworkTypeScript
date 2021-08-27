import React from 'react';
import style from "./Header.module.scss";
import {searchIcon, noticeIcon, messageIcon} from "./icons"

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__left}>
                <i>{searchIcon}</i>
                <input type="text" placeholder={"Search..."} className={style.header__input}/>
            </div>
            <div className={style.header__right}>
                <button className={style.header__button}>Follow</button>
                <i>{noticeIcon}</i>
                <i className={style.header__envelop}>{messageIcon}<span className={style.header__counter}>3</span></i>
                <img className={style.header__avatar} src="/img/avatar.png" alt="avatar"/>
            </div>
        </header>
    );
};

export default Header;