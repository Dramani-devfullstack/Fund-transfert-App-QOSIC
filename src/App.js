import React, { useEffect, useState } from 'react';
import './App.css';
import { Component } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Account from './components/Account/Account';
import ConditionTerms from './components/ConditionTerms/ConditionTerms';
import PrivateRoute from './PrivateRoute'
import UserProvider from './components/UserContext';
import {useAuthContext} from './components/UserContext'



function App () {
  
  
    const isAuth = useAuthContext()
    // Boolean(isAuth.user)
    console.log(isAuth.user)
    return (
      
           <Router>
          <div>          
          { !isAuth.user ?<Header/> :  null}
             <Switch>
              
              <Route path='/home' component={Home}  exact/>
              <Route path='/' component={Home}  exact/>
               
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={Register} /> 
              <Route path='/conditinsandterms' exact component={ConditionTerms} />       
              <PrivateRoute exact path='/account' component={Account}  /> 
            </Switch> 
            { !isAuth.user ?<Footer/>:  null}
            
        </div>
      </Router>
     
      
     
     
    );
  }  

export default App;
