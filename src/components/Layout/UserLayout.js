import React, { Fragment, useState, useEffect } from 'react'
import '../Account/Account.scss'
import '../Account/Account.css'
import { FaTachometerAlt, FaBars, FaChevronDown, FaAutoprefixer, FaPaperPlane, FaListUl } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { authentificationService } from '../Services/authentificationService'
import { useHistory, Link } from "react-router-dom";
import avatar from '../img/avatar.png'
import QOS_logo from '../img/QOS_logo.png'



function UserLayout({ children }) {
  const [active, setActive] = useState('dashboard')
  const [style, setStyle] = useState(false)
  const [user, setUser] = useState(false)
  let history = useHistory();
  // const isAuth = useAuthContext()
  // const user = isAuth.user
  console.log(user)


  useEffect(() => {
    authentificationService.getUser().then(result =>setUser(result))
  }, [setUser,setStyle,setActive])

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
              <img src={QOS_logo} alt="QOS_logo" />
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
                      <img className="rounded-circle" src={avatar} alt="avatar" />
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
                    <Link to='/sendmoney' >
                      <li onClick={() => setActive('sendmoney')} className={active === 'sendmoney' ? "active" : "nav-intem"}>  <a style={{ cursor: 'pointer' }} className="nav-link" ><FaPaperPlane size='1.2em' />  Send Money</a></li>
                    </Link>
                    <Link to='/transactions' >
                      <li onClick={() => setActive('transactions')} className={active === 'transactions' ? "active" : "nav-intem"}>  <a style={{ cursor: 'pointer' }} className="nav-link" ><FaListUl size='1.2em' />  Transactions</a></li>
                    </Link>
                    <Link to='/account' >
                      <li onClick={() => setActive('account')} className={active === 'account' ? "active" : "nav-intem"}><a style={{ cursor: 'pointer' }} className="nav-link"  ><FaAutoprefixer size='1.3em' /> Settings </a></li>
                    </Link>
                    {/* Settings  is equal to account, so in the all app you will see account. */}
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
