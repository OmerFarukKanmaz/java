import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import { retrieveHelloWorldBeanPathVariable } from "../api/HelloWorldApiService"

export default function WelcomeComponent() {
 
    const {username} = useParams()

    const [message, setMessage] = useState(null)

    // function callHelloWorldRestApi(){
    //     axios.get('http://localhost:8080/hello-world')
    //     .then((response) => successfulResponse(response))
    //     .catch((error) => errorResponse(error))
    //     .finally(()=> console.log('cleanup'))
    // }

    function callHelloWorldRestApi(){
        retrieveHelloWorldBeanPathVariable('abc')
        .then((response) => successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(()=> console.log('cleanup'))
    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }
    function errorResponse(error){
        console.log(error)
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>Manage your todos - <Link to="/todos">Go Here</Link>  </div>
            <div className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello Worldd Rest API</div>
            <div className="text-info">{message}</div>
        </div>

    )
}
