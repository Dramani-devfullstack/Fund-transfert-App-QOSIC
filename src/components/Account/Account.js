import React, {Fragment} from 'react'
import './Account.scss'
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import {withRouter} from 'react-router-dom'

function Account() {
    return (
        <Fragment>      
    <div className="header03">
        <div className="header-main">
          <div className="container d-flex align-items-center">
              <a className="logo d-inline-flex" href="http://masizatech.com">
                  <img src="http://masizatech.com/assets/logo.png" alt=""/>
              </a>
              <nav className="primary-menu ml-auto">
                  <a id="mobile-menu-toggler" href="#"><FaBars/></a>
                  <ul>
                      <li className="current-menu-item"><a href="http://masizatech.com">Home</a>
                      <li><a href="http://masizatech.com/locale/fr">FR<span className="flag-icon flag-icon-fr text-dark"></span></a> </li>
                      <li><a href="http://masizatech.com/locale/en">EN<span className="flag-icon flag-icon-us text-dark"></span></a> </li>
                      
                        <li className="has-menu-child pro-menu-drop">
                          <a href="http://masizatech.com/account">
                              <div className="header-pro-thumb">
                                    <img className="rounded-circle" src="http://masizatech.com/assets/avatar.png" alt=""/>
                                     </div>Hello, Faizou <FaChevronDown/>
                          </a>
                          <ul className="dropdown-menu-md sub-menu profile-drop">
                              <li className="dropdown-header">
                                  <div>
                                      <h5 className="hidden-xs m-b-0 text-primary text-ellipsis"></h5>
                                      <div className="small text-muted"><span></span></div>
                                  </div>
                              </li>
                              <li>
                                  <hr className="mx-n3 mt-0"/>
                              </li>
                              <li className="nav__create-new-profile-link">
                                  <a href="http://masizatech.com/account/profile">
                                      <span>View personal profile</span>
                                  </a>
                              </li>
                              <li className="nav__create-new-profile-link">
                                <a href="http://masizatech.com/account/successful/transactions">
                                    <span>View transactions</span>
                                </a>
                            </li>
                              <li className="divider"></li>
                              
                              <li className="nav__dropdown-menu-items">
                                  <a href="http://masizatech.com/logout" onclick="event.preventDefault();
                                  document.getElementById('userlogout-form').submit();"><i className="icon icon-logout"></i>
                                  <span>
                                      <span className="fas fa-sign-out-alt" style={{color:"red"}}></span> Logout
                                 </span></a>
                             </li>
                             <form id="userlogout-form" action="http://masizatech.com/logout" method="POST" style={{display: "none"}}>
                                <input type="hidden" name="_token" value="XjildUhQRlq6MUZXhgbOsbqQdAFOMIqXWWZmTLHV"/>                             
                             </form>
                          </ul>
                      </li>
                      
                      <li><a className="current-menu-item" onclick="event.preventDefault(); document.getElementById('userlogout-form').submit();">
                        <i className="fas fa-sign-out-alt" style={{color:"red"}}></i>
                        </a></li>
                        </li>
                    </ul>
              </nav>
          </div>
        </div>
      </div>
      
         <div className="profilebar">
          <div className="container">
              <div className="row">
                  
                  <div className="col">
                      <div className="local-time">
                          <p><b>Local Time:</b> 2021-04-08 11:45:14</p>
                      </div>
                  </div>
                  <div className="col">
                      <div className="local-time">
                          <p><b>Last Visit:</b> 2021-04-08 11:45:14</p>
                      </div>
                  </div>
                  <div className="col">
                    <div className="local-time">
                        <p><b>Last Visit IP:</b> 41.138.90.87</p>
                    </div>
                </div>
                  <div className="col notify-col text-right">
                      <div className="notify-btn"><a href=""><i className="fas fa-shield-alt"></i></a></div>
                  </div>
              </div>
          </div>
      </div>

        <div id="content" className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 sidebar">
                        <div className="widget admin-widget p-0">
    <div className="Profile-menu">
        <ul className="nav secondary-nav">
            <li className="nav-item  active "><a className="nav-link" href="http://masizatech.com/account"><i className="fas fa-tachometer-alt"></i>Dashboard</a></li>
            <li className="nav-item "><a className="nav-link" href="http://masizatech.com/account/profile"><i className="fab fa-autoprefixer"></i>Account</a></li>
            <li className="nav-item "><a className="nav-link" href="http://masizatech.com/account/payment/details"><i className="far fa-paper-plane"></i>Send Money</a></li>
            <li className="nav-item "><a className="nav-link" href="http://masizatech.com/account/successful/transactions"><i className="fas fa-list-ul"></i>Transactions</a></li>
            
        </ul>
    </div>
</div>
        
        </div>
                    
                    <div className="col-lg-9">
                        <div className="profile-content">
                            
        
                            <div className="bg-light shadow-sm rounded p-4 mb-4">
                                <h3 className="text-5 font-weight-400 text-warning mb-4">Recent Payment Statistics<span className="text-muted text-4"></span></h3>
                                <div className="row">
                                       <div className="col col-sm col-lg">
                                    
                                    <table className="table table-striped">
                                      <thead>
                                        <tr>
                                          <th>Service</th>
                                          <th>Value</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Today Transaction Count</td>
                                          <td>0</td>
                                        </tr>
                                        <tr>
                                          <td>Today Transaction Amount</td>
                                          <td>0FCFA | 0NGN</td>
                                        </tr>
                                      
                                      </tbody>
                                    </table>
                    
                                  </div>
                                  
                    
                                  
                    
                                </div>
                              </div>

                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
       
<footer className="footer">
    
    <div className="foo-btm">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="foo-navigation">
              <ul>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy & Policy</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Notice</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="copyright">Copyright &copy; <a href="https://qosic.com">QOS</a> 2021</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
          
    </Fragment>
    )
}

export default withRouter(Account)
