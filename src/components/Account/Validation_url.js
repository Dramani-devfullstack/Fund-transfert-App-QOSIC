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
          setResponse(result)
        }
        if(result.status === 'error'){
          setError(error)
        }
      } )
  }, [setResponse])

  let query = useQuery()
  console.log(query.get('status'))
  console.log(query.get('tx_ref'))
  console.log(query.get('transaction_id'))
  let status = query.get('status')
  return (
    <Fragment>
      <div class="container">
       <div class="popup_box">
      <FcOk  size='30px'/>
      <h1>{status}Transaction </h1>
      <label></label> 
    </div>
    </div>
      
    </Fragment>
  )
}

export default Validation_url
