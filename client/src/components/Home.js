import React from 'react';
import "../css/home.css";
import ArticleCard from './ArticleCard';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated)
  return (
    <div className='Home-container'>

      
      <div className = "Home-sidebar"><p>SideBar</p></div>
      <div className = "Home-body"><p>Body</p></div>
      
      
    </div>
  )
}

export default Home;