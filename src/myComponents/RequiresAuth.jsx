import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from "react";
import { AuthContext } from '../context/AuthContext';

const RequiresAuth = () => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(AuthContext)

  useEffect(() => {
    const userExist = JSON.parse(localStorage.getItem("user"))
    if (userExist) {
      setUser(userExist)
      navigate("/")
    }
  }, [])

  return (
    <>
      {Object.keys(user).length > 0 ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}

export default RequiresAuth
