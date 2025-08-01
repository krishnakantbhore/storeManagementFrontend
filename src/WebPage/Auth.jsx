import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

 

export default function Auth({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>{children }</AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}

 
