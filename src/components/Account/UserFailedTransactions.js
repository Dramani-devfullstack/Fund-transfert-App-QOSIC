import React from 'react'
import { FcOk } from "react-icons/fc";
import './Validation_url.css'

function UserFailedTransactions() {
    return (
        <div className="tab-pane fade " id="pills-profile2" role="tabpanel"
            aria-labelledby="pills-profile-tab">
            <div class="popup_box">
                <FcOk size='30px' />
                <h1> Transaction Failed </h1>
                <label>Resend</label>
            </div>

        </div>

    )
}

export default UserFailedTransactions
