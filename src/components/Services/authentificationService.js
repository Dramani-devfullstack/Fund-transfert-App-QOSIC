const url= 'http://api.sendime.com:9000/api'

let header = { 'Content-Type': 'application/json',
                "Authorization":"Bearer Let3sr6cwrkG6yXVQUV7csPh9PvbAEdpk5TH7MJdnGd2KFu9 " }
export const authentificationService = {


    register : async function(name, email, password, confirm_password) {
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ name, email, password, confirm_password })
        };
    
        return  await fetch(`${url}/register`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .then(result => { 
                return result;
            })
            .catch(error => {return error});
    },

    login: async function(email, password) {
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ email, password })
        };
    
        return  await fetch(`${url}/login`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(result.data.access_token));    
                return result;
            });
    },

    logout: async function(){
        const requestOptions = {
            method: 'POST',
            headers: {...header, Authorization: `${localStorage.getItem('currentUser')}` }  
        };
        return await fetch(`${url}/logout`, requestOptions)
            .then(response => response.json())
            .then(()=>{
                localStorage.removeItem('currentUser')
                
            })
    }

}