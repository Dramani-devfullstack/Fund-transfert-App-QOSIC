// import React, { Fragment, useState, useEffect } from 'react'
// import './Account.scss'
// import './Account.css'
// import { FaTachometerAlt } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";
// import { FaAutoprefixer } from "react-icons/fa";
// import { FaPaperPlane } from "react-icons/fa";
// import { FaListUl } from "react-icons/fa";
// import { FiLogOut } from "react-icons/fi";
// import User_Dashboard from './User_Dashboard'
// import Account from './Account'
// import UserSendMoney from './UserSendMoney';
// import Transactions from './Transactions';
// import {authentificationService} from '../Services/authentificationService'
// import { useHistory, Link, useRouteMatch } from "react-router-dom";
// import {useAuthContext} from '../UserContext'


// function Dashboard() {
//   const [active, setActive] = useState('dashboard')
//   const [style, setStyle] = useState(false)
//   let history = useHistory();
//   const isAuth = useAuthContext()
//   const user = isAuth.user 
//   console.log(user)

  
//   useEffect(()=>{ 
//       authentificationService.getTransacInfo().then(result=>console.log(result))
//   }, [user])

//   function handleLogout(){
//       authentificationService.logout().
//       then(result=>{if(result.status==='000'){
//         localStorage.clear('currentUser')
//         history.push('/login')
//       }})
//   }

//   return (
//     <Fragment>
//       <div className="header03">
//         <div className="header-main">
//           <div className="container d-flex align-items-center">
//             <a className="logo d-inline-flex" href="http://masizatech.com">
//               <img src="http://masizatech.com/assets/logo.png" alt="" />
//             </a>
//             <nav className="primary-menu ml-auto">
//               <a onClick={()=>setStyle(!style)} id="mobile-menu-toggler" href="#"><FaBars/></a>
//               <ul  style={style ? {display:'block'} : null }  >
//                 <li className="current-menu-ittogglerem"><a href="http://masizatech.com">Home</a></li>
//                 <li><a >FR<span className="flag-icon flag-icon-fr text-dark"></span></a> </li>
//                 <li><a >EN<span className="flag-icon flag-icon-us text-dark"></span></a> </li>

//                 <li className="has-menu-child pro-menu-drop">
//                   <a href="http://masizatech.com/account">
//                     <div className="header-pro-thumb">
//                       <img className="rounded-circle" src="http://masizatech.com/assets/avatar.png" alt="" />
//                     </div>Hello, {user.name} <FaChevronDown />
//                   </a>
//                   <ul className="dropdown-menu-md sub-menu profile-drop">
//                     <li className="dropdown-header">
//                       <div>
//                         <h5 className="hidden-xs m-b-0 text-primary text-ellipsis"></h5>
//                         <div className="small text-muted"><span></span></div>
//                       </div>
//                     </li>
//                     <li>
//                       <hr className="mx-n3 mt-0" />
//                     </li>
//                     <li className="nav__create-new-profile-link">
//                       <a href="http://masizatech.com/account/profile">
//                         <span>View personal profile</span>
//                       </a>
//                     </li>
//                     <li className="nav__create-new-profile-link">
//                       <a href="http://masizatech.com/account/successful/transactions">
//                         <span>View transactions</span>
//                       </a>
//                     </li>
//                     <li className="divider"></li>

//                     <li className="nav__dropdown-menu-items">
//                       <a onClick={handleLogout}><FiLogOut  color="red" />
//                         <span>
//                         Logout
//                         </span></a>
//                     </li>
                   
//                   </ul>
//                 </li>
//                 <li>
//                   <a className="current-menu-item" onClick={handleLogout} >
//                   <FiLogOut  color="red"/>
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>

//       <div id="content" className="py-4">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-3 sidebar">
//               <div className="widget admin-widget p-0">
//                 <div className="Profile-menu">
//                   <ul className="nav secondary-nav">
//                     <li  onClick={()=>setActive('dashboard')} className={ active ==='dashboard' ? "active" : "nav-intem"}><a style={{cursor:'pointer'}} className="nav-link" ><FaTachometerAlt size='1.3em' /> Dashboard</a></li>
//                     <li  onClick={()=>setActive('account')} className={ active ==='account' ? "active" : "nav-intem"}><a style={{cursor:'pointer'}} className="nav-link"  ><FaAutoprefixer size='1.3em'/> Account </a></li>
//                     <li onClick={()=>setActive('sendmoney')} className={ active ==='sendmoney' ? "active" : "nav-intem"}>  <a style={{cursor:'pointer'}} className="nav-link" ><FaPaperPlane size='1.2em'/>  Send Money</a></li>
//                     <li onClick={()=>setActive('transactions')} className={ active ==='transactions' ? "active" : "nav-intem"}>  <a style={{cursor:'pointer'}} className="nav-link" ><FaListUl size='1.2em'/>  Transactions</a></li>


//                     <Link >
//                     <li onClick={()=>setActive('dashboard')} className={ active ==='dashboard' ? "active" : "nav-intem"}>
//                        <a style={{cursor:'pointer'}} className="nav-link" ><FaTachometerAlt size='1.3em' /> Dashboard</a>
//                     </li>
//                       </Link> 
//                       <Link  to={`${url}/account`}  >
//                     <li  onClick={()=>setActive('account')} className={ active ==='account' ? "active" : "nav-intem"}>
//                           <a style={{cursor:'pointer'}} className="nav-link"  ><FaAutoprefixer size='1.3em'/> Account </a>
//                     </li>
//                       </Link>
//                     <li onClick={()=>setActive('sendmoney')} className={ active ==='sendmoney' ? "active" : "nav-intem"}>  <a style={{cursor:'pointer'}} className="nav-link" ><FaPaperPlane size='1.2em'/>  Send Money</a></li>
//                     <li onClick={()=>setActive('transactions')} className={ active ==='transactions' ? "active" : "nav-intem"}>  <a style={{cursor:'pointer'}} className="nav-link" ><FaListUl size='1.2em'/>  Transactions</a></li>

//                   </ul>
                  
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-9">
              
//               {active ==='dashboard' && <User_Dashboard/>}
//               {active ==='account' && <Account/>}
//               {active ==='sendmoney' && <UserSendMoney/>}
//               {active ==='transactions' && <Transactions/>}

//             </div>

//           </div>
//         </div>
//       </div>
//     </Fragment>
//   )
// }

// export default Dashboard
