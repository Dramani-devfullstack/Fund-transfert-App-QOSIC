import React, { Fragment } from 'react'
import './Login.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Login() {
    return (
        <Fragment> 
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Login</div>

                                <div className="card-body">
                                    <form method="POST" action="http://masizatech.com/login">
                                        <input type="hidden" name="_token" value="C76hkP1YyHg3mQujS7ECAaZ6EJGpT4nGgVuB9alm"/>
                                        <div className="form-group row">
                                            <label for="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                            <div className="col-md-6">
                                                <input id="email" type="email" className="form-control " name="email"  required autoComplete="email" autofocus />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" type="password" className="form-control " name="password" required autoComplete="current-password" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-6 offset-md-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                                                    <label className="form-check-label" for="remember">
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

                                                <a className="" href="http://masizatech.com/password/reset">
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
