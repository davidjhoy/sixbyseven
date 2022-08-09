import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Profile from './Profile';


function App() {
  return (
    <>
      
      <Router>
      <h1>NavBar</h1>
        <Routes>
          <Route path="/" element = {<Login />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
