import React, { Fragment, useState,useEffect } from 'react'
import { authentificationService } from '../Services/authentificationService'
import {useAuthContext} from '../UserContext'
import { useHistory, Redirect } from "react-router-dom";



function Register() {

    
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [password_confirmation, setPasswordConfirm]=useState('')
    const [response, setResponse]=useState('')
    const [error, setError]=useState('')
    const isAuth = useAuthContext()
    const history = useHistory()
    let danger = error.message
    
    useEffect(()=>{ 
        const loggedIn = isAuth.user 
        console.log(loggedIn)
        console.log(isAuth)
            if(Boolean(response)){
                history.push('/mailactivation')
            }  else {
                <Redirect to='/register'/>
            }

            setTimeout(() => {
                setError(false);
            }, 10000);
        })

    const  submit= async(e)=>{   
        e.preventDefault()
        authentificationService.register(name,email,password,password_confirmation)
            .then(result=>{
                if(result.status === '000' ){
                    setResponse(result)  
                }
                if(result.status ==='Error'){ 
                   setError(result)      
            }  })
                
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Register</div>
                            <div className=' text-center text-danger' >
                                        <p style={{fontSize:'16px'}} >{danger}</p> 
                                    </div>
                            <div className="card-body">
                                <form onSubmit={submit}>
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
                                             <p>(8 characters minimum, mixed of letter, number and symbol)</p>
                                        </div>

                                        
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                        <div className="col-md-6">
                                            <input id="password-confirm" type="password" className="form-control" name="password_confirmation" required autocomplete="new-password" onChange={e=>setPasswordConfirm(e.target.value)} />
                                             <p>(8 characters minimum, mixed of letter, number and symbol)</p>
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
