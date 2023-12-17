import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

export default function LoginComponent() {

    const [username, setUsername] = useState('username')
    const [password, setPassword] = useState('')
    const [showError, setshowError] = useState(false)

    const navigate = useNavigate()
    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
    function handleSubmit() {
        if(authContext.login(username, password)){ //NEW
            navigate(`/welcome/${username}`)
        } else {
            setshowError(true)
        }
    }
    return (
        <div className="Login">
            {showError && <div className="errorMessage"> Error </div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>

        </div>
    )
}