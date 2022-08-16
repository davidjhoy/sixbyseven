import React from 'react';
import '../css/articleCard.css';

const ArticleCard = ({sample, title}) => {
  return (
    <div className = "ArticleCard">
      <div className = "Sample">
        <h2>{title}</h2>
        <div className= "SampleTextWrapper"><p>{sample}</p></div>
        
      </div>

      <div className = "ProfileStuff">
        <div className = "ImageWrapper"></div>
        <h3 className = "UserTitle">User</h3>
      </div>
    </div>
  )
}

export default ArticleCard;


