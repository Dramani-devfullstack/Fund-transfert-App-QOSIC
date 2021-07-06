import React, { Fragment, useState, useEffect } from 'react'
import { authentificationService } from '../Services/authentificationService'
import { useAuthContext } from '../UserContext'
import { useHistory, Redirect } from "react-router-dom";
import Loading from '../Loading/Loading';



function Register() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirm] = useState('')
    const [response, setResponse] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)
    const isAuth = useAuthContext()
    const history = useHistory()


    console.log(error)

    useEffect(() => {
        const loggedIn = isAuth.user
        console.log(loggedIn)
        console.log(isAuth)

        // if (Boolean(response)) {
        //     history.push('/mailactivation')
        // } else {
        //     <Redirect to='/register' />
        // }
        // let input = document.querySelector('input')
        // console.log(input)
        // input.addEventListener('focus', ()=>{
        //     setError(false)
        //     console.log('fonctioinne')
        // }, true)

        setTimeout(() => {
            setError(false);
        }, 10000);
    }, [isAuth])

    const submit = async (e) => {
        e.preventDefault()
        setLoading(true)
        authentificationService.register(name, email, password, password_confirmation)
            .then(result => {
                if (result.status === '000') {
                    setLoading(false)
                    setResponse(result)
                    history.push('/mailactivation')
                }
                if (result.status === 'Error') {
                    setLoading(false)
                    setError(result.data.error)
                }
            })

    }
    return isLoading ? <Loading /> : (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header py-1 text-center">Register</div>
                            {Boolean(response) ? <div class="alert alert-success text-center" role="alert">
                                Successful registered
                            </div> : null}
                            {Boolean(error) ? <div class="alert alert-danger text-center" role="alert">
                                {error.map((item) => {
                                    return (
                                        <p>{item}</p>
                                    )
                                })}
                            </div> : null}
                            <div className="card-body">
                                <form onSubmit={submit}>
                                    <div className="form-group col-md-10 mx-auto">
                                        <label htmlFor="name" className="col-md-12 mx-auto d-block col-form-label ">Name</label>
                                        <div className=" col-md-12 mx-auto">
                                            <input id="name" type="text" className="form-control " name="name" required autofocus onChange={e => setName(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="form-group col-md-10 mx-auto">
                                        <label htmlFor="email" className="col-md-12 mx-auto d-block col-form-label ">Email</label>
                                        <div className="col-md-12 mx-auto">
                                            <input id="email" type="email" className="form-control " name="email" required onChange={e => setEmail(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="form-group col-md-10 mx-auto">
                                        <label htmlFor="password" className="col-md-12 mx-auto d-block col-form-label ">Password</label>
                                        <div className="col-md-12 mx-auto">
                                            <input id="password" type="password" min='8' className="form-control " name="password" required autocomplete="new-password" onChange={e => setPassword(e.target.value)} />
                                            <span style={{ fontSize: '10px' }}>It should be 8 characters minimum</span>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-10 mx-auto">
                                        <label htmlFor="password-confirm" className="col-md-12 mx-auto d-block col-form-label ">Confirm Password</label>
                                        <div className="col-md-12 mx-auto">
                                            <input id="password-confirm" type="password" min='8' className="form-control" name="password_confirmation" required autocomplete="new-password" onChange={e => setPasswordConfirm(e.target.value)} />
                                            <span style={{ fontSize: '10px' }}>It should be 8 characters minimum</span>
                                        </div>
                                        <span style={{margin:'10px', display:'block'}} className="col-md-10 mx-auto">By clicking register, i am agree with <a href="#">Terms &amp; Policy</a></span>
                                    </div>
                                   
                                    <button style={{ padding: '10px 10px', fontSize: '14px' }} type="submit" className="btn btn-primary d-block mb-2 mx-auto">
                                        Register
                                    </button>
                                    
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

            export default Register
