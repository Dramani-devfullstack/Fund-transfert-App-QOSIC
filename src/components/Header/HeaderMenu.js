import React, { Fragment, } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function HeaderMenu() {
    return (
        <Fragment>
             <ul>
                       <Link to='/'>
                            <li className="current-menu-item"><a href="http://masizatech.com">Home</a></li>
                        </Link>
                        
                        <Link to='/login'>
                            <a href="http://masizatech.com/login" className="login btn-default"><span className="bh"></span> <span>login</span></a>
                        </Link>
                        
                        <Link to='/register'>
                            <a href="http://masizatech.com/register" className="login btn-warning"><span className="bh"></span> <span>Register</span></a>
                        </Link>
                        <select>
                            <option href="http://masizatech.com/locale/fr">FR</option>
                            <option  href="http://masizatech.com/locale/en">EN</option>
                        </select>
                      {/* <li><a href="http://masizatech.com/locale/fr">FR<span className="flag-icon flag-icon-fr text-dark"></span></a> </li>
                      <li><a href="http://masizatech.com/locale/en">EN<span className="flag-icon flag-icon-us text-dark"></span></a> </li> */}
                      
                    </ul>
        </Fragment>
    )
}

export default HeaderMenu
