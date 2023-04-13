import React from 'react'
import './App.css'

import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Trending from './Components/Trending/Trending'
import Sellers from './Components/Sellers/Sellers'
import Auction from './Components/Auction/Auction'
import Review from './Components/Review/Review'
import Footer from './Components/Footer/Footer'


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