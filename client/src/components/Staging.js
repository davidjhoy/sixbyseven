import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Login   from './Login';
const Staging = () => {
    const { isAuthenticated } = useAuth0();
    console.log(isAuthenticated)
  return (
    <><div>Staging</div>
    <Login /></>
    
  )
}

export default Staging;