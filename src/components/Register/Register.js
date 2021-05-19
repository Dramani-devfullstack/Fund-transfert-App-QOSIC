import React, { Fragment, useState } from 'react'
import $ from "jquery";
import axios from 'axios'


function Register() {

    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [confirm_password, setPasswordConfirm]=useState('')

    const  submit= async(e)=>{
       
        e.preventDefault()
      var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer Let3sr6cwrkG6yXVQUV7csPh9PvbAEdpk5TH7MJdnGd2KFu9");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");

        var raw = JSON.stringify({"name":name,"email":email,"password":password,"password_confirmation":confirm_password});
        console.log(raw)
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        };

        fetch("http://api.sendime.com:9000/api/register", requestOptions)
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
                            <div className="card-header">Register</div>

                            <div className="card-body">
                                <form onSubmit={submit}>
                                 {/* <input type="hidden" name="_token" value="5|B8Rd6iaLVLfL0UDEzMHYrU1FrziigEtWIsedTaA1" /> */}
                          {/* <input type="hidden" name="CSRF token"  value="5|B8Rd6iaLVLfL0UDEzMHYrU1FrziigEtWIsedTaA1"/> */}
                                    <div className="m-group row">
                                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>
                                        <div className="col-md-6">
                                            <input id="name" type="text" className="form-control " name="name" required  autofocus onChange={e=>setName(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control " name="email"  required   onChange={e=>setEmail(e.target.value)}  />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control " name="password" required autocomplete="new-password" onChange={e=>setPassword(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                        <div className="col-md-6">
                                            <input id="password-confirm" type="password" className="form-control" name="password_confirmation" required autocomplete="new-password" onChange={e=>setPasswordConfirm(e.target.value)} />
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
