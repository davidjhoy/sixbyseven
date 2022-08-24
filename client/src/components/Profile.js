import React, {useState, useEffect} from 'react';
import Navbar   from './Navbar';
import "../css/Profile.css";
import ArticleCard from './ArticleCard';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const [profiles, SetProfiles] = useState("")
    const [profileImage, SetProfileImage] = useState("")

    const { user, isAuthenticated, isLoading } = useAuth0();

    const parseResult = (result) =>{
        SetProfiles(result)
    }
    if (user != undefined){ 
        fetch(`http://localhost:3000/profiles/${user["sub"]}`)
            
           .then(response => response.json())
           .then(result => parseResult(result))
           .catch(error => console.log('error', error));
    }

    const SendToRails = (data) => {
    //     fetch('http://localhost:3000/users', {
    //  method: "PATCH",
    //  mode: 'cors',
    //  headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin" : "*", 
    //     "Access-Control-Allow-Credentials" : true 
    //      },
    //  body: data,
    //  redirect: "follow"
    //    })
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.error(error));
    console.log(data)
    }

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        console.log(e.target.image.value)
        SetProfileImage(e.target.image.value)
    }

    
   

    const makeProfiles = () =>{
        return profiles.map( article=>{
            // <ArticleCard id = {article.title} sample = {article.sample_text} title = {article.title} />
         
          return <ArticleCard className = "Profile-article-card" title = {article.title} key = {article.title} id = {article.id} sample = {article["sample_text"]} author = {article["author"]}/>
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
                <div className = "ImageWrapper"><img src ={profileImage}/></div>
                <h2 id = "RightWrapperTitle">Upload Photo</h2>
                <form onSubmit = {(e)=> handleSubmit(e)} >
                <input type = "file" name = "image" id = "AvatarUpload" />
                <button type ="submit" id = "PhotoSubmit">Submit Photo</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Profile;


