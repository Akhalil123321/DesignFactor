import React from 'react'
import "./Hero.css"
import point from "../../Images/Logo/part5.png"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-about-us main-title small'>
        <img src={point} alt='' className='hero-about-us-point main-title'/> 
        <span>MORE ABOUT US</span>
      </div>
      <div className='hero-about-us-name main-title large'>DESIGN FACTOR</div>
      <div className='hero-about-us-container'>
        <div className='hero-about-us-content1'>
          <span>Image 360</span>
          <div className='hero-circle-360'><span>Image 360</span></div>
        </div>
        <div className='hero-about-us-content2'>
          <span>Description</span>
        </div>
      </div>
    </div>
  )
}

export default Hero