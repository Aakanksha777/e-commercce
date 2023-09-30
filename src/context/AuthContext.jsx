import React, { useEffect, createContext, useState } from "react";

export const AuthContext = createContext(); //create context

export function AuthProvider({ children }) {
  // State to hold user information
  const [user, setUser] = useState({});

  //every time user render, it will console.log(user);
  useEffect(() => {
    console.log(user);
  }, [user]);

  // Load user information from local storage
  useEffect(() => {
    const userExist = JSON.parse(localStorage.getItem("user"));
    userExist && setUser(userExist);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
