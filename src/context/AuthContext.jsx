import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const AuthContext = createContext() //create context

export function AuthProvider({ children }) {
    const [user, setUser] = useState({})

    useEffect(() => {
        console.log(user)
    }, [user])

    useEffect(() => {
        const userExist = JSON.parse(localStorage.getItem("user"))
        userExist && setUser(userExist)
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
};

