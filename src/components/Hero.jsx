import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../img/illistration.1f485184.png'
import "../styles/hero.css"
function Hero() {
  return (
    <div className='hero'>
      <div className="container">
        <div className="hero__wrapper">
            <div className="content">
            <h1>Have an <span>idea</span> in mind<span>?</span></h1>
                <h1> <span>Let's</span> make it <span>Happen</span>🚀</h1>
                <div className="hero__cta">
                    <NavLink to="/contact">Hire Me</NavLink>
                    <NavLink to="/about">About Me</NavLink>
                </div>
            </div>
            <div className="image">
                <img src={img} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
