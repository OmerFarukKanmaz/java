import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null) //NEW

    function login(username, password) {
        if (username === 'asd' && password === 'asdasd') {
            setAuthenticated(true)
            setUsername(username) //NEW
            return true
        } else {
            setAuthenticated(false)
            setUsername(null) //NEW
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username}}>
            {children}
        </AuthContext.Provider>
    )
}
