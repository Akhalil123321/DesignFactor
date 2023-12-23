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
					text={'OUR PROJECTS'}
					startDelay={500}
					typeSpeed={10}
					textStyle={{ 
					}}
					/>
			}
			</div>
			</ScrollTrigger>
			<div className='projects-card-cont'>
			<div className='projects-card projects-card-1'>
				<div className='projects-card-text projects-card-text-1'>
					<span className='projects-card-text-title'>AL MARYAH VISTA I</span>
					<div className='project-card-text-dis'>
						<span className='project-card-text-dis1'>
							<span className='bold'>Client : </span>
							<span>Reportage</span>
						</span>
						<span className='project-card-text-dis2'>
							<span className='bold'>Location : </span>
							<span>Al Maryah island, Abu Dhabi</span>
						</span>
						<span className='project-card-text-dis3'>
							<span className='bold'>Description : </span>
							<span>With a premium location overlooking Al Maryah beautiful waterfront, Al Maryah Vista offers an incomparable lifestyle embracing the shades of blue. Located in the heart of a free zone, Al Maryah Vista is a perfect opportunity for living and Investment.</span>
						</span>
					</div>
				</div>
			</div>
			<div className='projects-card projects-card-2'>
				<div className='projects-card-text projects-card-text-2'>
				<span className='projects-card-text-title'>THE GATE</span>
					<div className='project-card-text-dis'>
						<span className='project-card-text-dis1'>
							<span className='bold'>Client : </span>
							<span>Reportage</span>
						</span>
						<span className='project-card-text-dis2'>
							<span className='bold'>Location : </span>
							<span>Masdar City, Abu Dhabi</span>
						</span>
						<span className='project-card-text-dis3'>
							<span className='bold'>Description : </span>
							<span>In one of the most sustainable communities in Abu Dhabi, The Gate stands out as a unique piece of art right at the entrance of Masdar City. Spanning across an area of more than 95,643 sq. ft.</span>
						</span>
					</div>
				</div>
			</div>
			<div className='projects-card projects-card-3'>
				<div className='projects-card-text projects-card-text-3'>
				<span className='projects-card-text-title'>OASIS TWO</span>
					<div className='project-card-text-dis'>
						<span className='project-card-text-dis1'>
							<span className='bold'>Client : </span>
							<span>Reportage</span>
						</span>
						<span className='project-card-text-dis2'>
							<span className='bold'>Location : </span>
							<span>Masdar City, Abu Dhabi</span>
						</span>
						<span className='project-card-text-dis3'>
							<span className='bold'>Description : </span>
							<span>this piece of art - Oasis 2 -  complement the architectural palette and the scenic landscape of this area. This 6-story residential building tells the story of an incredibly unique city and one of the most sustainable urban communities in the world.</span>
						</span>
					</div>
				</div>
			</div>
			<div className='projects-card projects-card-4'>
				<div className='projects-card-text projects-card-text-4'>
				<span className='projects-card-text-title'>RUKAN LOFTS</span>
					<div className='project-card-text-dis'>
						<span className='project-card-text-dis1'>
							<span className='bold'>Client : </span>
							<span>Reportage</span>
						</span>
						<span className='project-card-text-dis2'>
							<span className='bold'>Location : </span>
							<span>Dubailand, Dubai</span>
						</span>
						<span className='project-card-text-dis3'>
							<span className='bold'>Description : </span>
							<span>A gated compound of more than 800 perfectly designed Townhouses, spanning across an area of 2600,000 sq. ft., surrounded by parks, running areas, retail shops, and every sign of vibrant life.</span>
						</span>
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}

export default Projects