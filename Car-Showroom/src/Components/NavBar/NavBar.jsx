import React, { useState } from 'react'
import './NavBar.css'

import logo from '../../Assets/logo1.png'


import { IoIosCloseCircle } from 'react-icons/io'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {

    // statement to hold Navbar
    const [navbar, setNavbar] = useState('navbar')
    
    // function to show Navbar on small screens
    const showNavbar = () => {
            setNavbar('navbar showNavbar')}

    // function to remove Navbar on small screens
    const removeNavbar = () => {
            setNavbar('navbar')
    }

    // function for Navbar on scroll
    const [header, setHeader] = useState('header')
    const addBg = () => {
        if (window.screenY >= 20){
            setHeader('header addBg')
       }
    }      
    window.addEventListener('scroll')

    return (
        <div className={header}>
        <div className='logoDiv'>
            <img src={logo} alt='Logo Image' className='logo'>
            </img>
        </div>

        <div className={navbar}>
            <ul className="menu">
                <li onClick={removeNavbar} className="listItem">
                    <a href="/" className="link">Used Cars</a>
                </li>

                <li onClick={removeNavbar} className="listItem">
                    <a href="/" className="link">New Cars</a>
                </li>

                <li onClick={removeNavbar} className="listItem">
                    <a href="/" className="link">Auctions</a>
                </li>

                <li onClick={removeNavbar} className="listItem">
                    <a href="/" className="link">Sell</a>
                </li>
            </ul>

            <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar} />

        </div>
        
        <div className="signUp flex">
            <div className="text">Sign Up</div>
            <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar} />

        </div>


        </div>
)
}

export default Navbar