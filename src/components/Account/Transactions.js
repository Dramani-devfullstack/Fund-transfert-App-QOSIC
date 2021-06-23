import React, { useEffect, useState } from 'react'
import { authentificationService } from '../Services/authentificationService'
import { FaCheckCircle, FaSearch } from "react-icons/fa";
import './Account.css'


function Transactions() {
    const [userInfo, setUserInfo] = useState('')
    const [query, setQuery] = useState('')
    let info = userInfo.records
    console.log(info)

    // useEffect(() => {
    //     authentificationService.getListTransact(query)
    //         .then(user => setUserInfo(user))
    // }, [setUserInfo])

    const handleTransactionList = () => {
        authentificationService.getListTransact(query)
            .then(user => setUserInfo(user))
    }


    return (

        <div >
            <h2 className="admin-heading bg-offwhite">Successful Transactions</h2>
            <div className="row">
                <div className="col-12">
                    <form  id="custom-filter-area">
                        <div className="form-row">
                            <div className="col-md-12">
                                <div className="form-group filter-area">
                                    <i className="fas fa-calendar-alt"></i>
                                    <input id="" type="text" className="form-control py-4" name="query" onChange={(e) => { setQuery(e.target.value) }} />
                                    <div className="export-area" data-toggle="collapse">
                                        <div className="dropdown filter-btn">
                                            <a onClick={handleTransactionList} className=" btn-link ml-2" href="#"><FaSearch /></a>
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

                <div class="transaction-area">
                    {info && info.map((item) => {
                        let date = new Date(item.created_at)
                        let dates = date.toDateString().split(' ')
                        console.log(date)
                        console.log(dates[1])

                        return (
                            <div key={item.id} class="items">
                                <a >
                                    <div class="row">
                                        <div class="col pay-date">
                                            <span class="date">{dates[2]}</span>
                                            <span class="pay-month"> {dates[1]} </span></div>
                                        <div class="col">
                                            <span class="name">{item.number}</span>
                                        </div>
                                        <div class="col text-center">
                                            <span class="payments-status text-success" >
                                                {item.status === 1 ? <FaCheckCircle /> : null}
                                                <i data-toggle="tooltip" data-original-title="Completed" class="fas fa-check-circle"></i>
                                            </span>

                                        </div>
                                        <div class="col">
                                            <span class="payment-amaount"></span>
                                        </div>
                                        <div class="col">
                                            <span class="payment-amaount">{item.amount}</span>
                                            <span class="currency"> {item.SENDER_provider_currency_symbol} </span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        )
                    })
                    }






                </div>
            </div>

        </div>

    )
}

export default Transactions
