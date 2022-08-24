import { createContext, useState, useMemo } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
    const [USERID, SETUSERID] = useState("");


const value = useMemo( 
    () => ({USERID, SETUSERID}), [USERID])

    return (
        <UserContext.Provider
        value = {value}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider}




