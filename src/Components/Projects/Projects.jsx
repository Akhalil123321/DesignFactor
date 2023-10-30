import {React, useState} from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import TypeWriterEffect from 'react-typewriter-effect';
import point from "../../Images/Logo/part5.png"
import projectImg1 from '../../Images/Projects/Project1.jpg'
import projectImg2 from '../../Images/Projects/Project2.jpg'
import projectImg3 from '../../Images/Projects/Project3.jpg'
import projectImg4 from '../../Images/Projects/Project4.jpg'
import './projects.css'

const Projects = () => {
	const [countOn, setCountOn] = useState(false)
	return (
			<div className='projects'>
			<ScrollTrigger onEnter={() => setCountOn(true)}>
			<div className='main-title-cont main-title small'>
				<img src={point} alt='' className='point'/>
				<div>
						{countOn &&
						<TypeWriterEffect
						cursorColor='transparent'
						text={'DISCOVER US'}
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
					text={'OUR PROJECTS'}
					startDelay={800}
					typeSpeed={50}
					textStyle={{ 
					}}
					/>
			}
			</div>
			</ScrollTrigger>
			{/* <div className='projects-container'>
				<div className='projects-card projects-card-1'>
					<img src={projectImg1} className='projects-card-img' alt=''/>
				</div>
				<div className='projects-card projects-card-2'>
					<img src={projectImg2} className='projects-card-img' alt=''/>
				</div>
				<div className='projects-card projects-card-3'>
					<img src={projectImg3} className='projects-card-img' alt=''/>
				</div>
				<div className='projects-card projects-card-4'>
					<img src={projectImg4} className='projects-card-img' alt=''/>
				</div>
			</div> */}
			<div className='projects-card-cont'>
			<div className='projects-card projects-card-1'>
				<div className='projects-card-text projects-card-text-1'>AL MARYAH VISTA I</div>
			</div>
			<div className='projects-card projects-card-2'>
				<div className='projects-card-text projects-card-text-2'>THE GATE</div>
			</div>
			<div className='projects-card projects-card-3'>
				<div className='projects-card-text projects-card-text-3'>OASIS TWO</div>
			</div>
			<div className='projects-card projects-card-4'>
				<div className='projects-card-text projects-card-text-4'>RUKAN LOFTS</div>
			</div>
			</div>
		</div>
	)
}

export default Projects