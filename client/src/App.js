import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import AuthBtn from './components/AuthBtn';
import Home from './components/Home';
import Profile from './components/Profile';



function App() {


  

  return (
    <>
      
     
        <div className = "Navbar">
          <NavLink to="/home"> Home </NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <AuthBtn />
        </div>
        <Routes>
          <Route path = "/" element = {<Home />} /> 
        
          <Route path="/home" element = {<Home />}/>
          <Route path="/profile" element = {<Profile/>}/>
        </Routes>
     
      <div className = "Home-footer"><p>Footer</p></div>
      
    </>
  );
}

export default App;
