import style from "./InputMessage.module.scss";
import React, {ChangeEvent} from "react";


type InputMessagePropsType = {
    addMessageActionCreator: () => void
    updateNewMessageActionCreator: (text: string) => void
    newMessageTextBody: string
}
const InputMessage: React.VFC<InputMessagePropsType> = (
    {addMessageActionCreator, updateNewMessageActionCreator, newMessageTextBody}
) => {
    const newMessageElement = newMessageTextBody;
    const addMessage = () => {
        addMessageActionCreator();
    }
    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value;
        updateNewMessageActionCreator(text)
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