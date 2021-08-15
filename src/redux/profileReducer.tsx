import { v1 } from "uuid";
import { ActionsType } from "./store";

export const ADD_POST = 'ADD-POST'
export const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'

export type PostType = {
    id: string
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
    inputValue: string
}

type AddPostActionType = ReturnType<typeof addPostAC>
type ChangePostTextActionType = ReturnType<typeof changePostTextAC>

export type ProfilePageActionsType = AddPostActionType | ChangePostTextActionType

export function addPostAC() {
    return { type: ADD_POST } as const
}
export function changePostTextAC(text: string) {
    return {
        type: CHANGE_POST_TEXT,
        text
    } as const
}

const initialState: ProfilePageType = {
    posts: [
        { id: v1(), message: 'My first POST' },
        { id: v1(), message: 'Hi!!!' },
        { id: v1(), message: 'How are you' },
        { id: v1(), message: 'dsfsdf' }
    ],
    inputValue: ""
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
        default: return state
    }
}

