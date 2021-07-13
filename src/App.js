import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ConditionTerms from './components/ConditionTerms/ConditionTerms';
import Mailactivation from './components/Register/Mailactivation';
import Validation_url from './components/Account/Validation_url';
import ResetPassword from './components/Login/ResetPassword';
import UpdatePassword from './components/Login/UpdatePassword';
import User_Dashboard from './components/Account/User_Dashboard';
import Account from './components/Account/Account';
import UserSendMoney from './components/Account/UserSendMoney';
import StarterLayout from './components/Layout/StarterLayout';
import UserLayout from './components/Layout/UserLayout';
import Transactions from './components/Account/Transactions';
import NotFound from './components/NotFound'




function App () {

    

    
    return (
      
           <Router>
          <div className='app' >          
          {/* { !Boolean(isAuth.user) ? <Header/> :  null } */}
             <Switch> 
              <Route path='/home' component={Home}  exact/>
              <Route path='/' component={Home}  exact/>   
              {/* <Route path='/logintest' exact render={()=> <StarterLayout  children={<LoginTest/>}  /> } /> */}
              <Route path='/register' exact render={()=> <StarterLayout  children={<Register/>}/> }/>
              <Route path='/login' exact render={()=> <StarterLayout   children={<Login/>}/> }/>
              {/* <Route   component={NotFound}/> }/> */}
              <Route path='/resetpassword' exact render={()=> <StarterLayout  children={<ResetPassword/>}/> }/>
              <Route path='/updatePassword' exact render={()=> <StarterLayout  children={<UpdatePassword/>}/> }/>
              {/* <Route path='/resetpassword' exact component={ResetPassword} />  
              <Route path='/updatePassword' exact component={UpdatePassword} />    */}
              <Route path='/dashboard' exact render={()=> <UserLayout  children={<User_Dashboard/>}/> }/>
              <Route path='/account' exact render={()=> <UserLayout  children={<Account/>}/> }/>
              <Route path='/sendmoney' exact render={()=> <UserLayout  children={<UserSendMoney/>}/> }/>
              {/* <Route path='/sendmoney' exact render={()=> <UserLayout  children={<Validation_url/>}/> }/> */}
              <Route path='/transactions' exact render={()=> <UserLayout  children={<Transactions/>}/> }/>
              <Route path='/conditinsandterms' exact render={()=> <StarterLayout  children={<ConditionTerms/>}/> }/>
              <Route path='/mailactivation' exact render={()=> <StarterLayout  children={<Mailactivation/>}/> }/>
              {/* <Route path='/sendmoney/verification' exact render={()=> <StarterLayout  children={<Validation_url/>}/> }/> */}
              {/* <Route path='/sendmoney/verification' exact  component={Validation_url} />    */}
              {/* <Route path='/register' exact component={Register} />  */}
              {/* <Route path='/conditinsandterms' exact component={ConditionTerms} /> */}
              <Route path='/mailactivation' exact component={Mailactivation} />       
              {/* <Route path='/verification' exact component={Validation_url} />  */}
               {/* <Route exact path='/dashboard' component={Dashboard}  /> 
              <Route path='/userdashboard' exact component={User_Dashboard} /> 
               <Route path='/account' exact component={Account} />
              <Route path='/usersendmoney' exact component={UserSendMoney} />
              <Route path='/transactions' exact component={Transactions} /> */}
            </Switch> 
            {/* <Footer/>  */}
            
        </div>
      </Router>
     
      
     
     
    );
  }  

export default App;
