import React, { useState } from 'react'
import './Account.scss'
import './styles.scss'
import './Account.css'
import { useEffect } from 'react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import {Link} from 'react-router-dom'


function UserConfirmMoney({TransfertInfo}) {

    const data = TransfertInfo.data
    console.log(data)

    const [input, setInput]= useState({})

  const handleInput =(e)=>{
      
  }

  console.log(input)


    // useEffect(() => {
        

      
    //     return () => {         
    //     }
    // }, [])
     
                           

    let url = data[0].flutterwave.payment_url
    console.log(url)
    let _token = localStorage.getItem('currentUser')
    let amount = data[0].flutterwave.amount
    let public_key = data[0].flutterwave.public_key
    let customer_email = data[0].flutterwave['customer[email]']
    let phone_number = data[0].flutterwave['customer[phone_number]']
    let name = data[0].flutterwave['customer[name]']
    let tx_ref = data[0].flutterwave.tx_ref
    let currency = data[0].flutterwave.currency
    let payement_url = data[0].flutterwave.payment_url
    let redirect_url = data[0].flutterwave.redirect_url
    let meta_token = data[0].flutterwave['meta[token]']
    let cron_id = data[0].flutterwave['meta[cron_id]']
    let user_id = data[0].flutterwave['meta[user_id]']
    let receiver_msisdn = data[0].flutterwave['meta[receiver_msisdn]']
    let receiver_email = data[0].flutterwave['meta[receiver_email]']
    let purpose = data[0].flutterwave['meta[purpose]']
    let charge_fee_amount = data[0].flutterwave['meta[charge_fee_amount]']
    let original_amount = data[0].flutterwave['meta[original_amount]']
    let lang = data[0].flutterwave['meta[lang]']
   

    const handleConfirmPay = async (e) => {
        e.preventDefault()
        const datas = {
                 "payment_url":payement_url,
                "redirect_url": redirect_url,
                "public_key": public_key,
                "tx_ref": tx_ref,
                "currency": currency,
                "amount":amount,
                "customer[email]":customer_email,
                "customer[name]": name,
                "customer[phone_number]": phone_number,
                "meta[token]": meta_token,
                "meta[cron_id]": cron_id,
                "meta[user_id]": user_id,
                "meta[receiver_msisdn]":receiver_msisdn,
                "meta[receiver_email]":  receiver_email,
                "meta[purpose]": purpose,
                "meta[charge_fee_amount]":charge_fee_amount,
                "meta[original_amount]":original_amount,
                "meta[lang]": lang


        }
  
        
    

    
  
    }
    return (
        <div>
            <div class="tab-pane fade " id="pills-profile2" role="tabpanel"
                aria-labelledby="pills-profile-tab">
                <form  method='POST' action={payement_url} class="form bg-offwhite py-4">
                    <div class="text-center">
                        <h3>You are sending money to <b> {data[0].operator}</b> {data[0].receiver_msisdn}</h3>
                        <h4>Recipient Amount: {data[0].recipient_receives_XOF} FCFA </h4>
                        <p></p>
                        <a href="http://masizatech.com/account/payment/details"  class="pbtn btn-link"
                            data-id="chnage-pay-method">Edit Payment</a>
                    </div>
                    <br />
                    <p class="text-muted text-center">The current exchange rate is <b>1 XOF = {data[0].currency[0].QOS_SELLAMOUNT}
                    </b></p>
                    <hr />
                    <br />
                    <div class="row">
                        <div class="col-md-6">
                            <p class="text-left"><b>QOS Transactions fees </b></p>
                        </div>
                        <div class="col-md-6">
                            <div class="text-right">
                                <span
                                    class="bg-success free-charge"> {data[0].fee}</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-md-6">
                            <p class="text-left"><b>Send Amount</b></p>
                        </div>
                        <div class="col-md-6">
                            <span class="float-right">{data[0].netamount_NGN}NGN</span>
                        </div>
                    </div>
                    <p class="text-center">For more information, please read our <a href="#">user
                        agreement.</a></p>
                    <ul class="pager mt-4">
                        <li>
                            <a class="btn btn-default mr-0">
                                <FaChevronLeft/>
                                <span class="bh"></span>
                                <span>Back</span>
                                
                            </a>
                        </li>
                       
                        <li>
                            <button type="submit" class="btn btn-default mr-0" onClick="return">
                                <span class="bh"></span>
                                <span>Send Money</span>
                                <FaChevronRight/>
                            </button>

                        </li>
                    </ul>

                         <input type="hidden" name="_token" onChange={(e)=>{setInput(e.target.value)}} value={localStorage.getItem('currentUser')}/>
                            <input type="hidden" name="amount" onChange={(e)=>{setInput(e.target.value)}}  value={data[0].flutterwave.amount} />
                            
                            <input type="hidden" name="public_key" onChange={(e)=>{setInput(e.target.value)}}   value={data[0].flutterwave.public_key} />
                            <input type="hidden" name="customer[email]" onChange={handleInput}  value={data[0].flutterwave['customer[email]']} />
                            <input type="hidden" name="customer[phone_number]" onChange={handleInput}
                                value={data[0].flutterwave['customer[phone_number]']} /> 
                            <input type="hidden" name="customer[name]" onChange={handleInput} value={data[0].flutterwave['customer[name]']} />
                            <input type="hidden" name="tx_ref" onChange={handleInput} value={data[0].flutterwave.tx_ref}  />
                            <input type="hidden" name="currency" onChange={handleInput} value={data[0].flutterwave.currency}  />
                            <input type="hidden" name="redirect_url" onChange={handleInput}
                                value={data[0].flutterwave.redirect_url}  />
                            <input type="hidden" name="meta[token]" onChange={handleInput} value={data[0].flutterwave['meta[token]']}  />
                            <input type="hidden" name="meta[cron_id]" onChange={handleInput}
                                value={data[0].flutterwave['meta[cron_id]']}  />
                            <input type="hidden" name="meta[user_id]" onChange={handleInput} value={data[0].flutterwave['meta[user_id]']}  />
                            <input type="hidden" name="meta[receiver_msisdn]" onChange={handleInput}
                                value={data[0].flutterwave['meta[receiver_msisdn]']}  />
                            <input type="hidden" name="meta[receiver_email]" onChange={handleInput}
                                value={data[0].flutterwave['meta[receiver_email]']}  />
                            <input type="hidden" name="meta[purpose]" onChange={handleInput} value={data[0].flutterwave['meta[purpose]']}  />
                            <input type="hidden" name="meta[charge_fee_amount]"  onChange={handleInput}
                                value={data[0].flutterwave['meta[charge_fee_amount]']}  />
                            <input type="hidden" name="meta[original_amount]" onChange={handleInput} value={data[0].flutterwave['meta[original_amount]']}  />
                            <input type="hidden" name="meta[lang]" onChange={handleInput} value={data[0].flutterwave['meta[lang]']} 
                             />


                </form>
            </div>

        </div>
    )
}


export default UserConfirmMoney
