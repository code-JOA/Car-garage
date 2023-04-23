import React from 'react'
import './Trending.css'

import { BsArrowRightShort } from "react-icons/bs"
import { BsArrowLeftShort } from 'react-icons/bs'

const Trending = () => {
  return (
    <div className="trending section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Trending Near You
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon rightIcon' />
          </div>
        </div>
        <div className="carContainer">
          
        </div>
      </div>
    </div>
  );
}

export default Trending