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



function App () {
  
  
    const isAuth = useAuthContext()
    
    return (
      
           <Router>
          <div>          
          { !Boolean(isAuth.user) ? <Header/> :  null }
             <Switch>
              
              <Route path='/home' component={Home}  exact/>
              <Route path='/' component={Home}  exact/>  
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={Register} /> 
              <Route path='/conditinsandterms' exact component={ConditionTerms} />
              <Route path='/mailactivation' exact component={Mailactivation} />       
              <PrivateRoute exact path='/dashboard' component={Dashboard}  /> 
            </Switch> 
            <Footer/> 
            
        </div>
      </Router>
     
      
     
     
    );
  }  

export default App;
