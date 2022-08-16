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
  const CardClick = () => {
    console.log("Hello")
    //here I will need to use History to push to a articlepage but I will also need the full articlepage to receive the id in params to search for the specific article
  }

  const makeCards = () => {
    
   return articleList.map( article=>{
      // <ArticleCard id = {article.title} sample = {article.sample_text} title = {article.title} />
   
    return <ArticleCard className = "Home-article-card" title = {article.title} key = {article.title} onClick = {CardClick}/>
    }
   )
    
 
    
    
   
  }

  useEffect(()=>{  
     fetch('http://localhost:3000/articles')
         
        .then(response => response.text())
        .then(result => parseArticles(result))
        .catch(error => console.log('error', error));
  },[])

  
  
  return (
    <>
      <Navbar />
      
      <div className='Home-container'>

        
        <div className = "Home-sidebar"></div>
        <div className = "Home-body">
          <ArticleCard className = "Home-article-card" />
          {articleList ? makeCards() : <p>"Loading ..."</p>}
          
        </div>
        
        
      </div>
    </>
  )
}

export default Home;