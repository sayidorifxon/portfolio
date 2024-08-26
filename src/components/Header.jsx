import React from 'react'
import "../styles/header.css"
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className='header'>
        <div className="header__container">
            <div className="header__wrapper">
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/contact">ContactUs</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
