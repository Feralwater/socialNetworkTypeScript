import {FOLLOW_UNFOLLOW, SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USERS, SET_IS_FETCHING} from "./actionTypes";

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: initialStateExploreType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
type ActionsTypes = ReturnType<typeof followUnfollowActionCreator>
    | ReturnType<typeof setUsersActionCreator>
    | ReturnType<typeof setCurrentPageActionCreator>
    | ReturnType<typeof setTotalUsersCountActionCreator>
    | ReturnType<typeof setIsFetchingActionCreator>

export const usersReducer = (state: initialStateExploreType = initialState, action: ActionsTypes): initialStateExploreType => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: UserType) => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const followUnfollowActionCreator = (userId: number) => ({type: FOLLOW_UNFOLLOW, userId} as const)
export const setUsersActionCreator = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageActionCreator = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountActionCreator = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
} as const)
export const setIsFetchingActionCreator = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching} as const)