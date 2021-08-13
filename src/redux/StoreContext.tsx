import React from "react";
import { store } from "./store";


export const StoreContext = React.createContext(store)

// type ContextType = typeof StoreContext

export const Provider = (props: any) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
         </StoreContext.Provider>
    )
}