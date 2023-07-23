import React, { useContext } from 'react'
import './Navbar.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartAndWishlistContext } from '../../context/CartAndWishlist';


const Navbar = () => {
  const { user, setUser } = useContext(AuthContext)
  const { setCart, setWishlist } = useContext(CartAndWishlistContext)

  const handleLogout = () => {
    setUser({})
    setCart([])
    setWishlist([])
    localStorage.removeItem("user")
    localStorage.removeItem("cart")
    localStorage.removeItem("wishlist")
  }

  return (
    <div className='navbar-main'>
      <Link to="/" className="leftside-navbar">TRENDY</Link>
      <div className="rightside-navbar">
        <div className="icon-list-navbar">
          <div className='navbar-items'>
            <Link to="/category/0"><AiOutlineSearch /></Link>
          </div>
          <div className='navbar-items'>
            <Link to="/wishlist"><AiOutlineHeart /></Link>
          </div>
          <div className='navbar-items'>
            <Link to="/cart"><AiOutlineShoppingCart /></Link>
          </div>
          <div className='navbar-items'>
            {user.email ?
              <span onClick={handleLogout}>Log out</span>
              :
              <span className='links'>
                <Link to='/login'>Log in</Link>
              </span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
