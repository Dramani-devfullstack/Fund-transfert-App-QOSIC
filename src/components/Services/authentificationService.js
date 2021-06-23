const url= 'http://api.sendime.com:9000/api'

let header = { 'Content-Type': 'application/json',
                "Authorization":"Bearer Let3sr6cwrkG6yXVQUV7csPh9PvbAEdpk5TH7MJdnGd2KFu9 " }
export const authentificationService = {

    register : async function(name, email, password, password_confirmation) {
        const data ={
            'name':name,
            'email':email,
            'password':password,
            'password_confirmation':password_confirmation
        }
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify(data)
        };
        return  await fetch(`${url}/register`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => {
                return error
        })
    },

    login: async function(email, password) {
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ email, password })
        };
    
        return  await fetch(`${url}/login`, requestOptions)
            .then(response => response.json())
            .then(result => result
                // store user details and jwt token in local storage to keep user logged in between page refreshes                       
                )
            .catch(error => {
                console.log(error)
        })
    },

    resetPassword: async function(email) {
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ 'email': email })
        };
    
        return  await fetch(`${url}/recover/reset-password-token`, requestOptions)
            .then(response => response.json())
            .then(result => result                      
                )
            .catch(error => {
                return error
        })
    },


    setNewPassword : async function(code, email, password, password_confirmation) {
        const data ={
            'email':email,
            'code':code,
            'password':password,
            'password_confirmation':password_confirmation
        }
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify(data)
        };
        console.log(data)
        return  await fetch(`${url}/recover/set-new-password
        `, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => {
                return error
        })
    },

    logout: async function(){
        console.log(localStorage.getItem('currentUser'))
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                     "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')) }  
        };
        console.log(requestOptions.headers)       
        return await fetch(`${url}/logout`, requestOptions)
            .then(response => response.json())
            .then(result=>result)
            
    }, 

    getUser: async function(){ 
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                     "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')) }  
        };
               
        return await fetch(`${url}/user/getaccountholderinformation`, requestOptions)
            .then(response => response.json())
            .then(result=>result.data[0])                     
        },

        getTransacInfo: async function(){ 
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json',
                         "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')) }  
            };
                   
            return await fetch(`${url}/user/highlights`, requestOptions)
                .then(response => response.json())
                .then(result=>result)       
            },

            updateProfile : async function(name, fullname, msisdn, address) {
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',
                    "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')) } ,
                    body: JSON.stringify({ name, fullname, msisdn, address})
                };
            
                return  await fetch(`${url}/user/update`, requestOptions)
                    .then(response => response.json())
                    .then(result => console.log(result))
                    .then(console.log(localStorage.getItem('currentUser')))
                    .then(result => { 
                        return result;
                    })
                    .catch(error => {return error});
            },


            updatePassword: async function(name, fullname, msisdn, address,existing_password,confirm_password, new_password){
                    const requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json',
                        "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')) },
                        body: JSON.stringify({ name, fullname, msisdn, address,existing_password,confirm_password, new_password })
                    };
                
                    return  await fetch(`${url}/user/update`, requestOptions)
                        .then(response => response.json())
                        .then(result => console.log(result))
                        .then(result => { 
                            return result;
                        })
                        .catch(error => {return error});
                },

                getListTransact: async function(query){
                    const requestOptions = {
                        method: 'GET',
                        headers: {'Content-Type': 'application/json',
                        "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')),
                         },
                       
                    };      
                    console.log(query)
                    return await fetch(`${url}/user/transactions?query=${query}
                    `, requestOptions)
                        .then(response => response.json())
                        .then(result => { 
                            return result.data
                        })
                       
                        
                },

                resendEmail: async function(email) {
                    const requestOptions = {
                        method: 'POST',
                        headers: header,
                        body :JSON.stringify({email}) 
                    };
                    return  await fetch(`${url}/email/resend`, requestOptions)
                        .then(response => response.json())
                        .then(result => result)
                        .catch(error=>console.log(error))
                },

                confirmNGN_XOF : async function(receiver_number, amount, purpose,email) {
                    const requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json',
                        "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')) } ,
                        body: JSON.stringify({ receiver_number, amount, purpose,email})
                    };
                
                    return  await fetch(`${url}/user/confirm_NGN_TO_XOF`, requestOptions)
                        .then(response => response.json())
                        .then(result=>result) 
                        
                        .catch(error => {return error});
                },

    
                confirmXOF_NGN : async function(account_number, amount, purpose,email,bank_code) {
                    const requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json',
                        "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')) } ,
                        body: JSON.stringify({ account_number, amount, purpose,email,bank_code})
                    };                
                    return  await fetch(`${url}/user/confirm_XOF_TO_NGN`, requestOptions)
                        .then(response => response.json())
                        .then(result=>result) 
                        .catch(error => {return error});
                },

                getBasicInfo: async function(){
                    const requestOptions = {
                        method: 'GET',
                        headers: {'Content-Type': 'application/json',
                        "Authorization": 'Bearer Let3sr6cwrkG6yXVQUV7csPh9PvbAEdpk5TH7MJdnGd2KFu9' },    
                    };      
                    return await fetch(`${url}/base

                    `, requestOptions)
                        .then(response => response.json())
                        .then(result => result
                        )
                        
                },
                
                validateMomoPayement : async function(amount, purpose,customer_phone_number, customer_email, receiver_bank_code, receiver_name, receiver_email,receiver_bank_account_number, receiver_bank_name) {
                    const requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json',
                        "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')) } ,
                        body: JSON.stringify({     
                            "original_amount":amount,
                            "purpose": purpose ,
                            "customer_phone_number": customer_phone_number ,
                            "customer_email": customer_email ,
                            "receiver_bank_code":  receiver_bank_code,
                            "receiver_name": receiver_name,
                            "receiver_email": receiver_email ,
                            "receiver_bank_account_number": receiver_bank_account_number,
                            "receiver_bank_name": receiver_bank_name
                        })
                        
                    };  
                    console.log(requestOptions.body)              
                    return  await fetch(`${url}/user/validate/momopayment`, requestOptions)
                        .then(response => response.json())
                        .then(result=>result) 
                        .catch(error => {return error});
                },

    
}