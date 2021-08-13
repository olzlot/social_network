import { v1 } from "uuid";
import {  ActionsType } from "./store";

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

export type DialogsPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
    inputValue: string
}

type AddNewMsgActionType = ReturnType<typeof addNewMsgAC>
type ChangeNewMsgActionType = ReturnType<typeof changeNewMsgTextAC>

export type DialogsPageActionsType = AddNewMsgActionType | ChangeNewMsgActionType

export const addNewMsgAC = (checked:boolean) => ({type: ADD_NEW_MSG, checked: checked}) as const
export const changeNewMsgTextAC = (text: string) => ({type: CHANGE_NEW_MSG_TEXT,  text}) as const

const initialState: DialogsPageType = {
    dialogs: [
        { id: v1(), name: 'Vasya' },
        { id: v1(), name: 'John' },
        { id: v1(), name: 'Petr' },
        { id: v1(), name: '466' },
    ],
    messages: [
        { id: v1(), message: 'Hi. How are you?', isMe: true },
        { id: v1(), message: 'i`m fine', isMe: false },
        { id: v1(), message: 'you know, i`m studing in IT-incubator', isMe: true },
        { id: v1(), message: 'oh, it`s great', isMe: false },
    ],
    inputValue: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {

    switch (action.type){
        case ADD_NEW_MSG: {
            return {
                ...state,
                messages: [
                    ...state.messages, 
                    {   id:v1(), message: state.inputValue, isMe: action.checked}
                ],
                inputValue: ''
            } 
            
           
        }    
        case CHANGE_NEW_MSG_TEXT: {
            return  {
                ...state,
                inputValue: action.text
            } as const
        }    

    
        default: return state
    }
}