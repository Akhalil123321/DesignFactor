import React from 'react'
import { motion } from "framer-motion";
import worldMap from '../../Images/worldMap.jpg'
import './Locations.css'
const Locations = () => {
	function openLocationAD(){
    window.open('https://maps.app.goo.gl/QRh9uhU7cRG4ADhk9','_black').focus()
}
	const transition1 = {type: 'spring', duration: 2, delay: .2}
	const transition2 = {type: 'spring', duration: 2, delay: .4}
	const transition3 = {type: 'spring', duration: 2, delay: .6}
  return (
    <div className='locations-cont'>
    	<div className='main-title large contact-title'>Our Locations</div>
			<div className='map-cont'>
				<img src={worldMap} alt='map' className='map-img'/>
				<motion.div
				className='map-pin pin-one'
				onClick={openLocationAD}
				title='Egypt Branch'
				initial={{y:-100, rotate:-45, opacity:-1}}
				whileInView={{y: [-200, 100, 0], rotate:-45, opacity:1}}
				transition={transition1}
				></motion.div>
				<motion.div 
				className='map-pin pin-two' 
				onClick={openLocationAD} 
				title='Dubai Branch'
				initial={{y:-100, rotate:-45, opacity:-1}}
				whileInView={{y: [-200, 100, 0], rotate:-45, opacity:1}}
				transition={transition2}
				></motion.div>
				<motion.div 
				className='map-pin pin-three' 
				onClick={openLocationAD} 
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