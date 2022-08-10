
import React from 'react'
import '../css/login.css';
import '../assets/leaves.jpeg'


const Login = () => {
  return (
    <div className = "Login-container">
        
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