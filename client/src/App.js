import logo from './logo.svg';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <>
      <h1>Header</h1>
      <Switch>
          <Route exact path="/">
            <Login/> 
          </Route>
          
      </Switch>
    </>
  );
}

export default App;
