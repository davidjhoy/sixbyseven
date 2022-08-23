import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import Sidebar from './Sidebar';
import '../css/Navbar.css';
import Union from '../assets/Union.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const imgClick = () =>{
    navigate('/home')
  }
  return (
    <div className = "Navbar">
    {/* <div className='Route-Links'>
    <NavLink to="/home" className = "Links"> Home </NavLink>
    <NavLink to="/editor" className = "Links">Editor</NavLink>
    </div> */}
    
      <img src = {Union} alt = { "siteLogo"} className="siteLogo" onClick={imgClick}/>
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