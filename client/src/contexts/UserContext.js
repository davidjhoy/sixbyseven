import React, { createContext, useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();

const UserProvider = ({children}) => {
    const [USERID, SETUSERID] = useState(null);
    const { user, isAuthenticated, isLoading } = useAuth0();

    
      useEffect(()=>{
        if(user){
        fetch(`http://localhost:3000/users`, {
        method: 'POST',
        body: JSON.stringify({
          "clientID": user["sub"],
          
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          },
        })
      .then((response) => response.json())
      .then((json) => SETUSERID(json.id))
      .catch(error => console.log('error', error))
      }
    },[user]
        
      )




    return (
        <UserContext.Provider
        value = {{USERID, SETUSERID}}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider}




