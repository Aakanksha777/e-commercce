import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';

const RequiresAuth = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      {user.token ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}

export default RequiresAuth
