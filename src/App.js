import React from 'react';
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



class App extends Component {
  render(){
    return (
      <Router>
      <div>          
            <Header/>
             <Switch>
              <Route path='/' exact>
                <Home/>
              </Route>
              <Route path='/home' exact>
                <Home/>
              </Route>
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={Register} />
              <Route path='/account' exact component={Account} />
              <Route path='/conditinsandterms' exact component={ConditionTerms} />
              <Route path='/account' exact   children={Account} /> 
            </Switch> 
            <Footer/>
      </div>
      </Router>
     

     
    );
  }  
}
export default App;
