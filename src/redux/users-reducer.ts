import {FOLLOW_UNFOLLOW, SET_USERS} from "./actionTypes";

export type PhotosType = {
    small: null | string
    large: null | string
}
export type UserType = {
    name: string
    id: number
    photos: PhotosType
    status: null | string
    followed: boolean
}

export type initialStateExploreType = {
    users: Array<UserType>
}

const initialState: initialStateExploreType = {
    users: []
}
type ActionsTypes = ReturnType<typeof followUnfollowActionCreator> | ReturnType<typeof setUsersActionCreator>
export const usersReducer = (state: initialStateExploreType = initialState, action: ActionsTypes): initialStateExploreType => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: UserType) => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        default:
            return state
    }
}

export const followUnfollowActionCreator = (userId: number) => ({type: FOLLOW_UNFOLLOW, userId} as const)
export const setUsersActionCreator = (users: Array<UserType>) => ({type: SET_USERS, users} as const)