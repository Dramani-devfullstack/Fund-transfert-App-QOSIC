import React, { Fragment, useState } from 'react'
import '../MoneyTransfert/MoneyTransfert.css'
import GeneralQs from './FaqContent/GeneralQs'
import TransMoney from './FaqContent/TransMoney'
import MobileBanking from './FaqContent/MobileBanking'
import FeeCharges from './FaqContent/FeeCharges'

function Faq() {
  const [active, setActive] = useState('generalqs')
    return (
        <Fragment>
              <div className="faq-tab bg-offwhite">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-10 m-auto text-center">
                    <div className="sec-heading">
                      <h2 className="sec-title">Frequently Asked Questions</h2>
                      <p className="sec-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                </div>
        
                <div className="row">
                  <div className="col-lg-10 col-md-12 m-auto">
                      <ul className="row nav nav-tabs">
                        <li className="col-md-3" onClick={()=>setActive('generalqs')} >
                          <a className="active" data-toggle="tab" href="#general-qs">
                             <img src="http://masizatech.com/assets/images/icons/9.png" alt=""/> 
        
                            {/* <!-- Roysha icon --> */}
                            <span className="roysha-icon roysha-ask"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></span>
        
                            General Questions
                          </a>
                        </li>
                        <li className="col-md-3" onClick={()=>setActive('transmoney')}>
                          <a data-toggle="tab" href="#trasn-money">
                             <img src="http://masizatech.com/assets/images/icons/10.png" alt=""/>
        
                            {/* <!-- Roysha icon --> */}
                            <span className="roysha-icon roysha-hand-cash"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span></span>
        
                            Money Transfer
                          </a>
                        </li>
                        <li className="col-md-3" onClick={()=>setActive('mobilebanking')}>
                          <a data-toggle="tab" href="#mbl-banking">
                            <img src="http://masizatech.com/assets/images/icons/11.png" alt=""/>
        
                            {/* <!-- Roysha icon --> */}
                            <span className="roysha-icon roysha-fast-transfer"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span><span className="path17"></span><span className="path18"></span></span>
        
                            Mobile Banking
                          </a>
                        </li>
                        <li className="col-md-3" onClick={()=>setActive('feecharges')}>
                          <a data-toggle="tab" href="#fee-charges">
                             <img src="http://masizatech.com/assets/images/icons/12.png" alt=""/>         
                            {/* <!-- Roysha icon --> */}
                            <span className="roysha-icon roysha-bank-diposite"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span></span>
                            Fees and Charges
                          </a>
                        </li>
                      </ul>
                        
                       <div className="tab-content"> 
                        {active==="generalqs" && <GeneralQs/>} 
                        {active=== "transmoney" && <TransMoney/>} 
                        {active=== "mobilebanking" && <MobileBanking/>} 
                        {active=== "feecharges" && <FeeCharges/>}                    
                      </div>
                  </div>
                </div>
              </div>
            </div> 


            
        </Fragment>
    )
}

export default Faq
