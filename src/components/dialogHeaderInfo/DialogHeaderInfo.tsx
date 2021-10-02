import React from "react";
import style from "./DialogHeaderInfo.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

type DialogHeaderInfoType = {
    url: string
    name: string
    isOnline: boolean
}

export const trashIcon = <FontAwesomeIcon icon={faTrash}/>

const DialogHeaderInfo: React.VFC<DialogHeaderInfoType> = (props) => {
    const {url, name, isOnline} = props
    return <div className={style.companion}>
        <div className={style.companion__info}>
            <div className={style.companion__image_wrapper}>
                <img className={style.companion__image} src={url} alt="avatar"/>
                <div
                    className={isOnline ? style.companion__online
                        :
                        style.companion__offline}
                >
                </div>
            </div>
            <div className={style.companion__information}>
                <span className={style.companion__name}>{name}</span>
                <span className={style.companion__isOnline}>{isOnline && "is online"}</span>
            </div>
        </div>
        <button className={style.companion__delete}>
            <i>{trashIcon}</i>
            delete conversation
        </button>
    </div>;
}
export default DialogHeaderInfo;