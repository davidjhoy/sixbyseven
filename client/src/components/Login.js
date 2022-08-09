
import React from 'react'
import './login.css';


const Login = () => {
  return (
    <div className = "Login-container">
        <h1>Login</h1>
        <form className = "form">
        <input type = "text" name="username"/>
        <input type = "type" name= "password"/>
        <button>Login</button>
        </form>
        
    </div>
  )
}

export default Login;