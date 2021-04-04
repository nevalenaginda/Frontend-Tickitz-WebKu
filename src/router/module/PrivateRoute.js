import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export default function PrivateRoute({component: Component, ...rest}) {
    const isAuth = localStorage.getItem('token')
    return (
        <Route {...rest} render={(props)=> isAuth? <Component {...props}/> : <Redirect to="/login"/>}/>
    )
}
