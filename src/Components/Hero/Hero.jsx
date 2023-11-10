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
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const imagesToMove = 2;

  const open360N1 = () => {
    window.open('https://kuula.co/share/collection/7YCCl?logo=1&info=0&logosize=122&fs=1&vr=1&gyro=0&autorotate=0.12&thumbs=-1&inst=0&gcl=1','_black').focus()
}
  const open360N2 = () => {
    window.open('https://kuula.co/share/collection/7PDsp?fs=1&vr=1&zoom=1&gyro=0&autorotate=0.1&thumbs=-1&inst=0&info=0&logo=1&logosize=120&gcl=1','_black').focus()
}
  const open360N3 = () => {
    window.open('https://kuula.co/share/collection/7kCDD?logo=1&info=0&logosize=120&fs=1&vr=1&gyro=0&autorotate=0.04&thumbs=-1&inst=0&keys=0','_black').focus()
}
  const open360N4 = () => {
    window.open('https://kuula.co/share/collection/79KtX?logo=1&info=0&logosize=152&fs=1&vr=1&gyro=0&thumbs=1','_black').focus()
}
  const open360N5 = () => {
    window.open('https://kuula.co/share/collection/7vj9b?logo=1&info=0&logosize=120&fs=1&vr=0&gyro=0&autorotate=-0.03&thumbs=-1&inst=0&keys=0','_black').focus()
}
const handleMouseDown = (e) => {
  setIsDragging(true);
  setDragStartX(e.clientX);
};

const handleMouseMove = (e) => {
  if (isDragging) {
    const draggedDistance = e.clientX - dragStartX;
    const movementThreshold = 50 * imagesToMove;

    if (draggedDistance > movementThreshold) {
      moveImagesToLeft(imagesToMove);
      setIsDragging(false);
    } else if (draggedDistance < -movementThreshold) {
      moveImagesToRight(imagesToMove);
      setIsDragging(false);
    }
  }
};
const moveImagesToRight = (count) => {
  let lists = document.querySelectorAll('.img-360');
  for (let i = 0; i < count; i++) {
    document.getElementById('slide').appendChild(lists[i]);
  }
};
const moveImagesToLeft = (count) => {
  let lists = document.querySelectorAll('.img-360');
  for (let i = lists.length - 1; i >= lists.length - count; i--) {
    document.getElementById('slide').prepend(lists[i]);
  }
};
const handleMouseUp = () => {
  setIsDragging(false);
};

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
      <div className="hero-about-us-content1">
        <div 
        id="slide"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        >
            <div className="img-360 img-360-1" onMouseDown={handleMouseDown}>
                <div className="content">
                    <div className="name">Project Name</div>
                    <div className="des">Step into a world of wonder with our captivating virtual tour! Explore every corner and detail for our works.</div>
                    <button className='img-360-button' onClick={open360N1}>Virtual Tour</button>
                </div>
            </div>
            <div className="img-360 img-360-2 img-small-style" onMouseDown={handleMouseDown} onClick={open360N1}></div>
            <div className="img-360 img-360-3" onMouseDown={handleMouseDown}>
                <div className="content">
                    <div className="name">Project Name</div>
                    <div className="des">Step into a world of wonder with our captivating virtual tour! Explore every corner and detail for our works.</div>
                    <button className='img-360-button' onClick={open360N2}>Virtual Tour</button>
                </div>
            </div>
            <div className="img-360 img-360-4 img-small-style" onMouseDown={handleMouseDown} onClick={open360N2}></div>
            <div className="img-360 img-360-5" onMouseDown={handleMouseDown}>
                <div className="content">
                    <div className="name">Project Name</div>
                    <div className="des">Step into a world of wonder with our captivating virtual tour! Explore every corner and detail for our works.</div>
                    <button className='img-360-button' onClick={open360N3}>Virtual Tour</button>
                </div>
            </div>
            <div className="img-360 img-360-6 img-small-style" onMouseDown={handleMouseDown} onClick={open360N3}></div>
            <div className="img-360 img-360-7" onMouseDown={handleMouseDown}>
                <div className="content">
                    <div className="name">Project Name</div>
                    <div className="des">Step into a world of wonder with our captivating virtual tour! Explore every corner and detail for our works.</div>
                    <button className='img-360-button' onClick={open360N4}>Virtual Tour</button>
                </div>
            </div>
            <div className="img-360 img-360-8 img-small-style" onMouseDown={handleMouseDown} onClick={open360N4}></div>
            <div className="img-360 img-360-9" onMouseDown={handleMouseDown}>
                <div className="content">
                    <div className="name">Project Name</div>
                    <div className="des">Step into a world of wonder with our captivating virtual tour! Explore every corner and detail for our works.</div>
                    <button className='img-360-button' onClick={open360N5}>Virtual Tour</button>
                </div>
            </div>
            <div className="img-360 img-360-10 img-small-style" onMouseDown={handleMouseDown} onClick={open360N5}></div>
        </div>
        {/* <div className='small-img-360-shadow'></div> */}
          <div className='hor-circle-360' onMouseDown={handleMouseDown}>
            <div className='hor-circle-360-ball'></div>
          </div>
          <div className='ver-circle-360' onMouseDown={handleMouseDown}>
            <div className='ver-circle-360-ball'></div>
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