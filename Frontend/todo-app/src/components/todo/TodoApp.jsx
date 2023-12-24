import { BrowserRouter, Routes, Route, Navigate,} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './Components/LogoutComponent'
import HeaderComponent from './Components/HeaderComponent'
import ErrorComponent from './Components/ErrorComponent'
import ListTodosComponent from './Components/ListTodosComponent'
import LoginComponent from './Components/LoginComponent'
import WelcomeComponent from './Components/WelcomeComponent'
import FooterComponent from './Components/FooterComponent'
import AuthProvider, { useAuth } from './Components/security/AuthContext'
import TodoComponent from './Components/TodoComponent'


export default function TodoApp() {

    function AuthenticatedRoute({children}){
    const authContext = useAuth()

    if(authContext.isAuthenticated)
        return children
    
    return <Navigate to="/" />}

    return (
        <div className="TodoApp">
            <AuthProvider>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={
                    <AuthenticatedRoute>
                        <WelcomeComponent />
                    </AuthenticatedRoute>}></Route>
                    <Route path='*' element={<ErrorComponent />}></Route>
                    <Route path='todos' element={
                    <AuthenticatedRoute>
                        <ListTodosComponent />
                    </AuthenticatedRoute>}>
                    </Route>

                    <Route path='todo/:id' element={
                    <AuthenticatedRoute>
                        <TodoComponent />
                    </AuthenticatedRoute>}>
                    </Route>
                    
                    <Route path='logout' element={
                    <AuthenticatedRoute>
                        <LogoutComponent />
                    </AuthenticatedRoute>}></Route>
                </Routes>
                <FooterComponent />
            </BrowserRouter>
            </AuthProvider>
        </div>
    )
}











