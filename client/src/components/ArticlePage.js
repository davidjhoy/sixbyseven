
// import { generateHTML } from '@tiptap/html'
import React, { useMemo, useNavigate, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Bold from '@tiptap/extension-bold'
import { generateHTML } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'


const ArticlePage = ({id}) => {
 
  const [output, setOutput] = useState("")
  
  //useEffect that will fetch a specific tiptap based on the id provided and save the data to "json"

  let params = useParams()
  
  const parseResult = (result) => {
    
    
    setOutput(generateHTML(JSON.parse(result)["tiptap"], [
      Document,
      Paragraph,
      Text,
      Bold,
      Heading,
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




 


  
  
   
  
  
  const renderer = (input) => {
    return 
  }


  return (
    <>
      <div className = "Article-Page-Container">
      {output ? <div dangerouslySetInnerHTML={{ __html: output }}>
         </div> : <p>Loading...</p>}
      </div>
      
    </>
  )
}

export default ArticlePage;

