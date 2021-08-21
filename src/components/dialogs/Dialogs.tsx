import React from 'react';
import style from "./Dialogs.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';


export const trashIcon = <FontAwesomeIcon icon={faTrash}/>

const Dialogs = () => {
    return (
        <div className={style.wrapper__content}>
            <div className={style.wrapper__search}>
                <input type="text" placeholder={"Search"}/>
            </div>
            <div className={style.wrapper__companion}>
                <img className={style.wrapper__companion_image} src="./img/avatar-1.jpg" alt="avatar"/>
                <button className={style.wrapper__companion_delete}>
                    <i>{trashIcon}</i>
                    delete conversation
                </button>
            </div>
            <div className={style.wrapper__dialogs}>
                <NavLink to="/dialogs/1" className={style.dialog} activeClassName={style.active}>
                    <div>
                        <img className={style.dialog__image} src="./img/avatar-2.jpg" alt="avatar"/>
                    </div>
                    <div className={style.dialog__container}>
                        <div className={style.dialog__name}>
                            David Peterson
                        </div>
                        <div className={style.dialog__message}>
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/dialogs/2" className={style.dialog} activeClassName={style.active}>
                    <div>
                        <img className={style.dialog__image} src="./img/avatar-3.jpg" alt="avatar"/>
                    </div>
                    <div className={style.dialog__container}>
                        <div className={style.dialog__name}>
                            Sindy Forest
                        </div>
                        <div className={style.dialog__message}>
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/dialogs/3" className={style.dialog} activeClassName={style.active}>
                    <div>
                        <img className={style.dialog__image} src="./img/avatar-4.jpg" alt="avatar"/>
                    </div>
                    <div className={style.dialog__container}>
                        <div className={style.dialog__name}>
                            David Peterson
                        </div>
                        <div className={style.dialog__message}>
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/dialogs/4" className={style.dialog} activeClassName={style.active}>
                    <div>
                        <img className={style.dialog__image} src="./img/avatar-5.jpg" alt="avatar"/>
                    </div>
                    <div className={style.dialog__container}>
                        <div className={style.dialog__name}>
                            Zara Ali
                        </div>
                        <div className={style.dialog__message}>
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className={style.messages}>
                <div className={style.message__owner}>
                    <div className={style.message__owner_text}>
                        Lorem ipsum dolor sit amet, consectetur.
                    </div>
                    <div className={style.message__owner_image}>
                        <img src="./img/avatar.png" alt="avatar"/>
                    </div>
                </div>
                <div className={style.message__guest}>
                    <div className={style.message__guest_image}>
                        <img src="./img/avatar-1.jpg" alt="avatar"/>
                    </div>
                    <div className={style.message__guest_text}>
                        Lorem ipsum dolor sit amet, consectetur.
                    </div>
                </div>
            </div>
            <div className={style.area}>
                <textarea className={style.area__textarea} placeholder={"Your Message..."}>
                </textarea>
                <button className={style.area__button}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;