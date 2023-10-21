/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { Link } from "react-router-dom";
export default function Single(props) {
return (
    <main>
        <div className="project-page-cont">
					<img 
					src={`../Images/${props.image}`}
					className='project-page-main-img'
					/>
					<div className="cat-card-det cat-card-det1">
                <h1 className="cat-card-title card-width">{props.Name}</h1>
                <hr className="line"/>
                <p className="cat-card-dis">{props.Location}</p>
								<Link to={`/${props.routes}`}><button className="project-card-btn">BACK TO {props.back}</button></Link>
            </div>
        </div>
        <div className="project-det-img-cont">
            <img src={`../Images/${props.image1}`} className="project-page-img-sec"/>
            <img src={`../Images/${props.image2}`} className="project-page-img-sec"/>
            <img src={`../Images/${props.image3}`} className="project-page-img-sec"/>
        </div>
        <div className="project-det-text-cont">
					<div className="project-det">
							<h3 className="project-det-h">Project Description:</h3>
							<p className="project-det-p">{props.details}</p>
					</div>
					<div className="project-info">
							<h3 className="project-info-h">Information:</h3>
							<p className="project-info-p">Contact Amount : {props.Amount} AED</p>
							<p className="project-info-p">Client : {props.client}</p>
							<p className="project-info-p">Consultant : {props.Consultant}</p>
							<p className="project-info-p">Location : {props.Location}</p>
					</div>
        </div>
        <div className="project-more-det">
            <h4 className="project-more-det-h">More Details:</h4>
            <div className="project-more-det-p-cont">
                <p className="project-more-det-p">- {props.moreDet1}</p>
                <p className="project-more-det-p">- {props.moreDet1}</p>
                <p className="project-more-det-p">- {props.moreDet1}</p>
                <p className="project-more-det-p">- {props.moreDet1}</p>
                <p className="project-more-det-p">- {props.moreDet1}</p>
                <p className="project-more-det-p">- {props.moreDet1}</p>
                <p className="project-more-det-p">- {props.moreDet1}</p>
            </div>
        </div>
    </main>
)
}