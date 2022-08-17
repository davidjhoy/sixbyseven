
// import { generateHTML } from '@tiptap/html'
import React, { useMemo, useNavigate, useEffect, useState } from 'react';
import Navbar from "./Navbar";
import { useParams } from 'react-router-dom'
import Bold from '@tiptap/extension-bold'
import { generateHTML } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'
import '../css/ArticlePage.css'


const ArticlePage = ({id}) => {
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
 
  const [output, setOutput] = useState("")
  const [Rank, setRank] = useState("")
  const [likes, setLikes] = useState("")
  
  //useEffect that will fetch a specific tiptap based on the id provided and save the data to "json"

  let params = useParams()
  
  const parseResult = (result) => {
    
  
    setLikes(JSON.parse(result)["likes"])
    setRank(JSON.parse(result)["Rank"])
    setOutput(generateHTML(JSON.parse(result)["tiptap"], [
      Document,
      Paragraph,
      Text,
      Bold,
      Heading,
      Image
      // other extensions …
    ]))
  } 

  useEffect(()=>{  
    
    
    fetch(`http://localhost:3000/articles/${params.id}`)
        
       .then(response => response.text())
       .then(result => parseResult(result))
       .catch(error => console.log('error', error));
 },[]
 
  
 )


 const LadyBug = () => {
  setLikes(likes+ 1)
  const Likes = likes + 1
  setRank(Rank + 1)
  const Rankk = Rank + 1
  console.log(Likes)
  //here I need to do an update fetch!
  fetch(`http://localhost:3000/articles/${params.id}`, {
  method: 'PATCH',
  body: JSON.stringify({
    "likes": Likes,
    "Rank": Rankk
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
    
  const renderer = (input) => {
    return 
  }

  console.log(clientId)
  return (
    <>
    <Navbar />
    <div className =  "PageWrapper">
      <div><h1>Title Goes Here</h1></div>
      <div className = "Article-Page-Container">
      {output ? <div dangerouslySetInnerHTML={{ __html: output }}>
         </div> : <p>Loading...</p>}
      </div>
      <div className = "CheersContainer">
        <p onClick={LadyBug}>🐞</p>
        <p>{likes}</p>
      </div>
      
    </div>
    </>
  )
}

export default ArticlePage;

