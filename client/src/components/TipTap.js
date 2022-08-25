import "../css/tiptap.css";
import Image from '@tiptap/extension-image'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, {useCallback, useState} from 'react'
import { FaBold, FaItalic, FaStrikethrough, FaCode, FaParagraph, FaArrowLeft, FaArrowRight, FaFileImage, FaQuoteLeft, FaCircle, FaSortNumericDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const MenuBar = ({ editor }) => {
  return (
    <>
    <IconContext.Provider value={{ className: "React-icons" }} >

      <button
      
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
       <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <FaStrikethrough />
      </button>
      
     
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
       <FaCircle/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
       <FaSortNumericDown/>
      </button>
     
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <FaQuoteLeft/>
      </button>
      
      
      <button onClick={() => editor.chain().focus().undo().run()}>
        <FaArrowLeft />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
      <FaArrowRight />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </button>
     
      </IconContext.Provider>

    </>
  )
}

export default () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const [ArticleTitle, setArticleTitle] = useState("")

  const handletitle = (e) =>{
    setArticleTitle(e.target.value)
  }
  const editor = useEditor({
    extensions: [
      StarterKit, Image
    ],
    content: `
   
   
      <h3>
        Your next great idea starts here ...
      </h3>
     
      
    `,
  })
  

  Image.configure({
    inline: true,
  })

  const addImage = useCallback(() => {
    const url = window.prompt('URL')
    console.log(url)
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  if (!editor) {
    return null
  }

  const CreateArticle = (response) =>{
    
    const json = editor.getJSON()
    const stringJ = JSON.stringify(json)
    const substance = editor.getText()
    const sample_text = substance.split(" ").slice(0,80).join(" ") + "..."

    
 
   fetch('http://localhost:3000/articles', {
     method: "POST",
     mode: 'cors',
     headers: {
         "Content-Type": "application/json",
       
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true 
         },
       body: JSON.stringify({
        "substance": substance,
        "sample_text": sample_text,
        "likes": 10,
        "tiptap": json,
        "title": ArticleTitle,
        "user_id":response.id,
        "ClientID": response.ClientID,
        "ImageUrl": response.image_url,
        "author": response.name
        
    }),
      redirect: "follow"
       })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      navigate('/home')
  }
 
  const PublishEvent = () => {
   
    fetch(`http://localhost:3000/users/${user.sub}`)
    .then(response => response.json())
    .then(res => IntermediateFetch(res))
    .catch(error => console.log('error', error));
          
      }

  const IntermediateFetch = (result) => {
    fetch(`http://localhost:3000/userc/${result[0].id}`)
        .then(response => response.json())
        .then(result => CreateArticle(result))
        .catch(error => console.log(error))
  }

     

  return (
    <div className = "TiptapWrap">

        <div className = "TipTapMenuWrap">
          <MenuBar editor={editor} className = "MenuItems" />
          <button onClick={addImage} className = "MenuItems"><FaFileImage/></button>
        
        </div>

        <div id = "TitleWrapper">
          <h3 >Title:</h3>
          <input type = "text" onChange = {handletitle} id = "TitleInput"/>
        </div>
        <EditorContent editor={editor} />
     

      <button id="TipTapPublish" onClick={PublishEvent}>Publish</button>
    </div>
  )
}