import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { authentificationService } from '../Services/authentificationService'

function Mailactivation() {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [response, setResponse] = useState('')
    console.log(error)
    console.log(response)
    let res= response.message
    const handleResendMail = (e) => {
        e.preventDefault()
        authentificationService.resendEmail(email)
            .then(result => {
                if(result.status ==='000'){
                setResponse(result)
                }

                if(result.status ==='Error'){
                    setError(result)
                }
        } 
            )
    }
    return (
        <div>
            <div style={{ fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: '100%' }}>
                <div>
                    <p >
                        Un email a été envoyé à l'adresse  cliquez sur le lien contenu dans le mail pour activer votre compte.<br />
                        Cliquez ensuite sur <Link to='/login'>Connectez-vous</Link> pour vous connectez.<br />
                        Si vous n'avez pas reçu le mail,remettez votre email en bas et cliquez sur submit
                    </p>
                    <form onSubmit={handleResendMail}>
                       
                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                        <input id="email" type="email" className="form-control " name="email" required onChange={e => setEmail(e.target.value)} />
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <p style={{color:'green'}} > {res}</p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Mailactivation
