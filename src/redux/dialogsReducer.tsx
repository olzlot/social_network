import { v1 } from "uuid";
import { ActionsType } from "./store";

export const ADD_NEW_MSG = 'ADD_NEW_MSG'
export const CHANGE_NEW_MSG_TEXT = 'CHANGE_NEW_MSG_TEXT'

export type DialogItemType = {
    id: string
    name: string
};
export type MessageType = {
    id: string
    message: string
    isMe: boolean
};

// export type DialogsPageType = {
//     dialogs: DialogItemType[]
//     messages: MessageType[]
//     inputValue: string
// }
export type DialogsPageType = typeof initialState




export type DialogsPageActionsType = AddNewMsgActionType | ChangeNewMsgActionType

type AddNewMsgActionType = ReturnType<typeof addNewMsgAC>
export const addNewMsgAC = (checked: boolean) => ({ type: ADD_NEW_MSG, checked: checked }) as const

type ChangeNewMsgActionType = ReturnType<typeof changeNewMsgTextAC>
export const changeNewMsgTextAC = (text: string) => ({ type: CHANGE_NEW_MSG_TEXT, text }) as const

const initialState = {
    dialogs: [
        { id: v1(), name: 'Vasya' },
        { id: v1(), name: 'John' },
        { id: v1(), name: 'Petr' },
        { id: v1(), name: '466'},
    ] as DialogItemType[],
    messages: [
        { id: v1(), message: 'Hi. How are you?', isMe: true } ,
        { id: v1(), message: 'i`m fine', isMe: false },
        { id: v1(), message: 'you know, i`m studing in IT-incubator', isMe: true },
        { id: v1(), message: 'oh, it`s great', isMe: false },
    ] as MessageType[],
    inputValue: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {

    switch (action.type) {
        case ADD_NEW_MSG: {
            if (state.inputValue.trim()) {
                return {
                    ...state,
                    messages: [
                        ...state.messages,
                        { id: v1(), message: state.inputValue, isMe: action.checked }
                    ],
                    inputValue: ''
                }
            } else {
                return state
            }


        }
        case CHANGE_NEW_MSG_TEXT: {
            return {
                ...state,
                inputValue: action.text
            } as const
        }


        default: return state
    }
}