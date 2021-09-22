
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

type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof getUsersAC>
    | ReturnType<typeof setCurrentPage> | ReturnType<typeof toogleSpinner>

export const followAC = (userId: number) => (
    { type: FOLLOW, userId } as const
)
export const unFollowAC = (userId: number) => (
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