import {React, useState} from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from "react-router-dom";
import smallImg from '../../Images/360/small1.png'
import largeImg from '../../Images/360/large1.png'
import "./Hero.css"
import point from "../../Images/Logo/part5.png"

const Hero = () => {
  const [countOn, setCountOn] = useState(false)
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
    const maxTilt = 3;
    const tiltX = (relativeY / centerY) * maxTilt * 20;
    const tiltY = (-relativeX / centerX) * maxTilt * 20;
    setTiltX(tiltX);
    setTiltY(tiltY);
  };
  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };
  function open360(){
    window.open('https://kuula.co/share/collection/7YCCl?logo=1&info=0&logosize=122&fs=1&vr=1&gyro=0&autorotate=0.12&thumbs=-1&inst=0&gcl=1','_black').focus()
}
  return (
    <div className='hero'>
      <ScrollTrigger onEnter={() => setCountOn(true)}>
			<div className='main-title-cont main-title small'>
				<img src={point} alt='' className='point'/>
				<div>
						{countOn &&
						<TypeWriterEffect
						cursorColor='transparent'
						text={'MORE ABOUT US'}
						startDelay={100}
						typeSpeed={10}
						textStyle={{ 
						}}
						/>
				}
				</div>
			</div>
			<div className='main-title large'>
					{countOn &&
					<TypeWriterEffect
					cursorColor='transparent'
					text={'DESIGN FACTOR'}
					startDelay={400}
					typeSpeed={10}
					textStyle={{ 
					}}
					/>
			}
			</div>
			</ScrollTrigger>
      <div className='hero-about-us-container'>
        <div className='hero-about-us-content1'>
          <img src={largeImg} className='large-img-360' alt='' onClick={open360}/>
          <div
            onClick={open360}
            id="circle-360"
            className="hero-circle-360"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
            transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            }}>
            <div className='circle-inside-text'><span>Discover Our Virtual Tour</span></div>
              <img src={smallImg} className='small-img-360' alt=''/>
              <div className='small-img-360-shadow'></div>
              <div className='hor-circle-360'>
                <div className='hor-circle-360-ball'></div>
              </div>
              <div className='ver-circle-360'>
                <div className='ver-circle-360-ball'></div>
              </div>
            </div>
        </div>
        <div className='hero-about-us-content2'>
          <span className='hero-about-us-content2-text1'>
          We offer custom interior design services tailored to your taste and needs. 
          Whether you're looking for a complete home makeover or an update to a specific area, 
          our design team is ready to create your dream home.
          </span>
          <span className='hero-about-us-content2-text2'>
          We provide a wide range of high-quality furniture from trusted suppliers. 
          Whether you're seeking classic or modern furniture, we offer a variety of options for you to choose from.
          </span>
          <div className="Know-more-bottom">
            <button className="Know-more-bottom-ch">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero