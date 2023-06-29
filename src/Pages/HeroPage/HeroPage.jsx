import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing'
import NewCollection from '../../components/NewCollection/NewCollection'
// import Footer from '../../components/Footer/Footer'

const HeroPage = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <NewCollection/>
      {/* <Footer/> */}
      
    </div>
  )
}

export default HeroPage
