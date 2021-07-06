import React, { Fragment, useEffect, useState } from 'react'
import { authentificationService } from '../Services/authentificationService'
import { useAuthContext } from '../UserContext'
import { useHistory, Redirect, Link } from "react-router-dom";
import Loading from '../Loading/Loading';



function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    let history = useHistory();
    const isAuth = useAuthContext()
    let danger = error.message
    const loggedIn = isAuth.user


    useEffect(() => {
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
                    history.push('/dashboard')
                    authentificationService.getUser().then(user => isAuth.setUser(user))
                    setLoading(false)
                }else{
                    <Redirect to='/login' />
                }
                if (result.status === 'Error') {
                    setError(result)
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
                            <div className="card-header py-1 text-center"> <h5>Login</h5> </div>
                                <div className=' text-center text-danger' >
                                    <p style={{ fontSize: '16px' }} >{danger}</p>
                                </div>
                                <div className="mx-auto col-md-12">
                                    <form onSubmit={loginHandleSubmit}>
                                        <div className="form-group col-md-10 mx-auto">
                                            <label htmlFor="email" className="col-md-12 mx-auto d-block col-form-label">Email</label>
                                            <div className="col-md-12 mx-auto">
                                                <input id="email" type="email" className="form-control " name="email" required autoComplete="email" onChange={e => setEmail(e.target.value)} autofocus />
                                            </div>
                                        </div>

                                        <div className="form-group col-md-10 mx-auto">
                                            <div className="d-flex center align-items-center justify-content-between col-md-12">
                                            <label htmlFor="password" className="">Password</label>
                                            <Link className=""  style={{fontSize:'11px', textDecoration:'none'}} to='/resetpassword'   >
                                                    Forgot Your Password ?
                                            </Link> 
                                            </div>
                                            <div className="col-md-12">
                                                <input id="password" type="password" className="form-control " name="password" required onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
                                            </div>
                                        </div>
                                        {/* <div className="form-group row">
                                            <div className="col-md-6 offset-md-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                                                    <label className="form-check-label" htmlFor="remember">
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div> */}

        
                                                <button type="submit" style={{padding:'10px 10px', fontSize:'14px'}} className="btn btn-primary d-block mb-2 mx-auto">
                                                    Login
                                                </button>
                    
                                    </form>
                                </div>
                            </div>
                            {/* <hr /> */}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
}

export default Login
