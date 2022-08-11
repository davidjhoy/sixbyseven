import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';


function App() {
  return (
    <>
      
      <Router>
        <div className = "Navbar">
          <NavLink to="/home"> Home </NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
        <Routes>
          <Route path="/login" element = {<Login />} />
          <Route path="/home" element = {<Home />}/>
          <Route path="/profile" element = {<Profile/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
