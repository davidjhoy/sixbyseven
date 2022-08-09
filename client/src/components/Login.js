
import React from 'react'
import './login.css';


const Login = () => {
  return (
    <div className = "Login-container">
        <h1>Login</h1>
        <form>
        <input type = "text" name="username"/>
        <input type = "type" name= "password"/>
        </form>
        
    </div>
  )
}

export default Login;