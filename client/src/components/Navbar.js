import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import Sidebar from './Sidebar';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <div className = "Navbar">
    {/* <div className='Route-Links'>
    <NavLink to="/home" className = "Links"> Home </NavLink>
    <NavLink to="/editor" className = "Links">Editor</NavLink>
    </div> */}
    
    
    <div className = "Hamburger">
    
      {/* <Logout />
      <Login /> */}
      <Sidebar id = "Sidebar"/>
    </div>
    
   
    {/* <AuthBtn /> */}
    </div>
  )
}

export default Navbar