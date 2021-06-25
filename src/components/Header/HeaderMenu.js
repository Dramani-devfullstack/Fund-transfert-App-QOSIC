import React, { Fragment, } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function HeaderMenu() {
    return (
        <Fragment>
            <ul>
                <nav className="primary-menu ml-auto">
                        <Link to='/'>
                            <li className="current-menu-item"><a href="http://masizatech.com">Home</a></li>
                        </Link>
                        
                        <Link to='/login'>
                            <a  className="login btn-default"><span className="bh"></span> <span>login</span></a>
                        </Link>
                        
                        <Link to='/register'>
                            <a  className="login btn-warning"><span className="bh"></span> <span>Register</span></a>
                        </Link>
                        <select>
                            {/* <option >FR</option> */}
                            <option >EN</option>
                        </select>                  
                </nav>
            </ul>
        </Fragment>
    )
}

export default HeaderMenu
