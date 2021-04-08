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
                      <li><a href="http://masizatech.com/locale/fr">FR<span className="flag-icon flag-icon-fr text-dark"></span></a> </li>
                      <li><a href="http://masizatech.com/locale/en">EN<span className="flag-icon flag-icon-us text-dark"></span></a> </li>
                      
                    </ul>
        </Fragment>
    )
}

export default HeaderMenu
