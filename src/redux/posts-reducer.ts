import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./actionTypes"
import {v1} from 'uuid';


export type PostType = {
    id: string
    message: string | undefined
    like: number
    disLike: number
}

export type initialStatePostsType = {
    posts: Array<PostType>
    newPostText: string | undefined
}

const initialState = {
    posts: [
        {
            id: "1",
            message: "Hello, how are you",
            like: 354,
            disLike: 0
        },
        {
            id: "2",
            message: "It`s my first post",
            like: 23,
            disLike: 2
        }
    ],
    newPostText: "",
}

type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

export const postsReducer =
    (state: initialStatePostsType = initialState, action: ActionsTypes): initialStatePostsType => {

        switch (action.type) {
            case ADD_POST:
                const newPost = {
                    id: v1(),
                    message: state.newPostText?.trim(),
                    like: 0,
                    disLike: 0
                };
                return {
                    ...state,
                    posts: [newPost, ...state.posts],
                    newPostText: "",
                }
            case UPDATE_NEW_POST_TEXT:
                return {
                    ...state,
                    newPostText: action.newText,
                }
            default:
                return state
        }
    }

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string | undefined) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)