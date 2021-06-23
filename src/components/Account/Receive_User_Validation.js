import React from 'react'
import { FaSpinner } from "react-icons/fa";

function Receive_User_Validation() {
    return (
        <div class="col-lg-9">
            <div class="bg-light shadow-sm rounded p-4 mb-4">
                <h3 class="text-5 font-weight-400 mb-4"><span class="text-muted text-4"></span>
                </h3>
                <div class="row">
                    <div class="col-12 col-sm-12">
                        <div class="" id="MerchantWithdraw" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Validation</h5>
                                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="container">
                                            <h2 class="text-center">Processing Payment</h2>
                                            <form action="" method="POST">
                                                <div class="alert alert-success">

                                                    <div id="success" class="text-center">
                                                        <h2>Thank You, Payment Successful</h2>
                                                    </div>
                                                    <div id="expired" class="text-center">
                                                        <h2>Invalid or Expired.</h2>
                                                    </div>
                                                    <div id="failed" class="text-center">
                                                        <h2>Payment Failed, Please Try Again</h2>
                                                    </div>
                                                    <div id="error" class="text-center">
                                                        <h2>Unknown Error</h2>
                                                    </div>
                                                    <div id="exits" class="text-center">
                                                        <h2>Already Exists</h2>
                                                    </div>

                                                    <div class='text-center' id="spinner">
                                                        <p>Ref: HC5IR9QYGGHZETUJ3MK4 </p>
                                                        <p>Expires in <span id='time'>05:00</span></p>
                                                        <p>Check your phone, awaiting Confirmation</p>
                                                        <FaSpinner style='font-size:60px;'/>
                                                        <p>Please don&#039;t close this Page</p>
                                                    </div>
                                                </div>
                                                <hr />
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Receive_User_Validation
