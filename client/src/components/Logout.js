import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const {
    
    logout
  } = useAuth0();

  return  (
    <button onClick={() => {
      logout({ returnTo: "http://localhost:4000/" });
    }}>Log out</button>
  );
}

export default LogoutButton;