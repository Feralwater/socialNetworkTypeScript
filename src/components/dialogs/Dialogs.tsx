import React, {FC} from 'react';
import style from "./Dialogs.module.scss"
import DialogItem from "./dialogItem/DialogItem";
import {MessageItemGuest, MessageItemOwner} from "./message/MessageItem";
import {DialogPageType} from "../../redux/state";
import InputMessage from "./inputMessage/InputMessage";
import DialogHeaderSearch from "./dialogHeaderSearch/DialogHeaderSearch";
import DialogHeaderInfo from "../dialogHeaderInfo/DialogHeaderInfo";

const Dialogs: React.FC<DialogPageType> = (
    {dialogItemData, messages, dispatch, newMessageTextBody}
) => {
    return (
        <div className={style.wrapper__content}>
            <DialogHeaderSearch/>
            <DialogHeaderInfo
                url={"/img/avatar-1.jpg"}
                name={"Zah Abdulla"}
                isOnline={true}
            />
            <div className={style.wrapper__dialogs}>
                {dialogItemData.map(item => (
                    <DialogItem
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        url={item.url}
                        isOnline={item.isOnline}
                    />
                ))}
            </div>
            <div className={style.messages}>
                {messages.map(message => (message.isOwner ?
                    <MessageItemOwner
                        textBody={message.textBody}
                        // url={"/img/avatar.png"}
                    />
                    :
                    <MessageItemGuest
                        textBody={message.textBody}
                        // url={"/img/avatar-1.jpg"}
                    />)
                )}
            </div>
            <InputMessage dispatch={dispatch}
                          newMessageTextBody={newMessageTextBody}
            />
        </div>
    );
};

export default Dialogs;
