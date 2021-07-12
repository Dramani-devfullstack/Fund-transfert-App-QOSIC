import React, { Fragment, useEffect, useState } from 'react'
import { authentificationService } from '../Services/authentificationService'
import { useAuthContext } from '../UserContext'
import { useHistory, Redirect, Link } from "react-router-dom";
import Loading from '../Loading/Loading';
import './login.css'

// const stylesSuccess=[ 
//   { borderColor: 'rgb(31, 241, 42, 0.5)',
//     boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(31, 241, 42, 0.5)'}
// ]
    



// const stylesError= {
//     borderColor: 'rgb(252, 8, 0)',
//     boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(252, 8, 0, 0.5)'
    
// }



function Login() {

    const [input, setInput] = useState({ email:'', password:''})
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [isValid, setIsValid] = useState('');
    const [message, setMessage] = useState('');
    let history = useHistory();
    const isAuth = useAuthContext()
    // console.log(error)
    const loggedIn = isAuth.user
    console.log(isValid)
    let inputs = document.querySelector('input#email')

    function  Check_error (){
       
        if(isValid===false){
                inputs.style.borderColor='rgb(252, 8, 0)'
                inputs.style.boxShadow='0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(252, 8, 0, 0.5)'
        }else{
           

        }

    }

    function Check_success(){

        if(isValid===false){
            inputs.style.borderColor='rgba(31, 241, 42, 0.5)'
            inputs.style.boxShadow='0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(31, 241, 42, 0.5)'
    }

    }

   

    useEffect(() => {

        let inputs = document.querySelector('input#email')
        console.log(inputs)

        

        // if(isValid===false){
        //     inputs.addEventListener('onchange', ()=>{
        //         inputs.style.borderColor='rgb(252, 8, 0)'
        //         inputs.style.boxShadow='0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(252, 8, 0, 0.5)'
        //     })
        // }
        
        
        // if(isValid===true){
        //     inputs.addEventListener('focus', ()=>{
        //         inputs.style.borderColor='rgba(31, 241, 42, 0.5)'
        //         inputs.style.boxShadow='0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(31, 241, 42, 0.5)'
        //     })
        // }
        
        console.log(inputs)

        // setTimeout(() => {
        //     setError(false);
        // }, 10000);
    }, []
    )

    const handleInput =(e)=>{
        const {name, value} = e.target;
        setInput((prevFormValues) => ({
            // ...prevFormValues,
            [name]: value,
          }));
          console.log(input.email)

        const verEmail =  /\S+@\S+\.\S+/
      if (verEmail.test(input.email)) {
          setIsValid(true);
          Check_success()
        } else {
          setIsValid(false);
          Check_error()
          setMessage(); 
        }
           }

    const loginHandleSubmit = async (e) => {    
        e.preventDefault()
        setLoading(true)
       
        authentificationService.login(input)
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
                    setError(result.data.error)
                    setLoading(false)
                }
            })
    }
    return isLoading ? <Loading/>
        : (
            <Fragment >
               
                <div className="container" style={{height:'75vh'}} >
                    <div className="row d-flex align-items-center justify-content-center" style={{backgroundColor:'', height:'50vh'}} >
                        <div className="col-md-8">
                            <div className="card">
                            <div className="card-header py-1 text-center"> <h5>Login</h5> </div>
                            {Boolean(error) ? <div class="alert alert-danger text-center" role="alert">
                                {error.map((item) => {
                                    return (
                                        <p>{item}</p>
                                    )
                                })}
                            </div> : null}
                                <div className="mx-auto  my-auto col-md-12">
                                    <form onSubmit={loginHandleSubmit}>
                                        <div className="form-group col-md-10 mx-auto">
                                            <label htmlFor="email" className="col-md-12 mx-auto d-block col-form-label">Email</label>
                                            <div className="col-md-12 mx-auto">
                                                <input id="email" type="email" className="form-control " name="email" required autoComplete="email" onChange={handleInput}  
                                                autofocus />
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
                                                <input id="password" type="password" className="form-control " name="password" required onChange={handleInput}  
                                                autoComplete="current-password" />
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
