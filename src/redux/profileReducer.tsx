import { Dispatch } from "react";
import { v1 } from "uuid";
import { profileAPI } from "../api/social_api";
import { ActionsType } from "./store";

export const ADD_POST = 'ADD-POST'
export const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type PostType = {
    id: string
    message: string
}

export type UserProfileType = {
    aboutMe: string | null
    userId: number | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: {
        small: string | null
        large: string | null
    }
}

export type ProfilePageType = {
    profile: UserProfileType
    posts: PostType[]
    inputValue: string
}

const initialState: ProfilePageType = {
    posts: [
        { id: v1(), message: 'My first POST' },
        { id: v1(), message: 'Hi!!!' },
        { id: v1(), message: 'How are you' },
        { id: v1(), message: 'dsfsdf' }
    ],
    inputValue: "",
    profile: {
        aboutMe: null,
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small:  null,
            large: null,
        },
    } 

}

export type ProfilePageActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof changePostTextAC>
    | ReturnType<typeof setUserProfile>

export const addPostAC = () => {
    return { type: ADD_POST } as const
}
export const changePostTextAC = (text: string) => {
    return {
        type: CHANGE_POST_TEXT,
        text
    } as const
}
export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: profile
    } as const
}

export const askForUserProfile = (userId: number) => (dispatch:Dispatch<any>) => {
    profileAPI.getProfile(Number(userId))
            .then((res) => dispatch(setUserProfile(res.data)))
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            if (state.inputValue.trim()) {
                const newPost = { id: v1(), message: state.inputValue }
                return {
                    ...state,
                    posts: [newPost, ...state.posts],
                    inputValue: ''
                }
            } else {
                return state
            }
        }
        case CHANGE_POST_TEXT: {
            // state.inputValue = action.text
            return {
                ...state,
                inputValue: action.text
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload
            }
        }
        default: return state
    }
}

