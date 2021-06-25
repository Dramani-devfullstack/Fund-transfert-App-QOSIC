import React, { Fragment, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom"
import { FcOk } from "react-icons/fc";
import './Validation_url.css'


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Validation_url() {
  const [response, setResponse] = useState(false)
  const [error, setError] = useState(false)
  console.log(response.data)
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
      }
    }
    fetch("http://api.sendime.com:9000/api/user/validate/flutterwave?" + `status=${query.get('status')}&tx_ref=${query.get('tx_ref')}&transaction_id=${query.get('transaction_id')}`,
      requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.status === '000'){
          setResponse(true)
        }
        if(result.status === 'error'){
          setError(error)
        }
      } )
  }, [setResponse])

  let query = useQuery()

  let status = query.get('status')
  return (
        <div className="tab-pane fade " id="pills-profile4" role="tabpanel"
            aria-labelledby="pills-profile-tab">
            <div class="popup_box">
                <FcOk size='30px' />
                <h1> Sucessful Transaction </h1>
                <label></label>
            </div> 
            </div> 
   
  )
}

export default Validation_url
