import React from 'react';
import "../css/home.css";
import ArticleCard from './ArticleCard';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated)
  return (
    <div className='Home-container'>

      
      <div className = "Home-sidebar"></div>
      <div className = "Home-body">
        <ArticleCard className = "Home-article-card" />
        <ArticleCard className = "Home-article-card" />
        <ArticleCard className = "Home-article-card" />
        <ArticleCard className = "Home-article-card" />
        <ArticleCard className = "Home-article-card" />
        <ArticleCard className = "Home-article-card" />
        <ArticleCard className = "Home-article-card" />
        <ArticleCard className = "Home-article-card" />
        <ArticleCard className = "Home-article-card" />
        <ArticleCard className = "Home-article-card" />
        <ArticleCard className = "Home-article-card" />
      </div>
      
      
    </div>
  )
}

export default Home;