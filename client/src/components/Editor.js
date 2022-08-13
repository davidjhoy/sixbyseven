import React from 'react';
import Tiptap from './TipTap';
import '../css/profile.css';
import Logout from './Logout';
import Navbar from './Navbar';



const Editor = () => {
  return (
    <>
    <Navbar /> 
    
    <div className='Profile-container'>
      

      <div className='Profile-body'>
     
        <div className='Profile-body-section'>
          <Tiptap className="tiptap"/>
          
        </div>
      </div>

      
    </div>
    </>
  )
}

export default Editor;