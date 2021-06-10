import React, { useEffect, useState } from 'react'
import { authentificationService } from '../Services/authentificationService'
import { FaSearch } from "react-icons/fa";
import './Account.css'

function Transactions() {
    const [userInfo, setUserInfo] = useState('')
    console.log(userInfo)
    useEffect(() => {
        authentificationService.getListTransact()
            .then(user => setUserInfo(user))

    }, [])

    return (

        <div >
            <h2 className="admin-heading bg-offwhite">Successful Transactions</h2>
            <div className="row">
                <div className="col-12">
                    <form id="custom-filter-area" method="GET">
                        <div className="form-row">
                            <div className="col-md-12">
                                <div className="form-group filter-area">
                                    <i className="fas fa-calendar-alt"></i>
                                    <input id="" type="text" className="form-control py-4" name="query" />
                                    <div className="export-area" data-toggle="collapse">
                                        <div className="dropdown filter-btn">
                                            <a className=" btn-link ml-2" href="#"><FaSearch /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="col-md-9">
                                    <h6 className="result"><b>Query:</b> </h6>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="result"><b>Total :</b>{userInfo.count}  Showing  0</h6>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <div className="profile-content">
                <div className="transaction-title bg-offwhite">
                    <div className="items">
                        <div className="row">
                            <div className="col"><span className="">Date</span></div>
                            <div className="col">Ref</div>
                            <div className="col text-center">Status</div>
                            <div className="col text-center"></div>
                            <div className="col">Amount</div>
                        </div>
                    </div>
                </div>

                <div className="transaction-area">

                </div>




            </div>

        </div>

    )
}

export default Transactions
