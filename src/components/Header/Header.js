import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";

const Header=()=> (  
    <div className="header03">
      <div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-8">
                <div className="d-inline-flex ml-auto">
                  <a href="#" className="top-text"><FaPhoneAlt/> marketplace@qosic.com</a>   
                </div>
              </div>
              <div className="col-sm-4 text-sm-right">
                <div className="social-icons">
                  
                </div>
                <Link to='/login'>
                    <a href="http://masizatech.com/login" className="login btn-default"><span className="bh"></span> <span>login</span></a>
                </Link>
                
                <Link to='/register'>
                     <a href="http://masizatech.com/register" className="login btn-warning"><span className="bh"></span> <span>Register</span></a>
                </Link>
                </div>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container d-flex align-items-center">
             <Link to='/'>
                 <a className="logo d-inline-flex" href="http://masizatech.com">
                  <img src="http://masizatech.com/assets/logo.png" alt=""/>
                  </a>
             </Link>
             
              <nav className="primary-menu ml-auto">
                  <a id="mobile-menu-toggler" href="#"><i className="fas fa-bars"></i></a>
                  <ul>
                        <Link to='/'>
                            <li className="current-menu-item"><a href="http://masizatech.com">Home</a></li>
                        </Link>
                      <li><a href="http://masizatech.com/locale/fr">FR<span className="flag-icon flag-icon-fr text-dark"></span></a> </li>
                      <li><a href="http://masizatech.com/locale/en">EN<span className="flag-icon flag-icon-us text-dark"></span></a> </li>
                      
                    </ul>
              </nav>
          </div>
      </div>
      
    </div>
)
  


export default Header;