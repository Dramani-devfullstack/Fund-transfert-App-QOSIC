import React, { Fragment, useState } from 'react'
import $ from "jquery"; 

function Login() {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const  loginHandleSubmit= async(e)=>{   
        e.preventDefault()
      var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer Let3sr6cwrkG6yXVQUV7csPh9PvbAEdpk5TH7MJdnGd2KFu9");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var raw = JSON.stringify({"email":email,"password":password});
    console.log(raw)
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch("http://api.sendime.com:9000/api/login", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      
    
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
