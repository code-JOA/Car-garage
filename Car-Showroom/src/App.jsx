import React from 'react'
import './App.css'

import NavBar from './Components/NavBar/NavBar'

// import Auction from './Components/Auction/Auction'


const App = () => {
  return (
    <div className='title'>
      {/* <Auction/> */}
      <NavBar />
      <Home />
      <Search />
      <Trending />
      <Sellers />
      <Auction />
      <Review />
      <Footer />




      
    </div>
  )
}

export default App