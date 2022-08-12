import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return (
    <>
      
     
        <div className = "Navbar">
          <NavLink to="/home"> Home </NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <button onClick={() => loginWithRedirect()} className = "logBtn">Log In</button>
          <button onClick={() => logout({ returnTo: window.location.origin })}> Log Out </button>
        </div>
        <Routes>
          <Route path="/login" element = {<Login />} />
          <Route path="/home" element = {<Home />}/>
          <Route path="/profile" element = {<Profile/>}/>
        </Routes>
     
      <div className = "Home-footer"><p>Footer</p></div>
      
    </>
  );
}

export default App;
