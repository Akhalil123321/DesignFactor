import {React, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useFiles } from '../../Context/FilesContext';
import { motion } from "framer-motion";
import inquiryImg from '../../Images/Logo/sendInquiry.png'
import { IoClose } from "react-icons/io5";

import './SendInquiry.css'

const SendInquiry = () => {
	const location = useLocation();
	const { inquiryActive, toggleInquiry} = useFiles();
	const closeMenu = () => {
		toggleInquiry(false)
	}
	useEffect(() => {
		if (location.pathname === '/' || location.pathname === '/Main'){
			const timer = setTimeout(() => {
				toggleInquiry(true)
			}, 2000);
			return () => clearTimeout(timer);
		}
}, []);

const MenuState = inquiryActive ? 'send-inquiry-cont-open':'send-inquiry-cont-close'

  return (
		<div className={MenuState}>
			<motion.div 
			className="send-inquiry-cont-ch"
			initial={{scale: 0}}
			whileInView={{scale: 1}}
			transition={{type: 'spring', duration: 1, delay:.8}}
			>
				<div className='inquiry-form-left'>
				<img src={inquiryImg} alt='' className='inquiry-form-left-img'/>
				</div>
				<div className='inquiry-form-right'>
					<div className="inquiry-form-right-title">
						SEND INQUIRY
					</div>
						<form className='inquiry-form-right-form'>
							<div className="inquiry-form-right-field">
								<div className="fas fa-envelope">
									<FaUserAlt className='inquiry-form-right-icon'/>
								</div>
								<input className='inquiry-form-right-input' type="text" placeholder="Name"/>
							</div>
							<div className="inquiry-form-right-field">
								<div className="fas fa-lock">
								<FaEnvelope className='inquiry-form-right-icon'/>
								</div>
								<input className='inquiry-form-right-input' type="email" placeholder="Email"/>
							</div>
							<div className="inquiry-form-right-field">
								<div className="fas fa-lock">
								<FaPhone className='inquiry-form-right-icon'/>
								</div>
								<input className='inquiry-form-right-input' type="text" placeholder="Mobile Number"/>
							</div>
							<div className="inquiry-form-right-field">
								<div className="fas fa-lock">
								<FaCommentDots className='inquiry-form-right-icon'/>
								</div>
								<textarea className='inquiry-form-right-input inquiry-form-right-textarea' type="" placeholder="Enter Your Message (Max: 300 words)"/>
							</div>
							<button className='inquiry-form-right-button' onClick={closeMenu}>SUBMIT</button>
						</form>
					</div>
				<IoClose className='menu-close-icon' onClick={closeMenu}/>
				</motion.div>
				<motion.div
				className='blur-back' 
				initial={{opacity: -2}}
				whileInView={{opacity: 1}}
				transition={{type: 'spring', duration: 1, delay:0}}
				></motion.div>
			</div>
  )
}

export default SendInquiry