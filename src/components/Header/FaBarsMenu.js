import React, {Fragment, useRef} from 'react'
import './FaBarsMenu.css'
import {Link} from 'react-router-dom'

function FaBarsMenu() {

        
    return (
        <Fragment>
             <nav className="barsMenu ml-auto" id="menu-primary">
                <ul  >
                        <Link to='/'>
                                <li className="current-menu-item"><a href="http://masizatech.com">Home</a> </li>
                        </Link>

                        <Link to='/login'>
                                <li><a href="http://masizatech.com/locale/en">Login</a> </li>
                        </Link>
                            
                        <Link to='/register'>
                                <li><a href="http://masizatech.com/locale/en">Register</a> </li>
                        </Link>
                                
                        <Link to='/'>
                                <li><a href="http://masizatech.com/locale/fr">FR</a> </li>
                        </Link>
                                
                        <Link to='/'>
                                <li><a href="http://masizatech.com/locale/en">EN</a> </li>
                        </Link>         
                </ul>
              </nav>
        </Fragment>
    )
}

export default FaBarsMenu
