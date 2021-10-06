import React from "react";
import {NavLink} from "react-router-dom";
import style from "./DialogItem.module.scss";
import {DialogType} from "../../../redux/dialogs-reducer";

const DialogItem: React.VFC<DialogType> = ({name, id, url, isOnline}) => {
    return (
        <NavLink to={`/dialogs/${id}`} className={style.dialog} activeClassName={style.active}>
            <div className={style.dialog__image_wrapper}>
                <img className={style.dialog__image} src={url} alt="avatar"/>
                <div className={
                    isOnline ? style.dialog__online
                        :
                        style.dialog__offline
                }
                >
                </div>
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