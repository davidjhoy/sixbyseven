import React from 'react';
import '../css/HighLightCard.css';
import { useNavigate } from "react-router-dom";
const HighLightCard = ({title, sample_text, id}) => {

  const navigate = useNavigate()


  const CardClick = () => {

    navigate(`/articlePage/${id}`)
  
  }
  return (
    <div className = "HighLightCardWrapper" onClick = {CardClick}>
        <div className = "HighLightCardTitle">
            {title}
        </div>
        <div className = "HighLightCardSubtitle">
            Subtitle
        </div>
        <div className = "HighLightCardText">
            {sample_text}
        </div>
    </div>
  )
}

export default HighLightCard;


