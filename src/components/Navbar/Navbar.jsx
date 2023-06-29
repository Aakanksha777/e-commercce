import React from 'react'
import './Navbar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Navbar = () => {
  return (
    <div className='navbar-main'>

      <h2 className="leftside-navbar">TRENDY</h2>

      <div className="center-navbar">
        <input className="search-bar" placeholder='Search Product...'/>

      </div>
      <div className="rightside-navbar">
        <div className="icon-list-navbar">
            <div className='wishlist-navbar'>
                <FavoriteIcon htmlColor='white'/>
            </div>
            <div className='wishlist-navbar'>
                <ShoppingCartIcon htmlColor='white'/>
            </div>
            <div className='wishlist-navbar'>
                <AccountCircleRoundedIcon htmlColor='white'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
