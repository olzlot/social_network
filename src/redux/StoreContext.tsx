import React from "react";


const StoreContext = React.createContext(null)

// type ContextType = typeof StoreContext

export const Provider = (props: any) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
         </StoreContext.Provider>
    )
}