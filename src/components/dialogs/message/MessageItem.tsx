import React from "react";
import style from "./MessageItem.module.scss";
import {MessageItemType} from "../../../redux/types";

export const MessageItemOwner: React.FC<MessageItemType> = (props) => {
    const {textBody} = props
    return (
        <div className={style.message__owner}>
            <div className={style.message__owner_text}>
                {textBody}
            </div>
            <div className={style.message__owner_image}>
                {/*<img src={url} alt="avatar"/>*/}
            </div>
        </div>
    );
}
export const MessageItemGuest: React.FC<MessageItemType> = (props) => {
    const {textBody} = props
    return <div className={style.message__guest}>
        <div className={style.message__guest_image}>
            {/*<img src={url} alt="avatar"/>*/}
        </div>
        <div className={style.message__guest_text}>
            {textBody}
        </div>
    </div>;
}