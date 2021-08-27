import React from "react";
import {NavLink} from "react-router-dom";
import style from "./DialogItem.module.scss";


type DialogItemType = {
    name: string
    id: number
    url: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    const {name, id, url} = props
    return (
        <NavLink to={`/dialogs/${id}`} className={style.dialog} activeClassName={style.active}>
            <div>
                <img className={style.dialog__image} src={url} alt="avatar"/>
            </div>
            <div className={style.dialog__container}>
                <div className={style.dialog__name}>
                    {name}
                </div>
                <div className={style.dialog__message}>
                    {"message"}
                </div>
            </div>
        </NavLink>);
}
export default DialogItem;