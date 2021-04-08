import React, { useState } from 'react'
import './MoneyTransfert.css'

function ReceiveMoney() {
    return (
        <div>

<div id="receive-money" className="tab-pane fade in active show">
                            <form  method="post" action="http://masizatech.com/account/confirm/XOF_TO_NGN">
                              <input type="hidden" name="_token" value="KhvMf7KybMh0CLHYuwJmQMngX5BJgaDYEbfFjYtD"/>              <div className="form-field">
                                <label>send amount XOF</label>
                                <div className="join-field">
                                  <input type="text" id="amount" required value="" min="100" max="500000" name="amount" placeholder="1000"/>
                                  <div className="curr-select">
                                    <span className="selected"><img src="http://masizatech.com/assets/fend/images/flags/benin.png" alt=""/>XOF </span>
                                  </div>
                                </div>
                              </div>
          
                              <div className="form-field">
                                <label for="rcv_country">Receiver Bank</label>
                                <select id="rcv_country" required name="bank_code">
                                  <option value="">Select Bank</option>
                                                              <option value="044">Access Bank</option>
                                                              <option value="023">Citi Bank</option>
                                                              <option value="050">EcoBank PLC</option>
                                                              <option value="011">First Bank PLC</option>
                                                              <option value="214">First City Monument Bank</option>
                                                              <option value="070">Fidelity Bank</option>
                                                              <option value="058">Guaranty Trust Bank</option>
                                                              <option value="076">Polaris bank</option>
                                                              <option value="221">Stanbic IBTC Bank</option>
                                                              <option value="068">Standard Chaterted bank PLC</option>
                                                              <option value="232">Sterling Bank PLC</option>
                                                              <option value="033">United Bank for Africa</option>
                                                              <option value="032">Union Bank PLC</option>
                                                              <option value="035">Wema Bank PLC</option>
                                                              <option value="057">Zenith bank PLC</option>
                                                              <option value="215">Unity Bank PLC</option>
                                                              <option value="101">ProvidusBank PLC</option>
                                                              <option value="082">Keystone Bank</option>
                                                              <option value="301">Jaiz Bank</option>
                                                              <option value="030">Heritage Bank</option>
                                                              <option value="100">Suntrust Bank</option>
                                                              <option value="608">FINATRUST MICROFINANCE BANK</option>
                                                              <option value="090175">Rubies Microfinance Bank</option>
                                                              <option value="090267">Kuda</option>
                                                              <option value="090115">TCF MFB</option>
                                                              <option value="400001">FSDH Merchant Bank</option>
                                                              <option value="502">Rand merchant Bank</option>
                                                              <option value="103">Globus Bank</option>
                                                              <option value="327">Paga</option>
                                                              <option value="000026">Taj Bank Limited</option>
                                                              <option value="100022">GoMoney</option>
                                                              <option value="090180">AMJU Unique Microfinance Bank</option>
                                                              <option value="090393">BRIDGEWAY MICROFINANCE BANK</option>
                                                              <option value="090328">Eyowo MFB</option>
                                                              <option value="090281">Mint-Finex MICROFINANCE BANK</option>
                                                              <option value="070006">Covenant Microfinance Bank</option>
                                                              <option value="090110">VFD Micro Finance Bank</option>
                                                              <option value="090317">PatrickGold Microfinance Bank</option>
                                                              <option value="090325">Sparkle</option>
                                                              <option value="305">Paycom</option>
                                                        </select>
                              </div>
          
                              <div className="form-field">
                                <label>Account Number</label>
                                <div className="join-field">
                                  <input type="text" required value="" name="account_number"  placeholder=""/>
                                </div>
                              </div>
          
                              <div className="form-field">
                                <label>Purpose</label>
                                <div className="join-field">
                                  <input type="text" required  value="" name="purpose" placeholder=""/>
                                </div>
                              </div>
          
                              <div className="form-field">
                                <label>Receiver Email(Optional)</label>
                                <div className="join-field">
                                  <input type="email"  value="" name="email" placeholder=""/>
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

export default ReceiveMoney