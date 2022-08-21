import React, {useState, useEffect} from 'react';
import Navbar   from './Navbar';
import "../css/Profile.css";
import ArticleCard from './ArticleCard';

const Profile = () => {
    const [profiles, SetProfiles] = useState("")
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

    const parseResult = (result) =>{
        SetProfiles(result)
    }
    useEffect(()=>{  
        fetch(`http://localhost:3000/profiles/${clientId}`)
            
           .then(response => response.json())
           .then(result => parseResult(result))
           .catch(error => console.log('error', error));
   
       
     },[])

    const makeProfiles = () =>{
        return profiles.map( article=>{
            // <ArticleCard id = {article.title} sample = {article.sample_text} title = {article.title} />
         
          return <ArticleCard className = "Profile-article-card" title = {article.title} key = {article.title} id = {article.id}/>
        })
    }
    return (

    <div>
        <Navbar/>
        <div className = "ProfileBodyWrapper">
            <div className = "LeftSideWrapper">
                <h2 id = "LeftSideTitle">Favorited Articles</h2>
            </div>
            <div className = "CenterWrapper">
                <h2 id = "CenterWrapperTitle">Your Articles</h2>
                {profiles ? makeProfiles() : <p>Loading...</p>}
            </div>
            <div className = "RightSideWrapper">
                <h2 id = "RightWrapperTitle">Your Fans</h2>
            </div>
        </div>
    </div>
  )
}

export default Profile;


