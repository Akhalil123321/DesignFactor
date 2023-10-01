import {React, useState} from 'react'
import "./Hero.css"
import point from "../../Images/Logo/part5.png"

const Hero = () => {
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseMove = (e) => {
    const circle = document.getElementById('circle-360');
    const boundingBox = circle.getBoundingClientRect();
    const centerX = boundingBox.left + boundingBox.width / 2;
    const centerY = boundingBox.top + boundingBox.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const relativeX = mouseX - centerX;
    const relativeY = mouseY - centerY;
    const maxTilt = 80;
    const tiltX = (relativeY / centerY) * maxTilt;
    const tiltY = (-relativeX / centerX) * maxTilt;
    setTiltX(tiltX);
    setTiltY(tiltY);
  };
  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };
  return (
    <div className='hero'>
      <div className='main-title-cont main-title small'>
        <img src={point} alt='' className='point'/> 
        <span>MORE ABOUT US</span>
      </div>
      <div className='main-title large'>DESIGN FACTOR</div>
      <div className='hero-about-us-container'>
        <div className='hero-about-us-content1'>
          <span>Image 360</span>
          <div
            id="circle-360"
            className="hero-circle-360"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
            transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            }}><span>360 Image</span></div>
        </div>
        <div className='hero-about-us-content2'>
          <span>Description</span>
        </div>
      </div>
    </div>
  )
}

export default Hero