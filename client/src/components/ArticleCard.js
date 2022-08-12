import React from 'react';
import '../css/articleCard.css';

const ArticleCard = () => {
  return (
    <div className = "ArticleCard">
      <div className = "Sample">
        <h2>Title</h2>
        <div className= "SampleTextWrapper"><p>Sample Text</p></div>
        
      </div>

      <div className = "ProfileStuff">
        <div className = "ImageWrapper"></div>
        <h3 className = "UserTitle">User</h3>
      </div>
    </div>
  )
}

export default ArticleCard;


