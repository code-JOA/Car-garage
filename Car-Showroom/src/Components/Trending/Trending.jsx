import React from 'react'
import './Trending.css'

import { BsArrowRightShort } from "react-icons/bs"
import { BsArrowLeftShort } from 'react-icons/bs'

const Trending = () => {
  return (
    <div className="trending section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Trending Near You</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="carContainer">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src="" alt="carImage" />
              <h5 className="carTitle">
                Used Hyundai Type R
              </h5>
              <span className="miles">
                1000 miles only
              </span>
              <span className="AWD">

              </span>

              <div className="priceSeller flex">
                <span className="price">
                  $21,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending