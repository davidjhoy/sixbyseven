import React from 'react';
import { slide as Menu } from "react-burger-menu";
import '../css/Burger.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { logout } = useAuth0();
  return (
    <Menu width={ '20%' }  customBurgerIcon={ <GiHamburgerMenu/> }>
    <a className="menu-item" href="/home">
      Home
    </a>

    <a className="menu-item" href="/editor">
      Editor
    </a>

    <a className="menu-item" href="/profile">
      Profile
    </a>

    <a className="menu-item"  onClick = {() => logout({returnTo: window.location.origin})}>
      Logout
    </a>
  </Menu>
  )
}

export default Sidebar;




  
   
