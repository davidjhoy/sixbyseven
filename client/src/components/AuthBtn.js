import React, {useState} from 'react';

import Login from './Login';
import Logout from './Logout';

import { useAuth0 } from '@auth0/auth0-react';

const AuthBtn = () => {

  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated)

  return isAuthenticated ? <Logout /> : <Login />;
};

export default AuthBtn;