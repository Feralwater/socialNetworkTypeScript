import React from 'react';
import Dialogs from "./Dialogs";
import {
    addMessageActionCreator,
    initialStateDialogType,
    updateNewMessageActionCreator
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type MapStateToPropsType = initialStateDialogType
export type MapDispatchToPropsType = {
    updateNewMessageActionCreator: (text: string) => void
    addMessageActionCreator: () => void
}
export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogItemData: state.dialogsReducer.dialogItemData,
        messages: state.dialogsReducer.messages,
        newMessageTextBody: state.dialogsReducer.newMessageTextBody
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageActionCreator: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator());
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

