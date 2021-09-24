import React, { ComponentType } from "react"
import { connect, ConnectedProps } from "react-redux"
import { Redirect } from "react-router"
import { AppStateType } from "../../../../redux/store"


const Mstp = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

const connector = connect(Mstp, {})
type LoginRedirectPropsType = ConnectedProps<typeof connector>

export function withLoginRedirect<T>(Component: ComponentType<T>) {
    
    const RedirectedComponent = (props: LoginRedirectPropsType) => {
        
        let {isAuth, ...restProps} = props

        if (!props.isAuth) return <Redirect to='/login'/>
        return <Component {...restProps as T}/>

    }

    return connector(RedirectedComponent)

}






export default withLoginRedirect