import React, { Fragment } from 'react'
import './Register.css'

function Register() {
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Register</div>

                            <div className="card-body">
                                <form method="POST" action="http://masizatech.com/register">
                                    <input type="hidden" name="_token" value="C76hkP1YyHg3mQujS7ECAaZ6EJGpT4nGgVuB9alm"/>
                                    <div className="form-group row">
                                        <label for="name" className="col-md-4 col-form-label text-md-right">Name</label>

                                        <div className="col-md-6">
                                            <input id="name" type="text" className="form-control " name="name" value="" required autocomplete="name" autofocus />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label for="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control " name="email" value="" required autocomplete="email" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control " name="password" required autocomplete="new-password"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label for="password-confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                        <div className="col-md-6">
                                            <input id="password-confirm" type="password" className="form-control" name="password_confirmation" required autocomplete="new-password" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Register
                                            </button>
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

export default Register
