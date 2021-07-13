
import { useContext,createContext, useState} from 'react'

const AuthContext = createContext(1)
const Pathname = createContext(null)



export function useAuthContext(){
    return useContext(AuthContext)
}

export default function UserProvider({children}){
    const [user, setUser]= useState(false)
    return(
        <AuthContext.Provider value={{user, setUser}}> 
            {children}
        </AuthContext.Provider>
    )
}

export {Pathname}