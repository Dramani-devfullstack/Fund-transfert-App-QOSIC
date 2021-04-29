import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
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
                 <a className="logo d-inline-flex" href="http://masizatech.com">
                  <img src="http://masizatech.com/assets/logo.png" alt=""/>
                  </a>
             </Link>
             
              <nav className="primary-menu ml-auto">
              <a onClick={()=>setActive(!active)} id="mobile-menu-toggler" href="#"><FaBars/></a>
                   <HeaderMenu/>
              </nav>
              { active ? <FaBarsMenu  /> : null }
              
              
          </div>
      </div>
      
    </div>

  )
    
}
  


export default Header;