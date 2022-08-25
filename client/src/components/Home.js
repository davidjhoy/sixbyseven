import React, { useEffect, useState, useContext } from 'react';
import "../css/home.css";
import ArticleCard from './ArticleCard';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './Navbar';
import HighLightCard from './HighLightCard';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';
import { GiConsoleController } from 'react-icons/gi';

const Home = () => {
  const navigate = useNavigate();
  const [articleList, SetArticleList] = useState("")
  const [displayList, SetDisplayList] = useState("")
  const [highlights, SetHighlights] = useState("")
  const [sideBarInput, SetSideBarInput] = useState("")

 
  const { user, isAuthenticated, isLoading } = useAuth0();
  const {USERID, SETUSERID} = useContext(UserContext);
  

  const parseArticles = (result) => {
    SetArticleList(result)
    
  }
  
  const parseHighlights = (result) => {
    SetHighlights(result)
  }
 

  const makeCards = () => {
    
   return articleList.map( article=>{
      // <ArticleCard id = {article.title} sample = {article.sample_text} title = {article.title} />
   
    return <ArticleCard className = "Home-article-card" title = {article.title} sample = {article["sample_text"]} key = {article["sample_text"]} id = {article.id} author = {article["author"]} imageUrl = {article["ImageUrl"]}/>
    }
   )
  }

  useEffect(()=>{  
    
     fetch('http://localhost:3000/articles')
         
        .then(response => response.json())
        .then(result => parseArticles(result))
        .catch(error => console.log('error', error));

        fetch('http://localhost:3000/highlights')
         
        .then(response => response.json())
        .then(result => parseHighlights(result))
        .catch(error => console.log('error', error));

      
          
      
      
    
  },[])

  const makeHighLights = () => {
    return highlights.map((highlight)=>{
      return <HighLightCard title = {highlight.title} sample_text = {highlight["sample_text"].split('').slice(0,100)} id = {highlight.id} key = {highlight["sample_text"]}/>
    })
   
  }

  const setUSER = (response) =>{
      console.log(response)
        
          SETUSERID(response.id) 
        
        
    
  }

  const createUser = (user) => {
    
    fetch(`http://localhost:3000/users`, {
    method: 'POST',
    body: JSON.stringify({
      "clientID": user["sub"],
      
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      },
    })
  .then((response) => response.json())
  .then((json) => setUSER(json))
  .catch(error => console.log('error', error))
  }

  useEffect(()=>{
    if (user){
      createUser(user)
    }
  },[user])
 
  const setSideBarInput = (e) => {
    
    SetSideBarInput(e.target.value);
    const interArticle = articleList
    const result = interArticle.filter(article => article.title.toLowerCase().includes(e.target.value))
    SetArticleList(result)
  }
  
  console.log(sideBarInput)

  return (
    <>
      <Navbar />
      
      <div className='Home-container'>

        
        <div className = "Home-sidebar">
          <input id = "sideBarInput" type = "text" onChange = {setSideBarInput}></input>
          
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