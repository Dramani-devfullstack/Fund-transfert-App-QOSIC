import React, { Fragment } from 'react';
import './MoneyTransfert.css';
import { FaPlay } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import '../../App.css'

const MoneyTransfert=()=> (
    <Fragment>
<div className="banner v7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ban-content">
                <h1>Send Money Anytime, Anywhere for Free</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Quis ipsum suspe ultrices gravida. Risus commodo viverra maecenas .</p>
                <a href="https://vimeo.com/191947042" className="btn btn-outline btn-round icon-left" data-fancybox>
                  <span className="bh"></span> <span><FaPlay/> Learn more</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-tab">
                <ul className="nav nav-tabs">
                  <li><a className="active" data-toggle="tab" href="#send-money">NGN to XOF</a></li>
                  <li><a data-toggle="tab" href="#receive-money">XOF to NGN</a></li>
                </ul>
                <div className="tab-content currency-form">
                  <div id="send-money" className="tab-pane fade in active show">
                    <form  method="post" action="http://masizatech.com/account/confirm/NGN_TO_XOF">
                      <div className="form-field">
                      <input type="hidden" name="_token" value="KhvMf7KybMh0CLHYuwJmQMngX5BJgaDYEbfFjYtD"/>                    
                        <label>send amount <span>&#8358;</span></label>
                        <div className="join-field">
                          <input type="number" value="" required min="100" max="500000" name="amount" placeholder="1000"/>
                          <input type="hidden" required name="send_provider_id" value="3"/>
                          <div className="curr-select">
                            <span className="selected"><img src="http://masizatech.com/assets/fend/images/flags/nigeria.png" alt=""/>NGN &nbsp;
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="form-field">
                        <label>Receiver Number (MOOV/MTN BJ) </label>
                        <div className="join-field">
                          <input type="text" required value="" name="receiver_number" placeholder="22990505050"/>
                        </div>
                      </div>
                      
                      <div className="form-field">
                        <label>Purpose</label>
                        <div className="join-field">
                          <input type="text" required value="" name="purpose" placeholder=""/>
                        </div>
                      </div>
                      
                      <div className="form-field">
                        <label>Receiver Email(Optional)</label>
                        <div className="join-field">
                          <input type="email" value="" name="receiver_email" placeholder=""/>
                        </div>
                      </div>
  
                        <a className="btn btn-secondary btn-block" href="http://masizatech.com/login">Login</a> 
                        <a className="btn btn-primary btn-block" href="http://masizatech.com/register">Register</a>
                        <span className="accept-terms">By clicking continue, i am agree with <a href="#">Terms &amp; Policy</a></span>
                    </form>
                  </div>

                  <div id="receive-money" className="tab-pane fade">
                    <form  method="post" action="http://masizatech.com/account/confirm/XOF_TO_NGN">
                      <input type="hidden" name="_token" value="KhvMf7KybMh0CLHYuwJmQMngX5BJgaDYEbfFjYtD"/>              <div className="form-field">
                        <label>send amount XOF</label>
                        <div className="join-field">
                          <input type="text" id="amount" required value="" min="100" max="500000" name="amount" placeholder="1000"/>
                          <div className="curr-select">
                            <span className="selected"><img src="http://masizatech.com/assets/fend/images/flags/benin.png" alt=""/>XOF </span>
                          </div>
                        </div>
                      </div>
  
                      <div className="form-field">
                        <label for="rcv_country">Receiver Bank</label>
                        <select id="rcv_country" required name="bank_code">
                          <option value="">Select Bank</option>
                                                      <option value="044">Access Bank</option>
                                                      <option value="023">Citi Bank</option>
                                                      <option value="050">EcoBank PLC</option>
                                                      <option value="011">First Bank PLC</option>
                                                      <option value="214">First City Monument Bank</option>
                                                      <option value="070">Fidelity Bank</option>
                                                      <option value="058">Guaranty Trust Bank</option>
                                                      <option value="076">Polaris bank</option>
                                                      <option value="221">Stanbic IBTC Bank</option>
                                                      <option value="068">Standard Chaterted bank PLC</option>
                                                      <option value="232">Sterling Bank PLC</option>
                                                      <option value="033">United Bank for Africa</option>
                                                      <option value="032">Union Bank PLC</option>
                                                      <option value="035">Wema Bank PLC</option>
                                                      <option value="057">Zenith bank PLC</option>
                                                      <option value="215">Unity Bank PLC</option>
                                                      <option value="101">ProvidusBank PLC</option>
                                                      <option value="082">Keystone Bank</option>
                                                      <option value="301">Jaiz Bank</option>
                                                      <option value="030">Heritage Bank</option>
                                                      <option value="100">Suntrust Bank</option>
                                                      <option value="608">FINATRUST MICROFINANCE BANK</option>
                                                      <option value="090175">Rubies Microfinance Bank</option>
                                                      <option value="090267">Kuda</option>
                                                      <option value="090115">TCF MFB</option>
                                                      <option value="400001">FSDH Merchant Bank</option>
                                                      <option value="502">Rand merchant Bank</option>
                                                      <option value="103">Globus Bank</option>
                                                      <option value="327">Paga</option>
                                                      <option value="000026">Taj Bank Limited</option>
                                                      <option value="100022">GoMoney</option>
                                                      <option value="090180">AMJU Unique Microfinance Bank</option>
                                                      <option value="090393">BRIDGEWAY MICROFINANCE BANK</option>
                                                      <option value="090328">Eyowo MFB</option>
                                                      <option value="090281">Mint-Finex MICROFINANCE BANK</option>
                                                      <option value="070006">Covenant Microfinance Bank</option>
                                                      <option value="090110">VFD Micro Finance Bank</option>
                                                      <option value="090317">PatrickGold Microfinance Bank</option>
                                                      <option value="090325">Sparkle</option>
                                                      <option value="305">Paycom</option>
                                                </select>
                      </div>
  
                      <div className="form-field">
                        <label>Account Number</label>
                        <div className="join-field">
                          <input type="text" required value="" name="account_number"  placeholder=""/>
                        </div>
                      </div>
  
                      <div className="form-field">
                        <label>Purpose</label>
                        <div className="join-field">
                          <input type="text" required  value="" name="purpose" placeholder=""/>
                        </div>
                      </div>
  
                      <div className="form-field">
                        <label>Receiver Email(Optional)</label>
                        <div className="join-field">
                          <input type="email"  value="" name="email" placeholder=""/>
                        </div>
                      </div>
  
                      <a className="btn btn-secondary btn-block" href="http://masizatech.com/login">Login</a> 
                      <a className="btn btn-primary btn-block" href="http://masizatech.com/register">Register</a>
                      <span className="accept-terms">By clicking continue, i am agree with <a href="#">Terms &amp; Policy</a></span>
                    </form>
                    
                  </div>
                </div>
              </div>            
            </div>          
          </div>
        </div>
      </div> 

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


    {/* <div className="payment-service bg-offwhite">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="content-box">
              <h2>Why Send Money with Our Payment Service</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas</p>
              <ul className="list">
                <li><FaCheckCircle/> Lorem ipsum dolor sit amet, consectetur adipiscing. </li>
                <li><FaCheckCircle/> Rabore ettoram dolore magna aliquis ipsum.</li>
                <li><FaCheckCircle/> Pouis ipsum suspendisse ultrices gravida.</li>
                <li><FaCheckCircle/> Rabore ettoram dolore magna aliquis ipsum.</li>
              </ul>
              <a href="#" className="btn btn-default"><span className="bh"></span> <span>try it now</span></a>
            </div>
          </div>
          <div className="col-md-6">
            <figure className="imgBox">
              <img src="http://masizatech.com/assets/fend/images/payment-service.png" alt=""/>
            </figure>
          </div>
        </div>
      </div>
    </div> */}


    {/* <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="sec-heading">
              <h2 className="sec-title">Secure Payment With Low Transfer Fees</h2>
              <p className="sec-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="iconBox boxed text-center">
              <img src="http://masizatech.com/assets/images/icons/1.png" alt="" className="img-icon">

              <!-- Roysha icon
              <span className="roysha-icon roysha-secured"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span></span>

              <h5><a href="#">Secure Payment Service</a></h5>
              <p>Lorem ipsum qitame coctetr of asipm scing elise eiusm temor incidid ue. Ruispm suspen disse intert ultrices gravida.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="iconBox boxed text-center">
               <img src="http://masizatech.com/assets/images/icons/2.png" alt="" className="img-icon"> 

               Roysha icon 
              <span className="roysha-icon roysha-amount"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span></span>
              
              <h5><a href="#">Low Cost and Fast transfer</a></h5>
              <p>Lorem ipsum qitame coctetr of asipm scing elise eiusm temor incidid ue. Ruispm suspen disse intert ultrices gravida. </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="iconBox boxed text-center">
                <img src="http://masizatech.com/assets/images/icons/3.png" alt="" className="img-icon"/> 

               Roysha icon 
              <span className="roysha-icon roysha-wallet"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span></span>
              
              <h5><a href="#">Real Time Money Tracking</a></h5>
              <p>Lorem ipsum qitame coctetr of asipm scing elise eiusm temor incidid ue. Ruispm suspen disse intert ultrices gravida. </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
{/* 
    <div className="ps-works">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="content-box-fluid right">
              <h2>How Does Our Payment System Works?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas</p>
              <p>ccumsanamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
              <a href="#" className="btn btn-default"><span className="bh"></span> <span>Learn More</span></a>
            </div>
          </div>
          <div className="col-md-6">
            <figure className="video-box"> 
              <img src="http://masizatech.com/assets/fend/images/video-bg/1.jpg " alt=""/>
              <a href="https://vimeo.com/191947042" className="video-btn" data-fancybox><FaPlay/></a>
            </figure>
          </div>
        </div>
      </div>
    </div> */}

    {/* <div className="testimonial-v2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="sec-heading">
              <h2 className="sec-title">What Our Users Say About Us</h2>
              <p className="sec-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-md-12 m-auto">
            <div className="testimonialBox">
              <span className="quote-sign"><i className="fas fa-quote-left"></i></span>
              <div className="test-caro-2 owl-carousel" data-slider-id="1">
                <div className="single-testimonial">                  
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eco dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
                <div className="single-testimonial">
                  <p>Ypsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eco dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
                <div className="single-testimonial">
                  <p>Qonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eco dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
              </div>
              <div className="client-thumb owl-thumbs" data-slider-id="1">
                <a href="javascript:void(0)" className="owl-thumb-item"><img src="http://masizatech.com/assets/fend/images/avatar.png" alt=""/></a>
                <a href="javascript:void(0)" className="owl-thumb-item"><img src="http://masizatech.com/assets/fend/images/avatar.png" alt=""/></a>
                <a href="javascript:void(0)" className="owl-thumb-item"><img src="http://masizatech.com/assets/fend/images/avatar.png" alt=""/></a>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div> */}

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
                <li className="col-md-3">
                  <a className="active" data-toggle="tab" href="#general-qs">
                     <img src="http://masizatech.com/assets/images/icons/9.png" alt=""/> 

                    {/* <!-- Roysha icon --> */}
                    <span className="roysha-icon roysha-ask"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></span>

                    General Questions
                  </a>
                </li>
                <li className="col-md-3">
                  <a data-toggle="tab" href="#trasn-money">
                     <img src="http://masizatech.com/assets/images/icons/10.png" alt=""/>

                    {/* <!-- Roysha icon --> */}
                    <span className="roysha-icon roysha-hand-cash"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span></span>

                    Money Transfer
                  </a>
                </li>
                <li className="col-md-3">
                  <a data-toggle="tab" href="#mbl-banking">
                    <img src="http://masizatech.com/assets/images/icons/11.png" alt=""/>

                    {/* <!-- Roysha icon --> */}
                    <span className="roysha-icon roysha-fast-transfer"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span><span className="path17"></span><span className="path18"></span></span>

                    Mobile Banking
                  </a>
                </li>
                <li className="col-md-3">
                  <a data-toggle="tab" href="#fee-charges">
                     <img src="http://masizatech.com/assets/images/icons/12.png" alt=""/> 

                    {/* <!-- Roysha icon --> */}
                    <span className="roysha-icon roysha-bank-diposite"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span></span>

                    Fees and Charges
                  </a>
                </li>
              </ul>
                
              <div className="tab-content">
                <div id="general-qs" className="tab-pane fade in active show">
                  <div className="accordion" id="accordion">
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#faq-1" aria-expanded="true">
                        Lorem ipsum dolor sit amet
                      </h5>
                      <div id="faq-1" className="collapse" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscied do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspen disse ultrices gravida.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#faq-2" aria-expanded="false">
                        Input Wallet Informations
                      </h5>

                      <div id="faq-2" className="collapse show" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Molestie eu blandit eu sodales, nulla vitae nulla tempor et porta, ante nec commodo. Nulla non fringilla urna dolor vivamus, vulputate eu neque vivamus lacus in, imperdiet id sed malesuada per.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#faq-3" aria-expanded="false">
                        Confirm information and payover 
                      </h5>

                      <div id="faq-3" className="collapse" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Blandit eu sodales, nulla vitae nulla tempor et porta, ante nec commodo. Nulla non fringilla urna dolor vivamus, vulputate eu neque vivamus lacus in, imperdiet id sed malesuada per.</p>
                        </div>                    
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#faq-4" aria-expanded="false">
                        Access Your Mobile Wallet
                      </h5>

                      <div id="faq-4" className="collapse" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Molestie eu blandit eu sodales, nulla vitae nulla tempor et porta, ante nec commodo. Nulla non fringilla urna dolor vivamus, vulputate eu neque vivamus lacus in, imperdiet id sed malesuada per.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#faq-5" aria-expanded="false">
                        Input Wallet Informations
                      </h5>

                      <div id="faq-5" className="collapse" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Blandit eu sodales, nulla vitae nulla tempor et porta, ante nec commodo. Nulla non fringilla urna dolor vivamus, vulputate eu neque vivamus lacus in, imperdiet id sed malesuada per.</p>
                        </div>                    
                      </div>
                    </div>
                  </div>
                </div>
                <div id="trasn-money" className="tab-pane fade">
                  <div className="accordion" id="accordion1">
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#tm-1" aria-expanded="true">
                        Access Your Mobile Wallet
                      </h5>
                      <div id="tm-1" className="collapse" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscied do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspen disse ultrices gravida.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#tm-2" aria-expanded="false">
                        Input Wallet Informations
                      </h5>

                      <div id="tm-2" className="collapse show" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Molestie eu blandit eu sodales, nulla vitae nulla tempor et porta, ante nec commodo. Nulla non fringilla urna dolor vivamus, vulputate eu neque vivamus lacus in, imperdiet id sed malesuada per.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#tm-3" aria-expanded="false">
                        Confirm information and payover 
                      </h5>

                      <div id="tm-3" className="collapse" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Blandit eu sodales, nulla vitae nulla tempor et porta, ante nec commodo. Nulla non fringilla urna dolor vivamus, vulputate eu neque vivamus lacus in, imperdiet id sed malesuada per.</p>
                        </div>                    
                      </div>
                    </div>
                  </div>
                </div>
                <div id="mbl-banking" className="tab-pane fade">
                  <div className="accordion" id="accordion2">
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#mblb-1" aria-expanded="true">
                          Input Wallet Informations
                      </h5>
                      <div id="mblb-1" className="collapse" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscied do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspen disse ultrices gravida.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#mblb-2" aria-expanded="false">
                        Access Your Mobile Wallet
                      </h5>

                      <div id="mblb-2" className="collapse show" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Molestie eu blandit eu sodales, nulla vitae nulla tempor et porta, ante nec commodo. Nulla non fringilla urna dolor vivamus, vulputate eu neque vivamus lacus in, imperdiet id sed malesuada per.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#mblb-3" aria-expanded="false">
                        Confirm information payover 
                      </h5>

                      <div id="mblb-3" className="collapse" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Blandit eu sodales, nulla vitae nulla tempor et porta, ante nec commodo. Nulla non fringilla urna dolor vivamus, vulputate eu neque vivamus lacus in, imperdiet id sed malesuada per.</p>
                        </div>                    
                      </div>
                    </div>
                  </div>
                </div>
                <div id="fee-charges" className="tab-pane fade">
                  <div className="accordion" id="accordion3">
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#fc-1" aria-expanded="true">
                        Your Mobile Wallet
                      </h5>
                      <div id="fc-1" className="collapse" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscied do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspen disse ultrices gravida.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#fc-2" aria-expanded="false">
                        Input Wallet Informations
                      </h5>

                      <div id="fc-2" className="collapse show" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Molestie eu blandit eu sodales, nulla vitae nulla tempor et porta, ante nec commodo. Nulla non fringilla urna dolor vivamus, vulputate eu neque vivamus lacus in, imperdiet id sed malesuada per.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="collapsed" data-toggle="collapse" data-target="#fc-3" aria-expanded="false">
                        Confirm information and payover 
                      </h5>

                      <div id="fc-3" className="collapse" data-parent="#accordion">
                        <div className="acr-body">
                          <p>Blandit eu sodales, nulla vitae nulla tempor et porta, ante nec commodo. Nulla non fringilla urna dolor vivamus, vulputate eu neque vivamus lacus in, imperdiet id sed malesuada per.</p>
                        </div>                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    </Fragment> 
            )

export default MoneyTransfert