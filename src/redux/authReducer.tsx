

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
    user: {} as UserAuthDataType,
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

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH_USER_DATA:
            return {
                ...state,
                user: {...action.data},
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