import logo from './logo.svg';
import './css/App.css';
import React, { useMemo,  useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import AuthBtn from './components/AuthBtn';
import Home from './components/Home';
import Editor from './components/Editor';
import ArticlePage from './components/ArticlePage';
import Staging from './components/Staging';
import Profile from './components/Profile';
import {UserContext} from './Contexts/UserContext';



function App() {
  const [UserID, SetUserID] = useState("")


  

  return (
    <>
      
      <UserContext.Provider value ={{UserID, SetUserID}}>
       
        <Routes>
          
          <Route path="/" element = {<Staging/>}/>
          <Route path="/home" element = {<Home />}/>
          <Route path="/editor" element = {<Editor/>}/>
          <Route path="/articlepage/:id" element = {<ArticlePage/>}/>
          <Route path="/profile/" element = {<Profile />} />
        </Routes>
     
        {/* <div className="footer">
        <p className = "Footer-text">Copyright David Hoy 2022</p>
        </div> */}

      </UserContext.Provider>
      
    </>
  );
}

export default App;
