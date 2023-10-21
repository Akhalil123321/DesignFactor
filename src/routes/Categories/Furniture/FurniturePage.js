import React from "react"
import { Link } from "react-router-dom";
import SingleRoomData from '../../../Data/ProjectData'

export default function FurniturePage(props) {
	const[shadowProperty,setShadowProperty]=React.useState(false)
function mouseEnter(){
	setShadowProperty(true)
}
function mouseLeave(){
	setShadowProperty(false)
}
const boxShadow = shadowProperty?'project-card-box-shadow':''
const boxBtn = shadowProperty?'project-card-btn':'project-card-btn project-card-btn-over'
function handleClick(){
	SingleRoomData.push(props)
	SingleRoomData.shift()
}
return (
	<div 
	className="project-card-cont-ch" 
	onMouseEnter={mouseEnter}
	onMouseLeave={mouseLeave}
	>
	<div className="Project-card-circle">
		<p>{props.client}</p>
	</div>
	<img src={`../../../Images/${props.image}`} alt='' className="project-card-img"/>
	<div className="Project-card-name"><p>{props.Name}</p></div>
		<div className={boxShadow}>
			<Link to="/Project" className="Project-btn-link">
				<button className={boxBtn} onClick={handleClick}>
					KNOW MORE
				</button>
			</Link>
		</div>
	
	</div>
)
}
