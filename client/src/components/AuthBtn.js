import React, {useState} from 'react';

import Login from './Login';
import Logout from './Logout';

import { useAuth0 } from '@auth0/auth0-react';

const AuthBtn = () => {

  const { isAuthenticated } = useAuth0();


  const ChooseAuth = (isAuthenticated) =>{
    if (isAuthenticated == false){
        return <Login />
    } else {return  <Logout /> }
  }

  return (
    ChooseAuth()
  )
};

export default AuthBtn;