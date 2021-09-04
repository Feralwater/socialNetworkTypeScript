import {ADD_MESSAGE, UPDATE_NEW_MESSAGE} from "./actionTypes";
import {ActionCreatorType, ActionType, DialogPageType} from "./state";


const initialState = {
    dialogItemData: [
        {
            name: "David Peterson",
            id: 1,
            url: "/img/avatar-2.jpg",
            isOnline: true
        },
        {
            name: "Sindy Forest",
            id: 2,
            url: "/img/avatar-3.jpg",
            isOnline: false
        },
        {
            name: "David Peterson",
            id: 3,
            url: "/img/avatar-4.jpg",
            isOnline: true
        },
        {
            name: "Zara Ali",
            id: 4,
            url: "/img/avatar-5.jpg",
            isOnline: true
        },
        {
            name: "Zah Abdulla",
            id: 5,
            url: "/img/avatar-1.jpg",
            isOnline: false
        }
    ],
    messages: [
        {
            id: 1,
            textBody: "Lorem ipsum dolor sit amet," +
                "nostrum officiis omnis praesentium provident reprehenderit sit tempore.",
            isOwner: true,
        },
        {
            id: 2,
            textBody: "Lorem ipsum dolor sit amet," +
                "raesentium provident reprehenderit sit tempore.",
            isOwner: false,
        },
        {
            id: 3,
            textBody: "Lor amet,omnit sit te mpore.",
            isOwner: false,
        },
        {
            id: 4,
            textBody: "Lolostsentium provident reprehenderit sit tempore.",
            isOwner: false,
        },
        {
            id: 5,
            textBody: "Lolostsentium provident reprehenderit sit tempore.",
            isOwner: false,
        }
    ],
    newMessageTextBody: "",
}
export const dialogsReducer = (state: any = initialState, action: ActionType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessageTextBody = action.newText;
            return state
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                textBody: state.newMessageTextBody,
                isOwner: true,
            };
            state.messages.push(newMessage);
            state.newMessageTextBody = "";
            return state
        default:
            return state
    }
}
export const updateNewMessageActionCreator: ActionCreatorType = (text) => {
    return {type: UPDATE_NEW_MESSAGE, newText: text}
}
export const addMessageActionCreator: ActionCreatorType = () => {
    return {type: ADD_MESSAGE}
}