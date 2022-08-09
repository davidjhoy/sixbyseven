import logo from './logo.svg';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <>
      <Header>
        
      </Header>
      <Switch>
          <Route exact path="/">
            <Login/> 
          </Route>
          
      </Switch>
    </>
  );
}

export default App;
