import React from 'react';
import style from "./Dialogs.module.scss"
import DialogItem from "./dialogItem/DialogItem";
import {MessageItemGuest, MessageItemOwner} from "./message/MessageItem";
import InputMessage from "./inputMessage/InputMessage";
import DialogHeaderSearch from "./dialogHeaderSearch/DialogHeaderSearch";
import DialogHeaderInfo from "../dialogHeaderInfo/DialogHeaderInfo";
import {DialogPropsType} from "./DialogsContainer";

const Dialogs: React.VFC<DialogPropsType> = (
    {
        dialogItemData, messages,
        addMessageActionCreator, updateNewMessageActionCreator, newMessageTextBody
    }
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
                {dialogItemData.map((item) => (
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
                {messages.map((message) => (message.isOwner ?
                    <MessageItemOwner
                        key={message.id}
                        textBody={message.textBody}
                        // url={"/img/avatar.png"}
                    />
                    :
                    <MessageItemGuest
                        key={message.id}
                        textBody={message.textBody}
                        // url={"/img/avatar-1.jpg"}
                    />)
                )}
            </div>
            <InputMessage addMessageActionCreator={addMessageActionCreator}
                          newMessageTextBody={newMessageTextBody}
                          updateNewMessageActionCreator={updateNewMessageActionCreator}
            />
        </div>
    );
};

export default Dialogs;
