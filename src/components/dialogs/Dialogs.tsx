import React from 'react';
import style from "./Dialogs.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import DialogItem from "./dialogItem/DialogItem";
import {MessageItemGuest, MessageItemOwner} from "./message/MessageItem";
import {DialogItemType, DialogPageType, MessageItemType} from "../../redux/state";


export const trashIcon = <FontAwesomeIcon icon={faTrash}/>

type DialogHeaderInfoType = {
    url: string
    name: string
}

const InputMessage = () => {
    return (
        <div className={style.area}>
                <textarea className={style.area__textarea} placeholder={"Your Message..."}>
                </textarea>
            <button className={style.area__button}>Send</button>
        </div>);
}

const DialogHeaderSearch = () => {
    return <div className={style.wrapper__search}>
        <input type="text" placeholder={"Search"}/>
    </div>;
}

const DialogHeaderInfo: React.FC<DialogHeaderInfoType> = (props) => {
    const {url, name} = props
    return <div className={style.wrapper__companion}>
        <div className={style.wrapper__companion_info}>
            <img className={style.wrapper__companion_image} src={url} alt="avatar"/>
            <div className={style.wrapper__companion_name}>{name}</div>
        </div>
        <button className={style.wrapper__companion_delete}>
            <i>{trashIcon}</i>
            delete conversation
        </button>
    </div>;
}

const Dialogs = (props: DialogPageType) => {
    const {dialogItemData, messages} = props
    return (
        <div className={style.wrapper__content}>
            <DialogHeaderSearch/>
            <DialogHeaderInfo
                url={"/img/avatar-1.jpg"}
                name={"Zah Abdulla"}
            />
            <div className={style.wrapper__dialogs}>
                {dialogItemData.map(item => (
                    <DialogItem
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        url={item.url}
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
            <InputMessage/>
        </div>
    );
};

export default Dialogs;
