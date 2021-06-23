import React,{useState} from 'react'
import { authentificationService } from '../Services/authentificationService'

function UpdatePassword() {


    const [email, setEmail]=useState('')
    const [code, setCode]=useState('')
    const [password, setPassword]=useState('')
    const [password_confirmation, setPasswordConfirm]=useState('')
    const [sucess, setSucess] = useState(false)
    const [error, setError] = useState(false)

    const handleSetNewPassword  =(e)=>{
        e.preventDefault()
        authentificationService.setNewPassword(code, email, password, password_confirmation)
        .then(result => { 
            console.log(result)
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
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Set New Password(Update Password)</div>
                           {  Boolean(sucess) && <div class="alert alert-success" role="alert">
                             Your password have been successfully updated
                            </div>}
                            <div className="card-body">
                                <form onSubmit={handleSetNewPassword}>
                                    <div className="m-group row">
                                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Code</label>
                                        <div className="col-md-6">
                                            <input id="name" type="text" className="form-control " name="code" required  autofocus onChange={e=>setCode(e.target.value)} />
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
                                                Set New Password
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
          
        </div>
    )
}

export default UpdatePassword

