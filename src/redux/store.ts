import { combineReducers, createStore } from "redux";
import { DialogsPageActionsType, dialogsReducer } from "./dialogsReducer";
import { ProfilePageActionsType, profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";
import { usersReducer } from "./usersReducer";


export type StoreType = typeof store

export type ActionsType = DialogsPageActionsType | ProfilePageActionsType

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store