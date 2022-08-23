import React, { useEffect, useState } from 'react';
import "../css/home.css";
import ArticleCard from './ArticleCard';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './Navbar';
import HighLightCard from './HighLightCard';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [articleList, SetArticleList] = useState("")
  const [highlights, SetHighlights] = useState("")
  const { isAuthenticated } = useAuth0();
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


  const parseArticles = (result) => {
    SetArticleList(JSON.parse(result))
    
  }
  
  const parseHighlights = (result) => {
    SetHighlights(result)
  }

  const makeCards = () => {
    
   return articleList.map( article=>{
      // <ArticleCard id = {article.title} sample = {article.sample_text} title = {article.title} />
   
    return <ArticleCard className = "Home-article-card" title = {article.title} sample = {article["sample_text"]} key = {article["sample_text"]} id = {article.id} author = {article["author"]}/>
    }
   )
  }

  useEffect(()=>{  
     fetch('http://localhost:3000/articles')
         
        .then(response => response.text())
        .then(result => parseArticles(result))
        .catch(error => console.log('error', error));

        fetch('http://localhost:3000/highlights')
         
        .then(response => response.json())
        .then(result => parseHighlights(result))
        .catch(error => console.log('error', error));
    
  },[])

  const makeHighLights = () => {
    return highlights.map((highlight)=>{
      return <HighLightCard title = {highlight.title} sample_text = {highlight["sample_text"]} id = {highlight.id} key = {highlight["sample_text"]}/>
    })
   
  }
  

  return (
    <>
      <Navbar />
      
      <div className='Home-container'>

        
        <div className = "Home-sidebar">
          <input id = "sideBarInput"></input>
          
          {highlights ? makeHighLights() : <p>Loading...</p>}
        </div>


        <div className = "Home-body">
          
          {articleList ? makeCards() : <p>"Loading ..."</p>}
          
        </div>
        
        
      </div>
    </>
  )
}

export default Home;