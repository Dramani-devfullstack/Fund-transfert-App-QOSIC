import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { authentificationService } from '../Services/authentificationService'

function Mailactivation() {

    const [email, setEmail]=useState('') 
      const handleResendMail=(e)=> {
          e.preventDefault()
          authentificationService.resendEmail(email)
          .then(result=>{
              if(result.status==='000'){
                   let message = result.message
                   return message
              }
              return result.message
          })
        }
    return (
        <div style={{fontSize:"18px", display:"flex", alignItems:"center", justifyContent:"center", height:"100vh", width:'100%'}}>
            <p >
                Un email a été envoyé à l'adresse  cliquez sur le lien contenu dans le mail pour activer votre compte.<br/>  
                Cliquez ensuite sur <Link to='/login'>Connectez-vous</Link> pour vous connectez.<br/>  
                Si vous n'avez pas reçu le mail <Link onClick={handleResendMail}>Renvoyez le mail</Link>
            </p>
        <div className="form-group row">
            <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
            <div className="col-md-6">
             <input id="email" type="email" className="form-control " name="email"  required   onChange={e=>setEmail(e.target.value)}  />
            </div>
        </div>
            
        </div>
    )
}

export default Mailactivation
