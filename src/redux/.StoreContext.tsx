import React from "react";
import { StoreType } from "./store";


export const StoreContext = React.createContext({} as StoreType)
// export const StoreContext = React.createContext(store)   - - почему передаем НАЛЛ или пустой объект, 
// чтобы переиспользовать с разными контекстами??? но ведь мы типизируем именно на СТОРТИП????

// type ContextType = typeof StoreContext

export const Provider = (props: {store: StoreType, children: React.ReactNode}) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
         </StoreContext.Provider>
    )
} 