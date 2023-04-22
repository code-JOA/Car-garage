import React from 'react'
import './NavBar.css'

import logo from '../../Assets/logo1.png'


import { IoIosCloseCircle } from 'react-icons/io'
import { TbGridDots } from 'react-icons/tb'

const NavBar = () => {
    return (
        <div className='header'>
        <div className='logoDiv'>
            <img src={logo} alt='Logo Image' className='logo'>
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

            <IoIosCloseCircle className='icon closeIcon' />

        </div>
        
        <div className="signUp flex">
            <div className="text">Sign Up</div>
            <TbGridDots className='icon toggleNavbar'/>

        </div>


        </div>
)
}

export default NavBar