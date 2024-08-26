import React from 'react'
import "../styles/offer.css"
import img1 from '../img/offer1.png'
import img2 from '../img/offer2.png'
import img3 from '../img/offer3.png'
function Offer() {
  return (
    <div className='offer'>
      <p>what's I'm offering</p>
      <ul>
        <li>
          <img src={img1} alt="" />
          <p>Fast Delivery</p>
          <h4>I will deliver your product as soon as possible 🚀.</h4>
        </li>
        <li>
          <img src={img2} alt="" />
          <p>Fast Delivery</p>
          <h4>I will deliver your product as soon as possible 🚀.</h4>
        </li>
        <li>
          <img src={img3} alt="" />
          <p>Fast Delivery</p>
          <h4>I will deliver your product as soon as possible 🚀.</h4>
        </li>
      </ul>
    </div>
  )
}

export default Offer
