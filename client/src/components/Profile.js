import React from 'react';
import Navbar   from './Navbar';
import "../css/Profile.css";
import ArticleCard from './ArticleCard';

const Profile = () => {
  return (
    <div>
        <Navbar/>
        <div className = "ProfileBodyWrapper">
            <div className = "LeftSideWrapper">
                <h2 id = "LeftSideTitle">Favorited Articles</h2>
            </div>
            <div className = "CenterWrapper">
                <h2 id = "CenterWrapperTitle">Your Articles</h2>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
            <div className = "RightSideWrapper">
                <h2 id = "RightWrapperTitle">Your Fans</h2>
            </div>
        </div>
    </div>
  )
}

export default Profile;


