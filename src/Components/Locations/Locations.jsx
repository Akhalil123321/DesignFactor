import {React, useState} from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import TypeWriterEffect from 'react-typewriter-effect';
import { motion } from "framer-motion";
import worldMap from '../../Images/worldMap.png'
import point from "../../Images/Logo/part5.png"
import './Locations.css'
const Locations = () => {
	const [countOn, setCountOn] = useState(false)
	function locationEG(){
    window.open('https://maps.app.goo.gl/7FzkRu8vmRd9nMtd6','_black').focus()
}
	function locationAD(){
    window.open('https://maps.app.goo.gl/Fymtn2jP7kHHMRQ88','_black').focus()
}
	function locationDU(){
    window.open('https://maps.app.goo.gl/TztzhKiwYkbgAXtm8','_black').focus()
}
	const transition1 = {type: 'spring', duration: 2, delay: .2}
	const transition2 = {type: 'spring', duration: 2, delay: .4}
	const transition3 = {type: 'spring', duration: 2, delay: .6}
  return (
    <div className='locations-cont'>
		<ScrollTrigger onEnter={() => setCountOn(true)}>
			<div className='main-title-cont main-title small'>
				<img src={point} alt='' className='point'/>
				<div>
						{countOn &&
						<TypeWriterEffect
						cursorColor='transparent'
						text={'REACH US'}
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
					text={'Our Locations'}
					startDelay={400}
					typeSpeed={10}
					textStyle={{ 
					}}
					/>
			}
			</div>
			</ScrollTrigger>
			<div className='map-cont'>
				<img src={worldMap} alt='map' className='map-img'/>
				<motion.div
				className='map-pin pin-one'
				onClick={locationEG}
				title='Egypt Branch'
				initial={{y:-100, rotate:-45, opacity:-1}}
				whileInView={{y: [-200, 100, 0], rotate:-45, opacity:1}}
				transition={transition1}
				></motion.div>
				<motion.div 
				className='map-pin pin-two' 
				onClick={locationDU} 
				title='Dubai Branch'
				initial={{y:-100, rotate:-45, opacity:-1}}
				whileInView={{y: [-200, 100, 0], rotate:-45, opacity:1}}
				transition={transition2}
				></motion.div>
				<motion.div 
				className='map-pin pin-three' 
				onClick={locationAD} 
				title='Abu Dhabi Branch'
				initial={{y:-100, rotate:-45, opacity:-1}}
				whileInView={{y: [-200, 100, 0], rotate:-45, opacity:1}}
				transition={transition3}
				></motion.div>
			</div>
    </div>
  )
}

export default Locations