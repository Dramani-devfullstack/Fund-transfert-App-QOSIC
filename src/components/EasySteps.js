import React, { Fragment } from 'react'
import './MoneyTransfert/MoneyTransfert.css'

function EasySteps() {
    return (
        <Fragment>
        <div className="easy-steps">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-10 m-auto">
                    <div className="sec-heading">
                      <h2 className="sec-title">Easy and Fast Way to Send Money</h2>
                      <p className="sec-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 col-md-12 m-auto">
                    <ul className="steps">
                      <li><span>1</span> Select Country</li>
                      <li><span>2</span> Choose Service</li>
                      <li><span>3</span> Input Information</li>
                      <li><span>4</span> Confirm and Send</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
        </Fragment>
    )
}

export default EasySteps
