import React from 'react'
import './MoneyTransfert.css'

function SendMoney() {
    return (
        <div>
            <div id="send-money" className="tab-pane fade in active show">
                            <form  method="post" action="http://masizatech.com/account/confirm/NGN_TO_XOF">
                              <div className="form-field">
                              <input type="hidden" name="_token" value="KhvMf7KybMh0CLHYuwJmQMngX5BJgaDYEbfFjYtD"/>                    
                                <label>send amount <span>&#8358;</span></label>
                                <div className="join-field">
                                  <input type="number" value="" required min="100" max="500000" name="amount" placeholder="1000"/>
                                  <input type="hidden" required name="send_provider_id" value="3"/>
                                  <div className="curr-select">
                                    <span className="selected"><img src="http://masizatech.com/assets/fend/images/flags/nigeria.png" alt=""/>NGN &nbsp;
                                    </span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="form-field">
                                <label>Receiver Number (MOOV/MTN BJ) </label>
                                <div className="join-field">
                                  <input type="text" required value="" name="receiver_number" placeholder="22990505050"/>
                                </div>
                              </div>
                              
                              <div className="form-field">
                                <label>Purpose</label>
                                <div className="join-field">
                                  <input type="text" required value="" name="purpose" placeholder=""/>
                                </div>
                              </div>
                              
                              <div className="form-field">
                                <label>Receiver Email(Optional)</label>
                                <div className="join-field">
                                  <input type="email" value="" name="receiver_email" placeholder=""/>
                                </div>
                              </div>
          
                                <a className="btn btn-secondary btn-block" href="http://masizatech.com/login">Login</a> 
                                <a className="btn btn-primary btn-block" href="http://masizatech.com/register">Register</a>
                                <span className="accept-terms">By clicking continue, i am agree with <a href="#">Terms &amp; Policy</a></span>
                            </form>
                          </div>
            
        </div>
    )
}

export default SendMoney
