import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => {
    return {
        dialogItemData: state.dialogsReducer.dialogItemData,
        messages: state.dialogsReducer.messages,
        newMessageTextBody: state.dialogsReducer.newMessageTextBody
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageActionCreator: (text: any) => {
            dispatch(updateNewMessageActionCreator(text));
        },
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator());
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

