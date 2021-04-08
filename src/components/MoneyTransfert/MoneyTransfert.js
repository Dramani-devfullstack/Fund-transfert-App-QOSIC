import React, { Fragment, useState,state } from 'react';
import './MoneyTransfert.css';
import { FaPlay } from "react-icons/fa";
import Faq from '../Faq/Faq'
import '../../App.css'
import EasySteps from '../EasySteps';
import SendMoney from './SendMoney';
import ReceiveMoney from './ReceiveMoney';

function MoneyTransfert(){
  const [active, setActive] = useState('sendmoney')
  const [isActive, setIsActive]= useState('notShow') 
  const [isOpen, setIsOpen]= useState(false) 
    
  return(
        <Fragment>
        <div className="banner v7">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                      <div className="ban-content">
                        <h1>Send Money Anytime, Anywhere for Free</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Quis ipsum suspe ultrices gravida. Risus commodo viverra maecenas .</p>
                        <a href="https://vimeo.com/191947042" className="btn btn-outline btn-round icon-left" data-fancybox>
                          <span className="bh"></span> <span><FaPlay id="faPlay"/> Learn more</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="form-tab">
                        <ul className="nav nav-tabs">
                          <li><a  onClick={()=>setActive('sendmoney') } className={ active ==='sendmoney' ? "active" : "nav nav-tabs a"}  data-toggle="tab" href="#send-money">NGN to XOF</a></li>
                          <li ><a  onClick={()=>setActive('receivemoney')}   className={ active ==='receivemoney' ? "active" : "nav nav-tabs a"}    data-toggle="tab" href="#receive-money">XOF to NGN</a></li>
                        </ul>
                        <div className="tab-content currency-form">
                         { active === "sendmoney" && <SendMoney/>}
                         { active === "receivemoney" &&  <ReceiveMoney/>}
                        </div>
                      </div>            
                    </div>          
                  </div>
                </div>
              </div> 
            <EasySteps/>       
            <Faq/>       
            </Fragment> 
    )}             

export default MoneyTransfert