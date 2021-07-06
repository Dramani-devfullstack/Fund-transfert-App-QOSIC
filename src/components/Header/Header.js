import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import Qoslogo from '../img/QOS_logo.png'
import { FaBars } from "react-icons/fa";
import HeaderMenu from './HeaderMenu';
import FaBarsMenu from './FaBarsMenu';

function Header(){ 
  const [active, setActive] = useState(false)
  
  return(

    <div className="header03">
        <div className="header-main">
          <div className="container d-flex align-items-center">
             <Link to='/'>
                 <a className="logo d-inline-flex" href="#">
                  <img src={Qoslogo} alt=""/>
                  </a>
             </Link>
             
              <nav className="primary-menu ml-auto">
              <a onClick={()=>setActive(!active)} id="mobile-menu-toggler" href="#"><FaBars/></a>
                   <HeaderMenu/>
              </nav>
              { active ? <FaBarsMenu  /> : null }   
          </div>
      </div>
      
    </div>  ) }
  


export default Header;