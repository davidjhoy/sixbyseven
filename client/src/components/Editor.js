import React from 'react';
import Tiptap from './TipTap';
import '../css/editor.css';
import Logout from './Logout';
import Navbar from './Navbar';
import { EditorContent, useEditor, editor } from '@tiptap/react'



const Editor = () => {
  

  


  return (
    <>
    <Navbar /> 
    
    <div className='Profile-container'>
      

      <div className='Profile-body'>
     
        <div className='Profile-body-section'>
          <Tiptap className="tiptap"/>
          
        </div>
        {/* <div id = "SubmitButton" onClick = {PublishEvent}>Publish</div> */}
      </div>
      

      
    </div>
    </>
  )
}

export default Editor;