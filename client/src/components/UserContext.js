import { createContext, useState } from "react";


const UserContext = createContext();

export function UserProvider({children}){
    return(
        <UserContext.Provider value = {{client: 123}}>
            {children}
        </UserContext.Provider>
    )
}