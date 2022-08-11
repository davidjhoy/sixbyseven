import React from 'react';
import '../css/profile.css';


const Profile = () => {
  return (
    <div className='Profile-container'>
      <div className = 'Profile-header'>
        <p>header</p>
      </div>

      <div className='Profile-body'>
        <p>body</p>
        <section className='Profile-body-section'>
          
        </section>
      </div>

      <div className='Profile-footer'>
        <p className = "Footer-text">Copyright David Hoy 2022</p>
      </div>
    </div>
  )
}

export default Profile;