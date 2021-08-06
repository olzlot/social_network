import { combineReducers, createStore } from "redux";
import { DialogsPageActionsType, DialogsPageType, dialogsReducer } from "./dialogsReducer";
import { ProfilePageActionsType, ProfilePageType, profileReducer } from "./profileReducer";
import { SidebarPageType, sidebarReducer } from "./sidebarReducer";

export type AppStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarPageType
}

export type StoreType = {
    _state: AppStateType
    _subcriber: () => void
    getState: () => AppStateType
    // _addNewPost: () => void
    // _changeValue: (post: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType = DialogsPageActionsType | ProfilePageActionsType

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
})

export const store: StoreType = createStore(reducers)