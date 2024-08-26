import React from 'react'
import "../styles/abouthero.css"
import facebook from "../img/facebook.png"
import linkedin from "../img/linkedin.png"
import github from "../img/github.png"
import instagram from "../img/instagram.png"
import { NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function AboutHero() {
  return (
    <div className='abouthero'>
      <div className="abouthero__wrapper">
        <div className="about__content">
            <div className="content__top">
                <p>Hey, My Name is VAFOYEV SAYIDORIFXON 🙎, and I'm a 17 years old uzbek web developer💻. I started my learning juerney a year years a go ⏳. I have Learned a lot of stuff during this period.
                including Web Development(Front-end 🎨)
                Now I'm Working with React framework ⚛ for the front-end </p>
            </div>
            <div className="content__bottom">
                <p>you can reach me at</p>
                <div className="socials">
                    <NavLink target='_blank' to={"https://www.facebook.com/"}><img src={facebook} alt="" /></NavLink>
                    <NavLink target='_blank' to={"https://www.linkedin.com/"}><img src={linkedin} alt="" /></NavLink>
                    <NavLink target='_blank' to={"https://www.github.com/"}><img src={github} alt="" /></NavLink>
                    <NavLink target='_blank' to={"https://www.instagram.com/"}><img src={instagram} alt="" /></NavLink>   
                </div>
            </div>
        </div>
        <div className="about__image">
        </div>
        <div className="bouncing__arrow">
        <MdOutlineKeyboardArrowDown className='arrow' />

        </div>
      </div>
    </div>
  )
}

export default AboutHero
