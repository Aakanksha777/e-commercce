import React from 'react'
import "./Popup.css"
const Popup = ({ children }) => {
  return (
    <div className='notifcation-popup'>
      {children}
    </div>
  )
}

export default Popup
