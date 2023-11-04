import React from 'react'
import { useFiles } from '../../Context/FilesContext';
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

import './ContactUs.css'

const ContactUs = () => {
	const { toggleInquiry } = useFiles();

  const handleToggle = () => {
    toggleInquiry(true);
  };
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
						title='Call +971 50 127 2852'
						target='_blank' 
						rel="noreferrer"
						>
						+971 50 127 2852
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
						href='mailto:ramez@designfactor.ae?subject=RFQ%20|%20Project%20Name&body=Dear%20Eng.Ramez,%0D%0A%0D%0AI%20would%20like%20to%20send%20an%20inquiry%20for:%0D%0A'
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
								<a href="https://www.facebook.com/ramez.eg.uae.tur.sa/" target='_blank' rel="noreferrer">
									<FaFacebookF className='contact-det-icons'/>
								</a>
							</li>
							<li>
								<a href="#" className='neon-icon' target="_blank" rel="noreferrer">
									<BiLogoLinkedin className='contact-det-icons'/>
								</a>
							</li>
							<li>
								<a href="https://instagram.com/arc.ramez?igshid=NjIwNzIyMDk2Mg==" target="_blank" rel="noreferrer">
									<FaInstagram className='contact-det-icons'/>
								</a>
							</li>
							<li>
								<a href="https://api.whatsapp.com/send?phone=971501272852" target="_blank" rel="noreferrer">
									<FaWhatsapp className='contact-det-icons'/>
								</a> 
							</li>
							<li>
								<a href="#" target="_blank" rel="noreferrer">
									<AiOutlineYoutube className='contact-det-icons'/>
								</a> 
							</li>
							</ul>
					</div>
					<div className='contact-det-cont'>
						<div className="send-inquiry-bottom">
							<button className="send-inquiry-bottom-ch" onClick={handleToggle}>
							SEND INQUIRY
							</button>
						</div>
					</div>
				</div>
				{/* <div className='contact-us-sec contact-us-sec2'>
					<div className='contact-det-cont'>
						<span className='third-Title'>E-MAIL</span>
						<a 
						className='contact-det' 
						href='mailto:ramez@designfactor.ae?subject=RFQ%20|%20Project%20Name&body=Dear%20Eng.Ramez,%0D%0A%0D%0AI%20would%20like%20to%20send%20an%20inquiry%20for:%0D%0A'
						title='Mailto:ramez@designfactor.ae'
						target='_blank' 
						rel="noreferrer"
						>
						ramez@designfactor.ae
						</a>
					</div>
					<div className='contact-det-cont'>
						<span className='third-Title'>E-MAIL</span>
						<a 
						className='contact-det' 
						href='mailto:ramez@designfactor.ae?subject=RFQ%20|%20Project%20Name&body=Dear%20Eng.Ramez,%0D%0A%0D%0AI%20would%20like%20to%20send%20an%20inquiry%20for:%0D%0A'
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
								<a href="https://www.facebook.com/ramez.eg.uae.tur.sa/" target='_blank' rel="noreferrer">
									<FaFacebookF className='contact-det-icons'/>
								</a>
							</li>
							<li>
								<a href="#" className='neon-icon' target="_blank" rel="noreferrer">
									<BiLogoLinkedin className='contact-det-icons'/>
								</a>
							</li>
							<li>
								<a href="https://instagram.com/arc.ramez?igshid=NjIwNzIyMDk2Mg==" target="_blank" rel="noreferrer">
									<FaInstagram className='contact-det-icons'/>
								</a>
							</li>
							<li>
								<a href="https://api.whatsapp.com/send?phone=971501272852" target="_blank" rel="noreferrer">
									<FaWhatsapp className='contact-det-icons'/>
								</a> 
							</li>
							<li>
								<a href="#" target="_blank" rel="noreferrer">
									<AiOutlineYoutube className='contact-det-icons'/>
								</a> 
							</li>
							</ul>
					</div>
				</div> */}
				{/* <div className='contact-us-sec contact-us-sec3'>text area</div> */}
			</div>
		</div>
	)
}

export default ContactUs