import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authentificationService } from './components/Services/authentificationService';
import {useAuthContext} from './components/UserContext'

function PrivateRoute ({ component: Component, ...rest }) {
    const currentUser = localStorage.getItem('currentUser'); 
    

    
    return (

        <Route {...rest} render={props => {
            if (currentUser) {
                // authorised so return component
             return <Component {...props} />
            } else        
             // not logged in so redirect to login page with the return url
            return <Redirect to='/login'/>
        }} />

    )
}
    


export default PrivateRoute