import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="Logout"
      onClick={() =>
        logout({
          returnTo: "http://localhost:3000/home",
        })
      }
    >
      Log Out
    </button>
  );
};

export default Logout;