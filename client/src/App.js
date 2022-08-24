import logo from './logo.svg';
import React, {useState} from "react";
import './css/App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import AuthBtn from './components/AuthBtn';
import Home from './components/Home';
import Editor from './components/Editor';
import ArticlePage from './components/ArticlePage';
import Staging from './components/Staging';
import Profile from './components/Profile';
import {UserContext} from './contexts/UserContext';




function App() {


  const [USERID, SETUSERID] = useState("")

  return (
    <>
      
     
       <UserContext.Provider value = {{USERID, SETUSERID}}>
        <Routes>
          
          <Route path="/" element = {<Staging/>}/>
          <Route path="/home" element = {<Home />}/>
          <Route path="/editor" element = {<Editor/>}/>
          <Route path="/articlepage/:id" element = {<ArticlePage/>}/>
          <Route path="/profile/" element = {<Profile />} />
        </Routes>
        </UserContext.Provider>
     
        {/* <div className="footer">
        <p className = "Footer-text">Copyright David Hoy 2022</p>
        </div> */}
      
    </>
  );
}

export default App;
