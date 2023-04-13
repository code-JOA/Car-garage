import React from 'react'
import './NavBar.css'

import logo from '../../Assets/logo.png'


const NavBar = () => {
  return (
    <div className='header'>
        <div className='logoDiv'>
            <img src={logo} alt='' className='Logo Image'>
            </img>
        </div>

        <div className="navbar">
            <ul className="menu">
                <li className="listItem">
                    <a href="/" className="link">Used Cars</a>
                </li>

                <li className="listItem">
                    <a href="/" className="link">New Cars</a>
                </li>

                <li className="listItem">
                    <a href="/" className="link">Auctions</a>
                </li>

                <li className="listItem">
                    <a href="/" className="link">Sell</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar