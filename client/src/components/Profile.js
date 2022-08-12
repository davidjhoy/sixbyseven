import React from 'react';
import Tiptap from './TipTap';
import '../css/profile.css';
import Logout from './Logout';


const Profile = () => {
  return (
    <div className='Profile-container'>
      <div className = 'Profile-header'>
        <p>header</p>
        <Logout />
      
      </div>

      <div className='Profile-body'>
     
        <section className='Profile-body-section'>
          <Tiptap className="tiptap"/>
          
        </section>
      </div>

      <div className='Profile-footer'>
        <p className = "Footer-text">Copyright David Hoy 2022</p>
      </div>
    </div>
  )
}

export default Profile;