import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ConditionTerms from './components/ConditionTerms/ConditionTerms';
import PrivateRoute from './PrivateRoute'
import {useAuthContext} from './components/UserContext'
import Dashboard from './components/Account/Dashboard';
import Mailactivation from './components/Register/Mailactivation';
import Validation_url from './components/Account/Validation_url';
import ResetPassword from './components/Login/ResetPassword';
import UpdatePassword from './components/Login/UpdatePassword';
import User_Dashboard from './components/Account/User_Dashboard';
import Account from './components/Account/Account';
import UserSendMoney from './components/Account/UserSendMoney';



function App () {
  
  
    const isAuth = useAuthContext()
    
    return (
      
           <Router>
          <div className='app' >          
          { !Boolean(isAuth.user) ? <Header/> :  null }
             <Switch> 
              <Route path='/home' component={Home}  exact/>
              <Route path='/' component={Home}  exact/>  
              <Route path='/login' exact component={Login} />
              <Route path='/resetpassword' exact component={ResetPassword} />  
              <Route path='/updatePassword' exact component={UpdatePassword} />      
              <Route path='/register' exact component={Register} /> 
              <Route path='/conditinsandterms' exact component={ConditionTerms} />
              <Route path='/mailactivation' exact component={Mailactivation} />       
              <Route path='/verification' exact component={Validation_url} /> 
              <Route exact path='/dashboard' component={Dashboard}  /> 
              <Route path='/userdashboard' exact component={User_Dashboard} /> 
               <Route path='/account' exact component={Account} />
              <Route path='/usersendmoney' exact component={UserSendMoney} />
            </Switch> 
            <Footer/> 
            
        </div>
      </Router>
     
      
     
     
    );
  }  

export default App;
