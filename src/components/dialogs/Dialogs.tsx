import React from 'react';
import style from "./Dialogs.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';


export const trashIcon = <FontAwesomeIcon icon={faTrash}/>

type MessageItemType = {
    textBody: string
    url: string
}
type DialogItemType = {
    name: string
    id: number
    textBody: string
    url: string
}
type DialogHeaderInfoType = {
    url: string
    name: string
}
const MessageItemOwner: React.FC<MessageItemType> = (props) => {
    const {textBody, url} = props
    return (
        <div className={style.message__owner}>
            <div className={style.message__owner_text}>
                {textBody}
            </div>
            <div className={style.message__owner_image}>
                <img src={url} alt="avatar"/>
            </div>
        </div>
    );
}
const MessageItemGuest: React.FC<MessageItemType> = (props) => {
    const {textBody, url} = props
    return <div className={style.message__guest}>
        <div className={style.message__guest_image}>
            <img src={url} alt="avatar"/>
        </div>
        <div className={style.message__guest_text}>
            {textBody}
        </div>
    </div>;
}
const DialogItem: React.FC<DialogItemType> = (props) => {
    const {name, id, textBody, url} = props
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
                    {textBody}
                </div>
            </div>
        </NavLink>);
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

const Dialogs = () => {
    return (
        <div className={style.wrapper__content}>
            <DialogHeaderSearch/>
            <DialogHeaderInfo
                url={"./img/avatar-1.jpg"}
                name={"Sindy Forest"}
            />
            <div className={style.wrapper__dialogs}>
                <DialogItem
                    name={"David Peterson"}
                    id={1}
                    textBody={"Lorem ipsum dolor sit amet," +
                    "nostrum officiis omnis praesentium provident reprehenderit sit tempore."}
                    url={"./img/avatar-2.jpg"}
                />
                <DialogItem
                    name={"Sindy Forest"}
                    id={2}
                    textBody={"Lorem ipsum dolor sit amet," +
                    "raesentium provident reprehenderit sit tempore."}
                    url={"./img/avatar-3.jpg"}
                />
                <DialogItem
                    name={"David Peterson"}
                    id={3}
                    textBody={"Lorem ipsum dolor sit amet," +
                    "nostrum officiis omnerit sit tempore."}
                    url={"./img/avatar-4.jpg"}
                />
                <DialogItem
                    name={"Zara Ali"}
                    id={4}
                    textBody={"Lorem sit amet," +
                    "dicta distinctio eeprehenderit sit tempore."}
                    url={"./img/avatar-5.jpg"}
                />
            </div>
            <div className={style.messages}>
                <MessageItemOwner
                    textBody={"Lorem dolor sit amet, consectetur adipisicing elit." +
                    "Ab delectus dolor doloremque est eum explicabo id, illo, itaque laboriosam" +
                    "nemo nesciunt nostrum numquam optio placeat porro, quasi totam vero voluptate."}
                    url={"./img/avatar.png"}
                />
                <MessageItemGuest
                    textBody={"Lorem dolor sit amet, consectetur adipisicing elit." +
                    "Ab delectus dolor doloremque est eum explicabo id, illo, itaque laboriosam" +
                    "nemo nesciunt nostrum numquam optio placeat porro, quasi totam vero voluptate."}
                    url={"./img/avatar-1.jpg"}
                />
            </div>
            <InputMessage/>
        </div>
    );
};

export default Dialogs;