import React, { Fragment, useState, useEffect } from 'react'
import '../Account/Account.scss'
import '../Account/Account.css'
import { FaTachometerAlt, FaBars, FaChevronDown, FaAutoprefixer, FaPaperPlane, FaListUl } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { authentificationService } from '../Services/authentificationService'
import { useHistory, Link, useLocation } from "react-router-dom";
import { useAuthContext } from '../UserContext'



function UserLayout({ children }) {
  const currentUser = localStorage.getItem('currentUser')
  const location = useLocation();

  
  const [active, setActive] = useState('dashboard')
  const [style, setStyle] = useState(false)
  const [user, setUser] = useState(false)
  let history = useHistory();
  // const isAuth = useAuthContext()
  // const user = isAuth.user
  console.log(user)
  let path = location.pathname
  console.log(location.pathname)
  let callBackUrl = window.location.href;
  console.log('callbacurl', callBackUrl)

  useEffect(() => {
    authentificationService.getUser().then(result =>setUser(result));
    if(!Boolean(currentUser || currentUser === 'undefined' || currentUser ==='')){
      history.push({
        pathname:'/login',
        path:'/login',
        search: 'callbackurl='+callBackUrl
      }) 
    };

   
    console.log(location.search)
    // console.log(location.state.result)
    
  }, [setStyle,setUser,setActive])

  function handleLogout() {
    authentificationService.logout().
      then(result => {
        if (result.status === '000') {
          localStorage.clear('currentUser')
          history.push('/login')
        }
      })
  }

  return (
    <Fragment>
      <div className="header03">
        <div className="header-main">
          <div className="container d-flex align-items-center">
            <a className="logo d-inline-flex" >
              <img src="http://masizatech.com/assets/logo.png" alt="" />
            </a>
            <nav className="primary-menu ml-auto">
              <a onClick={() => setStyle(!style)} id="mobile-menu-toggler" > <FaBars /></a>
              <ul style={style ? { display: 'block' } : null}  >
                <Link to='/' >
                  <li className="current-menu-ittogglerem"><a >Home</a></li>
                </Link>

                {/* <li><a >FR<span className="flag-icon flag-icon-fr text-dark"></span></a> </li> */}
                <li><a >EN<span className="flag-icon flag-icon-us text-dark"></span></a> </li>

                <li className="has-menu-child pro-menu-drop">
                  <Link>
                    <div className="header-pro-thumb">
                      <img className="rounded-circle" src="http://masizatech.com/assets/avatar.png" alt="" />
                    </div>Hello, {user.name} <FaChevronDown />
                  </Link>
                  <ul className="dropdown-menu-md sub-menu profile-drop">
                    <li className="dropdown-header">
                      <div>
                        <h5 className="hidden-xs m-b-0 text-primary text-ellipsis"></h5>
                        <div className="small text-muted"><span></span></div>
                      </div>
                    </li>
                    <li>
                      <hr className="mx-n3 mt-0" />
                    </li>
                    <li className="nav__create-new-profile-link">
                      <Link to='/account' >
                        <span>View personal profile</span>
                      </Link>
                    </li>
                    <li className="nav__create-new-profile-link">
                      <Link to='/transactions' >
                        <span>View transactions</span>
                      </Link>
                    </li>
                    <li className="divider"></li>

                    <li className="nav__dropdown-menu-items">
                      <a onClick={handleLogout}><FiLogOut size='15px' color="red" />
                        <span>
                          Logout
                        </span></a>
                    </li>

                  </ul>
                </li>
                <li>
                  <a className="current-menu-item" onClick={handleLogout} >
                    <FiLogOut size='25px' color="red" />
                  </a>
                </li>
              </ul>
            </nav>
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
                    <Link to='/dashboard' >
                      <li onClick={() => setActive('dashboard')} className={active === 'dashboard' ? "active" : "nav-intem"}><a style={{ cursor: 'pointer' }} className="nav-link" ><FaTachometerAlt size='1.3em' /> Dashboard</a></li>
                    </Link>
                    <Link to='/account' >
                      <li onClick={() => setActive('account')} className={active === 'account' ? "active" : "nav-intem"}><a style={{ cursor: 'pointer' }} className="nav-link"  ><FaAutoprefixer size='1.3em' /> Account </a></li>
                    </Link>
                    <Link to='/sendmoney' >
                      <li onClick={() => setActive('sendmoney')} className={active === 'sendmoney' ? "active" : "nav-intem"}>  <a style={{ cursor: 'pointer' }} className="nav-link" ><FaPaperPlane size='1.2em' />  Send Money</a></li>
                    </Link>
                    <Link to='/transactions' >
                      <li onClick={() => setActive('transactions')} className={active === 'transactions' ? "active" : "nav-intem"}>  <a style={{ cursor: 'pointer' }} className="nav-link" ><FaListUl size='1.2em' />  Transactions</a></li>
                    </Link>
                  </ul>

                </div>
              </div>
            </div>

            <div className="col-lg-9">
              {children}
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default UserLayout
