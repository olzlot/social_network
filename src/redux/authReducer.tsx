import { Dispatch } from "react"
import { authAPI, profileAPI } from "../api/social_api"


export enum AuthActionTypes {
    SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
    SET_AUTH_USER_PHOTO = 'SET_AUTH_USER_PHOTO'
}

export type UserAuthDataType = {
    id: number
    email: string
    login: string
}

type InitialStateType = {
    user: UserAuthDataType
    photo: string | null
    isAuth: boolean
}

const initialState: InitialStateType = {
    user: {
        id: 1,
        email: "string",
        login: "string",
    },
    photo: null,
    isAuth: false
}

type ActionsType = ReturnType<typeof authUser> | ReturnType<typeof setUsersPhoto>

export const authUser = (data: UserAuthDataType) => (
    { type: AuthActionTypes.SET_AUTH_USER_DATA, data } as const
)
export const setUsersPhoto = (logo: string | null) => (
    { type: AuthActionTypes.SET_AUTH_USER_PHOTO, logo } as const
)

export const authMe = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.authMe()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(authUser(res.data.data))
                profileAPI.getProfile(res.data.data.id)
                    .then(res => dispatch(setUsersPhoto(res.data.photos.small)))
            }
        })
        .catch((err) => { console.log(err) })
}


export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH_USER_DATA:
            return {
                ...state,
                // -------------ВОТ ТУТ ВОПРОС, почему не ругается
                // так должно быть
                user: { ...action.data },
                // так тоже не ругается
                // ...action.data,
                isAuth: true,
               
            }

        case AuthActionTypes.SET_AUTH_USER_PHOTO:
            return {
                ...state,
                photo: action.logo
            }
        default: return state
    }
}