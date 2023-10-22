import React from 'react'
import point from "../../Images/Logo/part5.png"
import projectImg1 from '../../Images/Projects/Project1.jpg'
import projectImg2 from '../../Images/Projects/Project2.jpg'
import projectImg3 from '../../Images/Projects/Project3.jpg'
import projectImg4 from '../../Images/Projects/Project4.jpg'
import './projects.css'

const Projects = () => {
	return (
			<div className='projects'>
				<div className='main-title-cont main-title small'>
					<img src={point} alt='' className='point'/> 
					<span>DISCOVER US</span>
				</div>
			<div className='main-title large'>OUR PROJECTS</div>
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
			<div class='projects-card projects-card-1'>
				<div class='projects-card-text projects-card-text-1'>AL MARYAH VISTA I</div>
			</div>
			<div class='projects-card projects-card-2'>
				<div class='projects-card-text projects-card-text-2'>THE GATE</div>
			</div>
			<div class='projects-card projects-card-3'>
				<div class='projects-card-text projects-card-text-3'>OASIS TWO</div>
			</div>
			<div class='projects-card projects-card-4'>
				<div class='projects-card-text projects-card-text-4'>RUKAN LOFTS</div>
			</div>
			</div>
		</div>
	)
}

export default Projects