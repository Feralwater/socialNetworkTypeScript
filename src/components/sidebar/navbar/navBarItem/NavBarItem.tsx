import React from 'react';
import style from "./NavBarItem.module.scss";
import {NavLink} from "react-router-dom";
import {NavBarItemPropsType} from "../../../../redux/types";

const NavBarItem: React.FC<NavBarItemPropsType> = (
    {children, icon, url}
) => {
    return (
        <li className={style.navigation__link}>
            <NavLink to={`/${url}`} className={style.navigation__link_item}
                     activeClassName={style.active}
            >
                <i>{icon}</i>
                {children}
            </NavLink>
        </li>
    );
};

export default NavBarItem;