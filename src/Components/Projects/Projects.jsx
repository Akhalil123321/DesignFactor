import React from 'react'
import point from "../../Images/Logo/part5.png"
import './projects.css'

const Projects = () => {
	return (
			<div className='projects'>
				<div className='main-title-cont main-title small'>
				<img src={point} alt='' className='point'/> 
				<span>DISCOVER US</span>
			</div>
			<div className='main-title large'>OUR PROJECTS</div>
			<div className='projects-container'>
				<div className='projects-card projects-card-1'>Image 1</div>
				<div className='projects-card projects-card-2'>Image 1</div>
				<div className='projects-card projects-card-3'>Image 1</div>
				<div className='projects-card projects-card-4'>Image 1</div>
			</div>
		</div>
	)
}

export default Projects