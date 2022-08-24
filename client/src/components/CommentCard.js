import React, { useEffect, useState } from 'react';
import '../css/CommentCard.css'

const CommentCard = ({CommentText, UserID}) => {
  const [UserName, SetUserName] = useState("")


  const parseResult = (result) =>{
    SetUserName(result.name)
   
  }
  useEffect(()=>{
    fetch(`http://localhost:3000/userc/${UserID}`)
        
       .then(response => response.json())
       .then(result => parseResult(result))
       .catch(error => console.log('error', error));
  },[])
  return (
    <div className = "CommentCardWrapper">
        <div className = "UserName">
            {UserName}
        </div>
        <div>
        {CommentText}
        </div>
    </div>
  )
}

export default CommentCard;

