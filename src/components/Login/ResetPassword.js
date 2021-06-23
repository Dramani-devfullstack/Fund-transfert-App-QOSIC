import React, { useState } from 'react'
import { authentificationService } from '../Services/authentificationService'
import UpdatePassword from './UpdatePassword'
import { useHistory, Redirect, Link } from "react-router-dom";

function ResetPassword() {

    const [email, setEmail] = useState('')
    const [sucess, setSucess] = useState(false)
    const [error, setError] = useState(false)

    const handleResetPassword = (e) => {
        e.preventDefault()
        authentificationService.resetPassword(email)
            .then(result => { 
                if(result.status === '000'){
                    setSucess(true)
                }
                if(result.status === 'Error'){
                    setError(true)
                }
            })
    }

    console.log(sucess) 
    console.log(error)

    return (
        <div>

            <div class="header03">
                <div class="header-main">
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">Reset Password</div>
                            <div class="alert alert-success" role="alert">
                            { Boolean(sucess) && <p>We have emailed your password reset link!</p> }  
                            </div>
                            <div class="alert alert-danger" role="alert">
                            { Boolean(error) && <p>There is an error, please try again</p> }  
                            </div>
                            <div class="card-body">
                                <form onSubmit={handleResetPassword}>
                                    <div class="form-group row">
                                        <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                        <div class="col-md-6">
                                            <input id="email" type="email" class="form-control " name="email" onChange={(e) => { setEmail(e.target.value) }} required autocomplete="email" autofocus />
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-md-6 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                Send Password Reset Link
                                            </button>
                                        </div>
                                    </div>
                                   { Boolean(sucess) && <Link to='/updatePassword'>Continuer </Link>}
                                </form>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ResetPassword
