import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';

const Navbar = () => {
  return (
    <div className = "Navbar">
    <div className='Route-Links'>
    <NavLink to="/home" className = "Links"> Home </NavLink>
    <NavLink to="/editor" className = "Links">Editor</NavLink>
    </div>
    
    <div className = "Hamburger">
    
      <Logout />
      <Login />
    </div>
    
   
    {/* <AuthBtn /> */}
  </div>
  )
}

export default Navbar