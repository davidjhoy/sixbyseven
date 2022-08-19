import React from 'react';
import '../css/CommentCard.css'

const CommentCard = ({CommentText, UserID}) => {
  return (
    <div className = "CommentCardWrapper">
        <div>
            {UserID}
        </div>
        <div>
        {CommentText}
        </div>
    </div>
  )
}

export default CommentCard;

