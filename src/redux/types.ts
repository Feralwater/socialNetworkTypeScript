import {ReactElement} from "react";

export type ActionCreatorType = (text?: string | undefined) => {
    type: string
    newText?: string | undefined
}
export type ActionTypeMessage = {
    type: string
    newText: string
}
export type PostType = {
    id?: number
    message: string
    like: number
    disLike: number
}
export type DialogItemType = {
    name: string
    id: number
    url: string
    isOnline: boolean
}
export type MessageItemType = {
    id?: number
    textBody: string
    isOwner?: boolean
}
export type DialogPageType = {
    dialogItemData: Array<DialogItemType>
    messages: Array<MessageItemType>
    dispatch?: any
    newMessageTextBody: string
}
export type PostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPostActionCreator: any
    updateNewPostTextActionCreator: any
}
export type NavBarItemPropsType = {
    icon: ReactElement<any, any>
    url: string
}