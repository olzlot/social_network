import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";
import { DialogsPageActionsType, dialogsReducer } from "./dialogsReducer";
import { ProfilePageActionsType, profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";
import { usersReducer } from "./usersReducer";
import ReduxThunk from "redux-thunk";


export type StoreType = typeof store

export type ActionsType = DialogsPageActionsType | ProfilePageActionsType

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

// @ts-ignore
window.store = store