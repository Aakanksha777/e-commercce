import React from 'react'
import './Navbar.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg'


import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <div className='navbar-main'>
      <h2 className="leftside-navbar">TRENDY</h2>
      <div className="rightside-navbar">
        <div className="icon-list-navbar">

          <div className='wishlist-navbar'>
            <Link to="/"><AiOutlineHome /></Link>
          </div>

          <div className='wishlist-navbar'>
            <Link to="/product"><AiOutlineSearch /></Link>
          </div>

          <div className='wishlist-navbar'>
            <Link to="/wishlist"><AiOutlineHeart /></Link>
          </div>

          <div className='wishlist-navbar'>
            <Link to="/cart"><AiOutlineShoppingCart /></Link>
          </div>


          <div className='wishlist-navbar'>
            <Link to='/login'><CgProfile /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
