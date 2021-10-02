import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./actionTypes"
import {ActionCreatorType, ActionType} from "./types";
import {v1} from 'uuid';

const initialState = {
    posts: [
        {
            id: 1,
            message: "Hello, how are you",
            like: 354,
            disLike: 0
        },
        {
            id: 2,
            message: "It`s my first post",
            like: 23,
            disLike: 2
        }
    ],
    newPostText: "",
}

export const postsReducer = (state: any = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: v1(),
                message: state.newPostText.trim(),
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
export const addPostActionCreator: ActionCreatorType = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator: ActionCreatorType = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}