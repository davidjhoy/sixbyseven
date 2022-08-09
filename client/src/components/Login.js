
import React from 'react'
import '../css/login.css';


const Login = () => {
  return (
    <div className = "Login-container">
        <h1>Login</h1>
        <form className = "form">
        <label className = "label">Username</label>
        <input type = "text" name="username" className = "input"/>
        <label className = "label">Password</label>
        <input type = "type" name= "password"className = "input"/>
        <button className = "input" id = "Login-button">Login</button>
        </form>
        
    </div>
  )
}

export default Login;