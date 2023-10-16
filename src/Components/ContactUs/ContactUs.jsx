import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import './ContactUs.css'

const ContactUs = () => {
	return (
		<div className='contact-us-page-container'>
			<div className='main-title large contact-title'>Contact US</div>
			<div className='contact-us-sec-container'>
				<div className='contact-us-sec contact-us-sec1'>
					<div className='contact-det-cont'>
						<span className='third-Title'>MOBILE</span>
						<a 
						href="tel:+971508069215" 
						className='contact-det'
						title='Call +971 50 806 9215'
						target='_blank' 
						rel="noreferrer"
						>
						+971 50 806 9215
						</a>
					</div>
					<div className='contact-det-cont'>
						<span className='third-Title'>PHONE</span>
						<span className='contact-det'>+971 02 XXX XXXX</span>
					</div>
					<div className='contact-det-cont'>
						<span className='third-Title'>PO BOX</span>
						<span className='contact-det'>XXXXXX</span>
					</div>
				</div>
				<div className='contact-us-sec contact-us-sec2'>
					<div className='contact-det-cont'>
						<span className='third-Title'>E-MAIL</span>
						<a 
						className='contact-det' 
						href='mailto:ramez@designfactor.ae?subject=Regarding%20Project&body=Hi%20Ramez,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20the%20project.%0D%0A'
						title='Mailto:ramez@designfactor.ae'
						target='_blank' 
						rel="noreferrer"
						>
						ramez@designfactor.ae
						</a>
					</div>
					<div className='contact-det-cont'>
						<span className='third-Title'>SOCIAL</span>
						<ul className='contact-det-icons-cont'>
							<li>
								<a href="#">
									<FaFacebookF className='contact-det-icons'/>
								</a>
							</li>
							<li>
								<a href="#" className='neon-icon'>
									<FaXTwitter className='contact-det-icons'/>
								</a>
							</li>
							<li>
								<a href="#">
									<FaInstagram className='contact-det-icons'/>
								</a>
							</li>
							<li>
								<a href="#">
									<FaWhatsapp className='contact-det-icons'/>
								</a> 
							</li>
							</ul>
					</div>
				</div>
				{/* <div className='contact-us-sec contact-us-sec3'>text area</div> */}
			</div>
		</div>
	)
}

export default ContactUs