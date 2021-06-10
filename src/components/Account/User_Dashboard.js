import React,{useEffect, useState} from 'react'
import {authentificationService} from '../Services/authentificationService'
import './Account.css'

function User_Dashboard() {
 const [userInfo, setUserInfo]= useState('')
 console.log(userInfo)
  useEffect(()=>{ 
  authentificationService.getTransacInfo()
  .then(user=>setUserInfo(user))
    }, [])
    return (
      
    <div class="profile-content">

    <div class="bg-light shadow-sm rounded p-4 mb-4">
      <h3 class="text-5 font-weight-400 text-warning mb-4">Recent Payment Statistics<span class="text-muted text-4"></span></h3>
    <div class="row">
    <div class="col col-sm col-lg">

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Service</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Today Transaction Count</td>
            <td> {userInfo.today_count} </td>
          </tr>
          <tr>
            <td>Today Transaction Amount</td>
            <td> {userInfo.today_XOF_amount}FCFA |   {userInfo.today_NGN_amount}NGN</td>
          </tr>

        </tbody>
      </table>

    </div>
  </div>
</div>

</div>      
    )
}

export default User_Dashboard
