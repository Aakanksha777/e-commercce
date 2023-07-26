import React, { useContext } from 'react'
import './Navbar.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const Navbar = () => {
  const { user, setUser } = useContext(AuthContext)

  const handleLogout = () => {
    setUser({})
    localStorage.removeItem("user")
    localStorage.setItem("cart", JSON.stringify([]))
    localStorage.setItem("wishlist", JSON.stringify([]))
  }

  return (
    <div className='navbar-main'>
      <Link to="/" className="leftside-navbar">TRENDY</Link>
      <div className="rightside-navbar">
        <div className="icon-list-navbar">
          <div className='navbar-items-box'>
            <Link to="/category/0" className='navbar-items'><AiOutlineSearch /></Link>
            <Link to="/wishlist" className='navbar-items'><AiOutlineHeart /></Link>
            <Link to="/cart" className='navbar-items'><AiOutlineShoppingCart /></Link>
          </div>
          <div className='navbar-items'>
            {user.email ?
              <span onClick={handleLogout}>Log out</span>
              :
              <span >
                <Link to='/login' className='links'>Log in</Link>
              </span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
