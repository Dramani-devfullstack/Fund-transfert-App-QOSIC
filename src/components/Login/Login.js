import React, { Fragment, useEffect, useState } from 'react'
import { authentificationService } from '../Services/authentificationService'
import { useAuthContext } from '../UserContext'
import { useHistory, Redirect, Link, useLocation } from "react-router-dom";
import Loading from '../Loading/Loading';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    let history = useHistory();
    const isAuth = useAuthContext()
    let danger = error.message
    const loggedIn = isAuth.user
    const location = useLocation();
    let query = useQuery()
   let callbackurl= query.get('callbackurl');
    useEffect(() => {
        // if (loggedIn) {
        //     history.push('/dashboard')
        // } else {
        //     <Redirect to='/login' />
        // }
        console.log(location.pathname)

        setTimeout(() => {
            setError(false);
        }, 10000);
    }, [loggedIn]
    )

    const loginHandleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        authentificationService.login(email, password)
            .then(result => {
                if (result.status === '000') {
                    localStorage.setItem('currentUser', JSON.stringify(result.data.access_token))
                    console.log('get callback', callbackurl)
                    if(callbackurl){
                        window.location.replace(callbackurl)
                    }else{
                         history.push('/dashboard')
                    }
                   
                    authentificationService.getUser().then(user => isAuth.setUser(user))
                    setLoading(false)
                }else{
                    <Redirect to='/login' />
                }
                if (result.status === 'Error') {
                    setError(result)
                    setLoading(false)
                }
            })
    }
    return isLoading ? <Loading/>
        : (
            <Fragment>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Login</div>
                                <div className=' text-center text-danger' >
                                    <p style={{ fontSize: '16px' }} >{danger}</p>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={loginHandleSubmit}>
                                        <input type="hidden" name="_token" value="C76hkP1YyHg3mQujS7ECAaZ6EJGpT4nGgVuB9alm" />
                                        <div className="form-group row">
                                            <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                            <div className="col-md-6">
                                                <input id="email" type="email" className="form-control " name="email" required autoComplete="email" onChange={e => setEmail(e.target.value)} autofocus />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" type="password" className="form-control " name="password" required onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
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
                                                <Link to='/resetpassword'   >
                                                    Forgot Your Password?
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
}

export default Login
