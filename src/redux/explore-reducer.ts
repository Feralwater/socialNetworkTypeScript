import {FOLLOW_UNFOLLOW, SET_USERS} from "./actionTypes";

const initialState = {
    users: [
        {
            id: "1",
            followed: false,
            fullName: "Name",
            status: "status string",
            location: {city: "City", country: "Country"}
        }
    ]
}

export const exploreReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        default:
            return state
    }
}

export const followUnfollowActionCreator = (userId: string) => ({type: FOLLOW_UNFOLLOW, userId})
export const setUsersActionCreator = (users: any) => ({type: SET_USERS, users})