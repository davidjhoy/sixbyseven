import React, {useState, useEffect, useContext, useRef} from 'react';
import Navbar   from './Navbar';
import "../css/Profile.css";
import ArticleCard from './ArticleCard';
import { useAuth0 } from '@auth0/auth0-react';
import {DirectUpload} from 'activestorage';
import { GiBlackHandShield } from 'react-icons/gi';


const Profile = () => {
    const [profiles, SetProfiles] = useState("")
    const [profileImage, SetProfileImage] = useState("")
    const [userId, SetUserId] = useState("")
    const [profilePhoto, SetProfilePhoto] = useState("")
    const effectRan = useRef(false)
    
    const { user, isAuthenticated, isLoading } = useAuth0();

    // This is the initial call to find the user id
    if(user){

        fetch(`http://localhost:3000/users/${user["sub"]}`)
        .then(response => response.json())
        .then(result => HandleInitialFetch(result))
        .catch(error => console.log(error))

        

    }


    //Storing the userId in state and fetching the appropriate articles for the user
   const HandleInitialFetch = (result) => {
        SetUserId(result[0].id)
        
        fetch(`http://localhost:3000/userc/${result[0].id}`)
        .then(response => response.json())
        .then(result => SetProfilePhoto(result.image_url))
        .catch(error => console.log(error))
        
        // if(profiles){
        //     return null;
        // }
        // else if(profiles.length == 0){
        //     fetch(`http://localhost:3000/profiles/${result[0].id}`)
        //     .then(response => response.json())
        //     .then(result => console.log(result))
        //     .catch(error => console.log(error))
        // }
        // else{ 
        
    // }
       
    }
   
    //this is me trying to avoid constant Get requests using a useEffect
    useEffect(()=>{
        
            fetch(`http://localhost:3000/articles`)
            .then(response => response.json())
            .then(result => SetProfiles(result))
            .catch(error => console.log(error))
        
       
    },[])

    const upLoadFile = (e) =>{
        
       e.preventDefault()
        const upload = new DirectUpload(profileImage, 'http://localhost:3000/rails/active_storage/direct_uploads')
     
        upload.create((error, blob)=>{
            if(error){
                console.log(error)
            } else {
               
                fetch(`http://localhost:3000/users/${userId}`, {
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
    const setProfilePhoto = (data)=>{
        SetProfilePhoto(data.image_url)
    }
   
    const handleImageChange = (e) => {
        SetProfileImage(e.target.files[0])
    }


    //render the profile cards
    const makeProfiles = () =>{
        if(profiles){
            return profiles.map( article=>{
                // <ArticleCard id = {article.title} sample = {article.sample_text} title = {article.title} />
             if (article.user_id == userId){
              return <ArticleCard className = "Profile-article-card" title = {article.title} key = {article.title} id = {article.id} sample = {article["sample_text"]} author = {article["author"]}/>
             }
            })
        }
        
    }
    console.log(userId)
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
                <div className = "ImageWrapper">{profilePhoto ? <img src ={profilePhoto} id="ProfilePhoto"/> : <p>...</p>}</div>
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


