import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from "react";
import { AuthContext } from '../context/AuthContext';

const RequiresAuth = () => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(AuthContext)

  return (
    <>
      {user.token ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}

export default RequiresAuth
