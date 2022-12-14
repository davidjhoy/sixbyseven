import React from 'react';
import '../css/articleCard.css';
import { useNavigate } from "react-router-dom";

const ArticleCard = ({sample, title, id, author}) => {
  const navigate = useNavigate()


  const CardClick = () => {

    navigate(`/articlePage/${id}`)
  //   //here I will need to use History to push to a articlepage but I will also need the full articlepage to receive the id in params to search for the specific article
  }
  return (
    <div className = "ArticleCard" onClick = {CardClick} >
      <div className = "ProfileStuff">
        <div className = "ImageWrapper"></div>
        <div className = "UserTitle"><h3>{author}</h3></div>
      </div>
      <div className = "Sample">
        <h2>{title}</h2>
        <div className= "SampleTextWrapper"><p>{sample}</p></div>
        
      </div>

      
    </div>
  )
}

export default ArticleCard;


