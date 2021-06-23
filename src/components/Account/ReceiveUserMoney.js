import React from 'react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { authentificationService } from '../Services/authentificationService';

function ReceiveUserMoney({ ReceiveInfo }) {
    const data = ReceiveInfo.data[0]
    console.log(data)

    let amount = data.amount;
    console.log(amount)
    let purpose = data.purpose;
    let customer_phone_number = data.user_msisdn;
    let customer_email = data.user_email;
    let receiver_bank_code = data.receiver_bank_code;
    let receiver_name = data.receiver_name;
    let receiver_email = data.receiver_email;
    let receiver_bank_account_number = data.receiver_bank_account_number;
    let receiver_bank_name = data.receiver_bank_name;


    const handleReceiveMoneyValidate = (e) => {
        e.preventDefault()
        authentificationService.validateMomoPayement(
            amount,
            purpose,
            customer_phone_number,
            customer_email,
            receiver_bank_code,
            receiver_name,
            receiver_email,
            receiver_bank_account_number,
            receiver_bank_name)
            .then(result => console.log(result))
    }

    return (
        <div className="tab-pane fade " id="pills-profile3" role="tabpanel"
            aria-labelledby="pills-profile-tab">
            <form onSubmit={handleReceiveMoneyValidate} className="form bg-offwhite py-4" method="POST" action="http://api.sendime.com:9000/api/user/validate/momopayment"  >
                <div className="text-center">
                    <h3>You are sending money to <b> ({data.receiver_bank_name}   {data.receiver_name})</b></h3>
                    <h4>Recipient Amount: {data.recipient_receives_NGN} NGN </h4>
                    <p>{data.purpose}</p>
                    <a className="pbtn btn-link"
                        data-id="chnage-pay-method">Edit Payment</a>
                </div>
                <br />
                <p className="text-muted text-center">The current exchange rate is <b>1 XOF = {(data.recipient_receives_NGN / data.netamount_XOF).toFixed(3)} NGN </b></p>
                <hr />
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-left"><b>QOS Transactions fees </b></p>
                    </div>
                    <div className="col-md-6">
                        <div className="text-right">
                            <span
                                className="bg-success free-charge"> {data.charge_fee_amount} XOF</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-left"><b>Send Amount</b></p>
                    </div>
                    <div className="col-md-6">
                        <span className="float-right">{data.netamount_XOF}XOF</span>
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
                        </a>
                    </li>
                    <li>
                        <button type="submit" className="btn btn-default mr-0">
                            <span className="bh"></span>
                            <span>Send Money</span>
                            <FaChevronRight />
                        </button>

                    </li>
                </ul>
            </form>
        </div>


    )
}

export default ReceiveUserMoney
