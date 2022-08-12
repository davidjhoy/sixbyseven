import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import AuthBtn from './components/AuthBtn';
import Home from './components/Home';
import Profile from './components/Profile';
import Staging from './components/Staging';



function App() {


  

  return (
    <>
      
     
        <div className = "Navbar">
          <div className='Route-Links'>
          <NavLink to="/home" className = "Links"> Home </NavLink>
          <NavLink to="/profile" className = "Links">Profile</NavLink>
          </div>
          
          <div className = "Hamburger">
          
            <Logout />
            <Login />
          </div>
          
         
          {/* <AuthBtn /> */}
        </div>

        <Routes>
          
          <Route path="/" element = {<Staging/>}/>
          <Route path="/home" element = {<Home />}/>
          <Route path="/profile" element = {<Profile/>}/>
        
        </Routes>
     
        <div className='Profile-footer'>
        <p className = "Footer-text">Copyright David Hoy 2022</p>
      </div>
      
    </>
  );
}

export default App;
