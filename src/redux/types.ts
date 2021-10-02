// export const store = {
//     _state: {
//         postsPage: {
//             posts: [
//                 {
//                     id: 1,
//                     message: "Hello, how are you",
//                     like: 354,
//                     disLike: 0
//                 },
//                 {
//                     id: 2,
//                     message: "It`s my first post",
//                     like: 23,
//                     disLike: 2
//                 }
//             ],
//             newPostText: "",
//         },
//         dialogPage: {
//             dialogItemData: [
//                 {
//                     name: "David Peterson",
//                     id: 1,
//                     url: "/img/avatar-2.jpg",
//                     isOnline: true
//                 },
//                 {
//                     name: "Sindy Forest",
//                     id: 2,
//                     url: "/img/avatar-3.jpg",
//                     isOnline: false
//                 },
//                 {
//                     name: "David Peterson",
//                     id: 3,
//                     url: "/img/avatar-4.jpg",
//                     isOnline: true
//                 },
//                 {
//                     name: "Zara Ali",
//                     id: 4,
//                     url: "/img/avatar-5.jpg",
//                     isOnline: true
//                 },
//                 {
//                     name: "Zah Abdulla",
//                     id: 5,
//                     url: "/img/avatar-1.jpg",
//                     isOnline: false
//                 }
//             ],
//             messages: [
//                 {
//                     id: 1,
//                     textBody: "Lorem ipsum dolor sit amet," +
//                         "nostrum officiis omnis praesentium provident reprehenderit sit tempore.",
//                     isOwner: true,
//                 },
//                 {
//                     id: 2,
//                     textBody: "Lorem ipsum dolor sit amet," +
//                         "raesentium provident reprehenderit sit tempore.",
//                     isOwner: false,
//                 },
//                 {
//                     id: 3,
//                     textBody: "Lor amet,omnit sit te mpore.",
//                     isOwner: false,
//                 },
//                 {
//                     id: 4,
//                     textBody: "Lolostsentium provident reprehenderit sit tempore.",
//                     isOwner: false,
//                 },
//                 {
//                     id: 5,
//                     textBody: "Lolostsentium provident reprehenderit sit tempore.",
//                     isOwner: false,
//                 }
//             ],
//             newMessageTextBody: "",
//         },
//     },
//     _callSubscriber() {
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer: any) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action: any) {
//         this._state.postsPage = postsReducer(this._state.postsPage, action)
//         this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
//         this._callSubscriber();
//     }
// }

export type ActionCreatorType = (text?: string | undefined) => {
    type: string
    newText?: string | undefined
}
export type ActionType = {
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
export type PostsPageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogItemData: Array<DialogItemType>
    messages: Array<MessageItemType>
    dispatch?: any
    newMessageTextBody: string
}
export type RootStateType = {
    postsPage: PostsPageType
    dialogPage: DialogPageType
}
export type PostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPostActionCreator: any
    updateNewPostTextActionCreator: any
}
