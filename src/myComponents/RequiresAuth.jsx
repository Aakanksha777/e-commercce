import React from 'react'
// import { Navigate } from 'react-router-dom'

const RequiresAuth = ({children,  isLoggedIn}) => {
  return isLoggedIn ? children : null
}

export default RequiresAuth
