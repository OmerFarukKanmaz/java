import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "../api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

export default function ListTodosComponent() {
    const today = new Date()
    const TargetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    const authContext = useAuth()
    const username = authContext.username
    const navigate = useNavigate()
    useEffect(
        () => refreshTodos(), []
    )

    function refreshTodos() {

        retrieveAllTodosForUsernameApi(username)
            .then(response => {setTodos(response.data)})
            .catch(error => console.log(error))

    }

    function deleteTodo(id) {
        deleteTodoApi(username, id)
            .then(
                () => {
                    setMessage(`Delete of todo with ID ${id} succesful`)
                    refreshTodos()
                }
            )
    }

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }

    return (
        <div className="container">
            <h1>List what to Do !</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>Is Done ?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/*<td>{todo.targetDate.toDateString()}</td>*/}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            )
                        }

                    </tbody>
                </table>
            </div>
            <div>List your todos</div>
        </div>

    )
}