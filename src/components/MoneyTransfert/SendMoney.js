import React, { useEffect, useState } from 'react'
import { authentificationService } from '../Services/authentificationService'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom'
import './MoneyTransfert.css'


function SendMoney() {
  const [res, setRes] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  let data = res.QOS_SELLAMOUNT
  let receive = data *input
 
  console.log(isLoading)
  useEffect(()=>{
    setLoading(true)
    authentificationService.getBasicInfo().then(result=>{if(result.status === '000'){
      setLoading(false)
      setRes(result.data.currency[0])
    }}
  )
  },[setRes])

    return isLoading ? <Loading/> : (
        <div>
            <div id="send-money" className="tab-pane fade in active show">
                            <form >
                              <div className="form-field">
                                                
                                <label>send amount <span>&#8358;</span></label>
                                <div className="join-field">
                                  <input type="number" required min="100" max="500000" name="amount" onChange={(e)=>{setInput(e.target.value)}} placeholder="1000"/>
                                  <input type="hidden" required name="send_provider_id" value="3"/>
                                  <div className="curr-select">
                                    <span className="selected"><img src="http://masizatech.com/assets/fend/images/flags/nigeria.png" alt=""/>NGN &nbsp;
                                    </span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="form-field">
                                <label>Rate Exchange( { `1XOF =  ${data}  NGN`} ) </label>
                                <div className="join-field">
                                <input type="text" required value={ `1XOF =  ${data}  NGN`}  name="receiver_number" placeholder="22990505050"/>
                                </div>
                              </div>

                              <div className="form-field">
                                <label>Receiver Amount (XOF) </label>
                                <div className="join-field">
                                  <input type="text" required value={`${receive} XOF`} name="receiver_number" placeholder="22990505050"/>
                                </div>
                              </div>
                              
                              <Link style={{margin:'5px', textDecoration:'none'}}  to='/login' >
                              <a  className="btn btn-secondary btn-block" >Login</a> 
                              </Link>
                              
                              <Link style={{textDecoration:'none'}}  to='/register' >
                              <a className="btn btn-primary btn-block" >Register</a>
                              </Link>
                                <span style={{margin:'10px'}} className="accept-terms">By clicking continue, i am agree with <a href="#">Terms &amp; Policy</a></span>
                            </form>
                          </div>
            
        </div>
    )
}

export default SendMoney
