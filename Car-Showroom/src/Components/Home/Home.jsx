import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div className='home'>
        <div className="secContainer">
          <div className="homeText">
            <span className="homeSpan">
              Meet your new car
            </span>
            <h1 className='homeTitle'>
              Honda Civic Type R
            </h1>
            <div className="btn flex">
              <button className="btn">More Details</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home