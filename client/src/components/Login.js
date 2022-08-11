
import React from 'react'
import '../css/login.css';
import '../assets/leaves.jpeg'
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className = "Login-container">
        <button onClick={() => loginWithRedirect()}>Log In</button>
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