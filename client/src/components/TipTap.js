import "../css/tiptap.css";
import Image from '@tiptap/extension-image'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, {useCallback} from 'react'
import { FaBold, FaItalic, FaStrikethrough, FaCode, FaParagraph, FaArrowLeft, FaArrowRight, FaFileImage, FaQuoteLeft, FaCircle, FaSortNumericDown } from "react-icons/fa";
import { IconContext } from "react-icons";

const MenuBar = ({ editor }) => {
  
  
  


  return (
    <>
    <IconContext.Provider value={{ className: "React-icons" }}>

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
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <FaCode />
      </button>
      
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <FaParagraph />
        
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
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
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
      </IconContext.Provider>

    </>
  )
}

export default () => {
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
  

 
  const PublishEvent = () => {
    // fetch('http://localhost:3000/articles', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers:{'Content-Type': 'application/json',
    //   Accept: "application/json",
    // },
    //   body: JSON.stringify({
    //     substance: "hello",
    //     user_id: 1
    //   })
    // })
    
    //   .then(response => {
    //     if(response.ok){
         
    //       response.json().then(() => {
    //         console.log("hello")
    //     }

      // )}})
      const json = editor.getJSON()
      const stringJ = JSON.stringify(json)
      console.log(stringJ)

      const substance = editor.getText()
      const sample_text = substance.split(".").slice(0,3).join(". ") + "..."

      console.log(substance)
   
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
          "title": "Adventures at Hogwarts",
          "user_id":1
          
      }),
        redirect: "follow"
         })
         
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    // 
          
      }
    

  

  return (
    <div className = "TiptapWrap">

      <div>
      <MenuBar editor={editor} />
      <button onClick={addImage}><FaFileImage/></button>
      <EditorContent editor={editor} />
      </div>

      <button className="TipTapPublish" onClick={PublishEvent}>Publish</button>
    </div>
  )
}