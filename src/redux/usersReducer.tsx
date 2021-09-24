import { Dispatch } from "react"
import { followAPI, usersAPI } from "../api/social_api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOOGLE_SPINNER = 'TOOGLE_SPINNER'



export type UserType = {
    id: number
    name: string
    status: string
    photos: { small?: string, large?: string }
    followed: boolean
}

type InitialStateType = typeof initialState

const initialState = {
    users: [] as UserType[],
    totalCount: 0,
    currentPage: 1,
    isFetching: false
}

type ActionsType = ReturnType<typeof followSucces> | ReturnType<typeof unFollowSucces> | ReturnType<typeof getUsersAC>
    | ReturnType<typeof setCurrentPage> | ReturnType<typeof toogleSpinner>

export const followSucces = (userId: number) => (
    { type: FOLLOW, userId } as const
)
export const unFollowSucces = (userId: number) => (
    { type: UNFOLLOW, userId } as const
)
export const getUsersAC = (users: UserType[], totalCount: number) => (
    {
        type: GET_USERS,
        payload: { users, totalCount }
    } as const
)
export const setCurrentPage = (currentPage: number) => (
    {
        type: SET_CURRENT_PAGE,
        payload: { currentPage }
    } as const
)
export const toogleSpinner = (isFetching: boolean) => (
    {
        type: TOOGLE_SPINNER,
        payload: { isFetching }
    } as const
)

export const follow = (id: number) => (dispatch: Dispatch<ReturnType<typeof followSucces>>) => {
    return followAPI.follow(id)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followSucces(id))
            }
        })
}

export const unFollow = (id: number) => (dispatch: Dispatch<ReturnType<typeof unFollowSucces>>) => {
    return followAPI.unfollow(id)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowSucces(id))
            }
        })
}


export const getUsers = (pageSize: number, currentPage: number, redirect: any) => (dispatch: Dispatch<any>) => {
    dispatch(toogleSpinner(true))

    usersAPI.getUsers(pageSize, currentPage)
        .then((response) => {
            dispatch(getUsersAC(response.data.items, response.data.totalCount))
        })
        .catch(redirect)
        .finally(() => dispatch(toogleSpinner(false)))
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u) }
        }
        case UNFOLLOW: {
            return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u) }
        }
        case GET_USERS: {
            return {
                ...state,
                ...action.payload
                // users: [...state.users, ...action.users] 
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                ...action.payload
                // users: [...state.users, ...action.users] 
            }
        }
        case TOOGLE_SPINNER: {
            return {
                ...state,
                ...action.payload
                // users: [...state.users, ...action.users] 
            }
        }
        default: return state
    }
}