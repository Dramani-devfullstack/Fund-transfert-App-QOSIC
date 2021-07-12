import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
import Verify_Email from './components/Register/Verify_Email';
import PrivateRoute from './PrivateRoute'
import { Logged } from './components/UserContext';
import Home from './components/MoneyTransfert/Home';

function App() {

  const [auth, setAuth] = useState(false)
  
  useEffect(() => {
    if (Boolean(localStorage.getItem('currentUser'))) {
      setAuth(true)
    }
    console.log(auth)
    return () => {
 
    }
  }, [auth])
 

  return (
    // <Logged.Provider value={auth}>

      <div className='app' >
        <Router>
          <Switch>
            <Route path='/register' exact render={() => <StarterLayout children={<Register />} />} />
            <Route path='/login' exact render={() => <StarterLayout children={<Login />} />} />
            <Route path='/resetpassword' exact render={() => <StarterLayout children={<ResetPassword />} />} />
            <Route path='/updatePassword' exact render={() => <StarterLayout children={<UpdatePassword />} />} />
            {/* <PrivateRoute path='/dashboard' exact auth={auth}  render={()=> <UserLayout  children={<User_Dashboard/>}/> }/> */}
            <PrivateRoute path='/dashboard' exact auth={auth} render={() => <UserLayout children={User_Dashboard} />} />
            <Route path='/account' exact render={() => <UserLayout children={<Account />} />} />
            <Route path='/sendmoney' exact render={() => <UserLayout children={<UserSendMoney />} />} />
            <Route path='/sendmoney' exact render={() => <UserLayout children={<Validation_url />} />} />
            <Route path='/transactions' exact render={() => <UserLayout children={<Transactions />} />} />
            <Route path='/conditinsandterms' exact render={() => <StarterLayout children={<ConditionTerms />} />} />
            <Route path='/mailactivation' exact render={() => <StarterLayout children={<Mailactivation />} />} />
            <Route path='/mailactivation' exact component={Mailactivation} />
            <Route path='/email/verify' exact component={Verify_Email} />
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
      </div>

    //  </Logged.Provider>

  );
}

export default App;
