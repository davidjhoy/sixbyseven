import React, { useEffect, useState } from 'react';
import "../css/home.css";
import ArticleCard from './ArticleCard';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './Navbar';

const Home = () => {
  const [articleList, SetArticleList] = useState("")
  const { isAuthenticated } = useAuth0();
  


  const parseArticles = (result) => {
    SetArticleList(JSON.parse(result))
    
  }

  const makeCards = () => {
    
    articleList.map((article)=>{
      // <ArticleCard id = {article.title} sample = {article.sample_text} title = {article.title} />
    console.log(article)
    })
    
   
  }

  useEffect(()=>{  
     fetch('http://localhost:3000/articles')
         
        .then(response => response.text())
        .then(result => parseArticles(result))
        .catch(error => console.log('error', error));
  },[])

    makeCards()
  
  return (
    <>
      <Navbar />

      <div className='Home-container'>

        
        <div className = "Home-sidebar"></div>
        <div className = "Home-body">
          <ArticleCard className = "Home-article-card" />
          <ArticleCard className = "Home-article-card" />
          <ArticleCard className = "Home-article-card" />
          <ArticleCard className = "Home-article-card" />
          <ArticleCard className = "Home-article-card" />
          <ArticleCard className = "Home-article-card" />
          {articleList ? makeCards : <p>Loading ...</p>}
        </div>
        
        
      </div>
    </>
  )
}

export default Home;