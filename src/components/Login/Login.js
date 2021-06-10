import React, { Fragment, useEffect, useState } from 'react'
import { authentificationService } from '../Services/authentificationService'
import {useAuthContext} from '../UserContext'
import { useHistory, Redirect } from "react-router-dom";



function Login() {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    let history = useHistory();
    const isAuth = useAuthContext()

    useEffect(()=>{ 
    const loggedIn = isAuth.user 
    console.log(loggedIn)
        if(loggedIn){
            history.push('/dashboard')
        }  else {
            <Redirect to='/login'/>
        }
    })

    const  loginHandleSubmit= async(e)=>{ 
    e.preventDefault()
    authentificationService.login(email, password)
    .then(user=>{
        if(Boolean(user)){
            localStorage.setItem('currentUser', JSON.stringify(user.access_token))
            authentificationService.getUser().then(user=>isAuth.setUser(user))   
        }
        console.log(isAuth)
        console.log(user)      
    })    
}
   
        
    return (
        <Fragment> 
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Login</div>

                                <div className="card-body">
                                    <form onSubmit={loginHandleSubmit}>
                                        <input type="hidden" name="_token" value="C76hkP1YyHg3mQujS7ECAaZ6EJGpT4nGgVuB9alm"/>
                                        <div className="form-group row">
                                            <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                            <div className="col-md-6">
                                                <input id="email" type="email" className="form-control " name="email"  required autoComplete="email"  onChange={e=>setEmail(e.target.value)} autofocus />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" type="password" className="form-control " name="password" required  onChange={e=>setPassword(e.target.value)} autoComplete="current-password" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-6 offset-md-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                                                    <label className="form-check-label" htmlFor="remember">
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-0">
                                            <div className="col-md-8 offset-md-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Login
                                                </button>
                                                <a>
                                                  Forgot Your Password?
                                                </a>                             
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default Login
