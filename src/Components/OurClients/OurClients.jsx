import {React, useState} from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import TypeWriterEffect from 'react-typewriter-effect';
import { motion } from "framer-motion";
import point from "../../Images/Logo/part5.png"
import AMLogo from "../../Images/Logo/AMLogo.png"
import ReporajLogo from "../../Images/Logo/ReportajLogo.png"
import TIJLogo from '../../Images/Logo/TIJLogo.png'
import ModeonLogo from '../../Images/Logo/ModeonLogo.png'
import EmiratesLogo from '../../Images/Logo/EmiratesLikLogo.png'
import FattanLogo from '../../Images/Logo/FattanLogo.png'
import SSPDLogo from '../../Images/Logo/SSPDLogo.png'
import RotanaLogo from '../../Images/Logo/RotanaLogo.png'
import TahnonLogo from '../../Images/Logo/TahnonLogo.png'
import './OurClients.css'

const OurClients = () => {
	const [countOn, setCountOn] = useState(false)
  return (
    <div className='our-clients-cont'>
			<ScrollTrigger onEnter={() => setCountOn(true)}>
			<div className='main-title-cont main-title small'>
				<img src={point} alt='' className='point'/>
				<div>
						{countOn &&
						<TypeWriterEffect
						cursorColor='transparent'
						text={'PREVIOUS PROJECTS'}
						startDelay={100}
						typeSpeed={50}
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
					text={'OUR CLIENTS'}
					startDelay={1000}
					typeSpeed={50}
					textStyle={{ 
					}}
					/>
			}
			</div>
			</ScrollTrigger>
			<div className='clients-container'>
				<motion.div
				className="clients-card-cont"
				initial={{opacity: -2}}
				whileInView={{opacity: 1}}
				transition={{type: 'spring', duration: 2, delay:0}}
				>
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={ReporajLogo} alt="NFT" />
					</div>
				</motion.div>
				<motion.div 
				className="clients-card-cont"
				initial={{opacity: -2}}
				whileInView={{opacity: 1}}
				transition={{type: 'spring', duration: 2, delay:.1}}
				>
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={AMLogo} alt="NFT" />
						{/* <h2>A&M INTERNATIONAL</h2> */}
					</div>
				</motion.div>
				<motion.div 
				className="clients-card-cont"
				initial={{opacity: -2}}
				whileInView={{opacity: 1}}
				transition={{type: 'spring', duration: 2, delay:.2}}
				>
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={TIJLogo} alt="NFT" />
					</div>
				</motion.div>
				<motion.div 
				className="clients-card-cont"
				initial={{opacity: -2}}
				whileInView={{opacity: 1}}
				transition={{type: 'spring', duration: 2, delay:.3}}
				>
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={ModeonLogo} alt="NFT" />
					</div>
				</motion.div>
				<motion.div 
				className="clients-card-cont"
				initial={{opacity: -2}}
				whileInView={{opacity: 1}}
				transition={{type: 'spring', duration: 2, delay:.4}}
				>
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={EmiratesLogo} alt="NFT" />
					</div>
				</motion.div>
				<motion.div 
				className="clients-card-cont"
				initial={{opacity: -2}}
				whileInView={{opacity: 1}}
				transition={{type: 'spring', duration: 2, delay:.5}}
				>
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={FattanLogo} alt="NFT" />
					</div>
				</motion.div>
				<motion.div 
				className="clients-card-cont"
				initial={{opacity: -2}}
				whileInView={{opacity: 1}}
				transition={{type: 'spring', duration: 2, delay:.6}}
				>
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={SSPDLogo} alt="NFT" />
					</div>
				</motion.div>
				<motion.div 
				className="clients-card-cont"
				initial={{opacity: -2}}
				whileInView={{opacity: 1}}
				transition={{type: 'spring', duration: 2, delay:.7}}
				>
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={RotanaLogo} alt="NFT" />
					</div>
				</motion.div>
				{/* <div className="clients-card-cont">
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={TahnonLogo} alt="NFT" />
					</div>
				</div> */}
			</div>
    </div>
  )
}

export default OurClients