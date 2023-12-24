import { createContext, useState } from "react";

const ADMIN_USER = 'Admin';

export const UserContext = createContext();

export function UserProvider({ children }){
    const [user, setUser] = useState('');

    const signIn = () => setUser({name: ADMIN_USER});
    const signOut = () => setUser({name: ''});

    return (
        <UserContext.Provider value={{user, isLoggedIn: user.name === ADMIN_USER, setUser, signIn, signOut}}>
            {children}
        </UserContext.Provider>
    );
}