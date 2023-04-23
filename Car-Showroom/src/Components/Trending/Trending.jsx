import React from 'react'
import './Trending.css'

import { BsArrowRightShort } from "react-icons/bs"
import { BsArrowLeftShort } from 'react-icons/bs'

import car6 from '../../Assets/car6.jpg'
import car4 from '../../Assets/car4.jpg'
import car7 from "../../Assets/car7.png";


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
          {/* // single car div */}
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car6} alt="carImage" />
              <h5 className="carTitle">Used Audi RS6 Avant</h5>
              <span className="miles">1000 miles only</span>
              <span className="AWD"></span>

              <div className="priceSeller flex">
                <span className="price">$21,000</span>
                <span className="seller">Best Seller</span>
              </div>
            </div>
          </div>
        </div>

        <div className="carContainer">
          {/* // single car div 2 */}
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car4} alt="carImage" />
              <h5 className="carTitle">Mercedes Sports</h5>
              <span className="miles">100 miles only</span>
              <span className="AWD"></span>

              <div className="priceSeller flex">
                <span className="price">$120,000</span>
                <span className="seller">Best Seller</span>
              </div>
            </div>
          </div>
        </div>

        <div className="carContainer">
          {/* // single car div 3 */}
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car7} alt="carImage" />
              <h5 className="carTitle">G-wagon</h5>
              <span className="miles">1000 miles only</span>
              <span className="AWD"></span>

              <div className="priceSeller flex">
                <span className="price">$1,000</span>
                <span className="seller">Best Seller</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Trending