import React, {useState, useEffect} from 'react';
import Navbar   from './Navbar';
import "../css/Profile.css";
import ArticleCard from './ArticleCard';
import { useAuth0 } from '@auth0/auth0-react';
import {DirectUpload} from 'activestorage';

const Profile = () => {
    const [profiles, SetProfiles] = useState("")
    const [profileImage, SetProfileImage] = useState("")
    const [userId, SetUserId] = useState("")
    const [profilePhoto, SetProfilePhoto] = useState("")

    const { user, isAuthenticated, isLoading } = useAuth0();

    const parseResult = (result) =>{
        SetProfiles(result)
    }
    // if (user != undefined){ 
       
    //     fetch(`http://localhost:3000/profiles/${user["sub"]}`)
            
    //     .then(response => response.json())
    //     .then(result => parseResult(result))
    //     .catch(error => console.log('error', error));

    
        
    // }
    

    useEffect(()=>{
        fetch(`http://localhost:3000/userc/6`)
            
        .then(response => response.json())
        .then(result => setProfilePhoto(result))
        .catch(error => console.log('error', error));

    },[])
    
   



    const upLoadFile = (e) =>{
        
       e.preventDefault()
        const upload = new DirectUpload(profileImage, 'http://localhost:3000/rails/active_storage/direct_uploads')
     
        upload.create((error, blob)=>{
            if(error){
                console.log(error)
            } else {
               
                fetch(`http://localhost:3000/users/6`, {
                     method: "PATCH",
                     mode: 'cors',
                     headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin" : "*", 
                        "Access-Control-Allow-Credentials" : true 
                         },
                     body: JSON.stringify({image: blob.signed_id}),
                     redirect: "follow"
                       })
                      .then(response => response.json())
                      .then(result => setProfilePhoto(result))
                      .catch(error => console.error(error));
            }
        }
        )
    }
    
   

    const makeProfiles = () =>{
        return profiles.map( article=>{
            // <ArticleCard id = {article.title} sample = {article.sample_text} title = {article.title} />
         
          return <ArticleCard className = "Profile-article-card" title = {article.title} key = {article.title} id = {article.id} sample = {article["sample_text"]} author = {article["author"]}/>
        })
    }

    const handleImageChange = (e) => {
        SetProfileImage(e.target.files[0])
    }

    const setProfilePhoto = (data)=>{
        SetProfilePhoto(data.image_url)
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
                <div className = "ImageWrapper"><img src ={profilePhoto} id="ProfilePhoto"/></div>
                <h2 id = "RightWrapperTitle">Upload Photo</h2>
                <form onSubmit = {(e)=> upLoadFile(e)} >
                <input type = "file" name = "image" id = "image"  onChange = {handleImageChange}/>
                <button type ="submit" id = "PhotoSubmit">Submit Photo</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Profile;


