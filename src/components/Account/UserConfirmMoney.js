import React, { useState } from 'react'
import './Account.scss'
import './styles.scss'
import './Account.css'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";



function UserConfirmMoney({ TransfertInfo }) {
    const data = TransfertInfo.data
    let payement_url = data[0].flutterwave.payment_url
    // let redirect_url = `http://localhost5000.com/verification ?` + data[0].flutterwave.redirect_url

    return (

        <div className="tab-pane fade " id="pills-profile2" role="tabpanel"
            aria-labelledby="pills-profile-tab">
            <form method='POST' action={payement_url} className="form bg-offwhite py-4">
                <div className="text-center">
                    <h3>You are sending money to <b> {data[0].operator}</b> {data[0].receiver_msisdn}</h3>
                    <h4>Recipient Amount: {data[0].recipient_receives_XOF} XOF </h4>
                    <p>{data[0].purpose}</p>
                    <a className="pbtn btn-link"
                        data-id="chnage-pay-method">Edit Payment</a>
                </div>
                <br />
                <p className="text-muted text-center">The current exchange rate is <b>1 XOF = {data[0].currency[0].QOS_SELLAMOUNT} NGN</b></p>
                <hr />
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-left"><b>QOS Transactions fees </b></p>
                    </div>
                    <div className="col-md-6">
                        <div className="text-right">
                            <span
                                className="bg-success free-charge">NGN  {data[0].fee}</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-left"><b>Send Amount</b></p>
                    </div>
                    <div className="col-md-6">
                        <span className="float-right">{data[0].netamount_NGN}NGN</span>
                    </div>
                </div>
                <p className="text-center">For more information, please read our <a href="#">user
                    agreement.</a></p>
                <ul className="pager mt-4">
                    <li>
                        <a className="btn btn-default mr-0">
                            <FaChevronLeft />
                            <span className="bh"></span>
                            <span>Back</span>
                            {/* <button type="button" onClick={() => props.history.goBack()}>
                                Go back
                            </button> */}

                        </a>
                    </li>

                    <li>
                        <button type="submit" className="btn btn-default mr-0" onClick="return">
                            <span className="bh"></span>
                            <span>Send Money</span>
                            <FaChevronRight />
                        </button>

                    </li>
                </ul>

                <input type="hidden" name="_token" value={localStorage.getItem('currentUser')} />
                <input type="hidden" name="amount" value={data[0].flutterwave.amount} />
                <input type="hidden" name="public_key" value={data[0].flutterwave.public_key} />
                <input type="hidden" name="customer[email]" value={data[0].flutterwave['customer[email]']} />
                <input type="hidden" name="customer[phone_number]"
                    value={data[0].flutterwave['customer[phone_number]']} />
                <input type="hidden" name="customer[name]" value={data[0].flutterwave['customer[name]']} />
                <input type="hidden" name="tx_ref" value={data[0].flutterwave.tx_ref} />
                <input type="hidden" name="currency" value={data[0].flutterwave.currency} />
                <input type="hidden" name="redirect_url"
                    value={`http://localhost:5000/sendmoney`} />
                <input type="hidden" name="meta[token]" value={data[0].flutterwave['meta[token]']} />
                <input type="hidden" name="meta[cron_id]"
                    value={data[0].flutterwave['meta[cron_id]']} />
                <input type="hidden" name="meta[user_id]" value={data[0].flutterwave['meta[user_id]']} />
                <input type="hidden" name="meta[receiver_msisdn]"
                    value={data[0].flutterwave['meta[receiver_msisdn]']} />
                <input type="hidden" name="meta[receiver_email]"
                    value={data[0].flutterwave['meta[receiver_email]']} />
                <input type="hidden" name="meta[purpose]" value={data[0].flutterwave['meta[purpose]']} />
                <input type="hidden" name="meta[charge_fee_amount]"
                    value={data[0].flutterwave['meta[charge_fee_amount]']} />
                <input type="hidden" name="meta[original_amount]" value={data[0].flutterwave['meta[original_amount]']} />
                <input type="hidden" name="meta[lang]" value={data[0].flutterwave['meta[lang]']}
                />
            </form>
        </div>
    )
}
export default UserConfirmMoney
