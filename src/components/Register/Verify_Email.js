import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    useLocation
  } from "react-router-dom"



  import { Link,useHistory } from 'react-router-dom'
 

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function Verify_Email() {
    const history = useHistory()
    const [response, setResponse] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        // if (Boolean(response)) {
        //     history.push('/login')
        // } else {
        //     <Redirect to='/register' />
        // }
        const requestOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
        fetch("http://api.sendime.com:9000/email/verify/" + `?expires=${query.get('expires')}&signature=${query.get('signature')}`,
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
      }, [])
    
      let query = useQuery()

      let status = query.get('expires')
      console.log(status)
    return (
        <div>
            C'est bon 
        </div>
    )
}

export default Verify_Email
