import React, {useHistory} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Login   from './Login';
import '../css/staging.css'



const Staging = () => {
    const { isAuthenticated } = useAuth0();
    const {
   
      loginWithRedirect
    } = useAuth0();
  return (
    
    <div className='Staging-container'>
      <div id = "Welcome">Welcome</div>
      <h3 id = "WelcomeClick" onClick = {loginWithRedirect}>Click here to get started</h3>

      
    </div>
    
    
    
  )
}

export default Staging;