import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import AuthBtn from './components/AuthBtn';
import Home from './components/Home';
import Editor from './components/Editor';
import ArticlePage from './components/ArticlePage';
import Staging from './components/Staging';




function App() {


  

  return (
    <>
      
     
       
        <Routes>
          
          <Route path="/" element = {<Staging/>}/>
          <Route path="/home" element = {<Home />}/>
          <Route path="/editor" element = {<Editor/>}/>
          <Route path="/articlepage" element = {<ArticlePage/>}/>
        </Routes>
     
        <div className='Profile-footer'>
        <p className = "Footer-text">Copyright David Hoy 2022</p>
      </div>
      
    </>
  );
}

export default App;
