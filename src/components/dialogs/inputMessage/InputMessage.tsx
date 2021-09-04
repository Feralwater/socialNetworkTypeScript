import style from "./InputMessage.module.scss";
import React, {ChangeEvent} from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogs-reducer";


type PropsType = {
    dispatch: any
    newMessageTextBody: string
}
const InputMessage: React.FC<PropsType> = ({dispatch, newMessageTextBody}) => {
    const newMessageElement = newMessageTextBody;
    const addMessage = () => {
        dispatch(addMessageActionCreator());
    }
    const onMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value;
        dispatch(updateNewMessageActionCreator(text))
    }
    return (
        <div className={style.area}>
                <textarea className={style.area__textarea}
                          placeholder={"Your Message..."}
                          value={newMessageElement}
                          onChange={onMessageChange}
                >
                </textarea>
            <button className={style.area__button}
                    onClick={addMessage}
            >Send
            </button>
        </div>);
}
export default InputMessage;