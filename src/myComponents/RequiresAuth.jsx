import { Navigate, Outlet } from 'react-router-dom'

const RequiresAuth = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default RequiresAuth
