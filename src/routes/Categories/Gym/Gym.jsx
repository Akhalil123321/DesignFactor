/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import {React, useEffect, useState} from "react";
import { useFiles } from '../../../Context/FilesContext';
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';
import heart from '../../../Images/Categories/heart.png';
import hero from '../../../Images/Categories/hero_image.png';
import calories from '../../../Images/Categories/calories.png';
import heroBackground from '../../../Images/Categories/hero_image_back.png';
import leftArrow from '../../../Images/Categories/leftArrow.png';
import {gymData} from '../../../Data/ProjectsData.js';
import image1 from '../../../Images/Categories/GYM/cards/image1.png';
import image2 from '../../../Images/Categories/GYM/cards/image2.png';
import image3 from '../../../Images/Categories/GYM/cards/image3.png';
import image4 from '../../../Images/Categories/GYM/cards/image4.png';
import tick from '../../../Images/Categories/tick.png';
import nb from '../../../Images/Categories/GYM/brands/brand1.png';
import nike from '../../../Images/Categories/GYM/brands/brand2.png';
import adidas from '../../../Images/Categories/GYM/brands/brand3.png';
import logo from '../../../Images/Logo/Full Logo.png';
import { GrInstagram } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";
import { SiWhatsapp } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";
import { LiaFacebookSquare } from "react-icons/lia";
import '../../Categories.css'
export default function Gym() {
	const transition1 = {type: 'spring', duration: 3}
	const transition2 = {type: 'spring', duration: 3}
	const [count,setCount] = useState(0)
	// useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
	let gymEquData = gymData[count]
	const rightHandle=() => {
			setCount(prevCount => prevCount + 1)
			if(count >= 7){
					setCount(prevCount => prevCount = 0)
			}
	}    
	const leftHandle=() => {
			setCount(prevCount => prevCount - 1)
			if(count <= 0){
					setCount(prevCount => prevCount = 2)
			}
	}
	const { toggleInquiry } = useFiles();

  const handleToggle = () => {
    toggleInquiry(true);
  };
	const gymCatalogue = () => {
		window.open('https://drive.google.com/uc?export=download&id=1QkOafwmfP4ymBhQ4igfN8pMf77Lxxoff','_black').focus()
	}
return (
<main className="secondary-page-main-cont-ch">
			<section className="top-sec-ch">
        <div className="blur-ch hero-blur-ch"></div>
				<div className='hero-ch'>
					<div className='l-side-ch'>
						<div className="Slider-text-cont-ch">
							<motion.div className="slider-bar-ch"
							initial={{left: '70%'}}
							whileInView={{left: '0'}}
							transition={{...transition1, type:'tween'}}
							>
							</motion.div>
							<span >UNLEASH EXCELLENCE WITH DESIGN FACTOR</span>
						</div>
						<div className='main-title-cont-ch'>
								<div>
									<span className='normal-title-ch transparent-title-ch large-ch'>GYM </span>
									<span className='normal-title-ch large-ch'>EQUIPMENTS</span>
								</div>
								{/* <div>
									<span className='normal-title-ch large-ch'>ideal body</span>
								</div> */}
						</div>
						<p className="dis-text-ch">WHERE QUALITY MEETS THE BEST COST, DELIVERING AN UNMATCHED EXPERIENCE.</p>
						<div className='job-counter-cont-ch'>
							<div className='job-counter-cont-ch'>
								<span className='job-counter-num-ch'><NumberCounter end={50} start={0} delay='2' preFix='+'/></span>
								<span className='job-counter-type-ch'>TEXT EXAMPLE</span>
							</div>
							<div className='job-counter-cont-ch'>
								<span className='job-counter-num-ch'><NumberCounter end={50} start={0} delay='2' preFix='+'/></span>
								<span className='job-counter-type-ch'>TEXT EXAMPLE</span>
							</div>
							<div className='job-counter-cont-ch'>
								<span className='job-counter-num-ch'><NumberCounter end={50} start={0} delay='2' preFix='+'/></span>
								<span className='job-counter-type-ch'>TEXT EXAMPLE</span>
							</div>
						</div>
						<div>
							<button className='btn-ch btn-color-ch' onClick={handleToggle}>Send Inquiry</button>
							<button className='btn-ch btn-color-ch transparent-ch' onClick={gymCatalogue}>Gym Catalogue</button>
						</div>
					</div>
					<div className='hero-r-side-ch'>
						<button className='btn-ch l-btn-ch absolute-ch'>Join Now</button>
						<motion.div 
						className="fly-box-cont-ch"
						initial={{right:'-2rem'}}
						whileInView={{right:'4rem'}}
						transition={transition1}
						>
							<img src={heart} alt="" />
							<span className='job-counter-type-ch score-n1-ch'>Text Example</span>
							<span className='job-counter-num-ch score-n2-ch'>Text Example</span>
						</motion.div>
						<img src={hero} alt="" className='hero-img-ch'/>
						<motion.img 
						src={heroBackground} 
						alt="" 
						className='hero-back-img-ch'
						initial={{right:'10rem'}}
						whileInView={{right:'20rem'}}
						transition={transition1}
						/>
						<motion.div
						initial={{right:'35rem'}}
						whileInView={{right:'27rem'}}
						transition={transition1}
						className="fly-box-2-ch">
							<img src={calories} alt="" />
							<div className="fly-box-2-det-ch">
								<span className='job-counter-type-ch score-n1-ch'>More Than</span>
								<span className='job-counter-num-ch score-n2-ch'>text example</span>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		<section>
			<div className="collection-cont-ch">
				<div className="collection-ch">
					<img src={image1} alt="" className="collect-pack1-ch"/>
					<div className="collect-pack2">
						<img src={image2} alt="" className="collect-pack2-1-ch"/>
						<div className="collect-pack2-2-ch">
							<img src={image3} alt="" className="collect-pack2-2-1-ch"/>
							<img src={image4} alt="" className="collect-pack2-2-2-ch"/>
						</div>
					</div>
				</div>
					<div className="det-details-cont-ch">
						<span className="det-details-ch">some reasons</span>
						<div>
							<span className="normal-title-ch transparent-title-ch italic-ch res-large-ch">why</span>
							<span className="normal-title-ch italic res-large-ch"> choose us?</span>
						</div>
							<div className="det-list-cont-ch">
								<div className="det-list-ch">
									<img src={tick} alt=""/>
									<span className="dis-text-ch">We stand out as your premier choice. </span>
								</div>
								<div className="det-list-ch">
									<img src={tick} alt=""/>
									<span className="dis-text-ch">Our commitment to excellence is reflected in the quality and innovation of our products. </span>
								</div>
								<div className="det-list-ch">
									<img src={tick} alt=""/>
									<span className="dis-text-ch">Focus on durability, performance, and customer satisfaction, we provide cutting-edge solutions.</span>
								</div>
								<div className="det-list-ch">
									<img src={tick} alt=""/>
									<span className="dis-text-ch">unmatched reliability,and top-notch service.</span>
								</div>
							</div>
							<span className="our-clients-ch">some of our brands</span>
							<div className="our-clients-logo-ch">
								<img src={nb} alt="" className="client-logo-ch"/>
								<img src={adidas} alt="" className="client-logo-ch"/>
								<img src={nike} alt="" className="client-logo-ch"/>
						</div>
					</div>
				</div>
			</section>
			<section className="projects-list-cont-ch">
				<div className="projects-list-r-ch">
					<div className="projects-list-ch">COMMODITIES</div>
					<div className='projects-title-ch'>
						<span className='normal-title-ch transparent-title-ch'>OUR</span>
						<span className="normal-title-ch">PRODUCTS</span>
					</div>
					<div className="projects-des-cont-ch">
						<div className="projects-des-l-ch">
							<motion.div 
							className="projects-des-l-s-ch"
							key={count}
							initial={{opacity:0, x:-100}}
							animate={{opacity:1, x:0}}
							exit= {{opacity:0, x:100}}
							transition={transition2}
							>
								{gymEquData.review}
							</motion.div>
							<div className="projects-client-ch">
								<span>{gymEquData.name}</span>
								<span> - {gymEquData.status}</span>
							</div>
						</div>
					</div>
				</div>
				<div className="projects-des-r-ch">
					<motion.div 
					className="project-box-ch project-box-bordered-ch"
					initial={{opacity:0, x:-100}}
					whileInView={{opacity:1, x:0}}
					transition={{...transition2, duration:2}}
					>
					</motion.div>
					<motion.div 
					className="project-box-ch project-box-solid-ch"
					initial={{opacity:0, x:100}}
					whileInView={{opacity:1, x:0}}
					transition={{...transition2, duration:2}}
					>
					</motion.div>
					<motion.img 
					src={gymEquData.image} 
					alt="" 
					className="project-img-ch" 
					key={count}
					initial={{opacity:0, x:100}}
					animate={{opacity:1, x:0}}
					exit= {{opacity:0, x:-100}}
					transition={transition2}
					/>
					<div className="project-arrows-cont-ch">
						<img src={leftArrow} alt="" onClick={leftHandle} className="project-arrows-l-cont-ch" />
						<img src={leftArrow} alt="" onClick={rightHandle} className="project-arrows-r-cont-ch" />
					</div>
				</div>
			</section>
			<footer className="footer-cont-ch">
				<div className="blur-ch footer-blur-ch f-blue-l-ch"></div>
				<div className="blur-ch footer-blur-ch f-blue-r-ch red-blur-ch"></div>
				<div className="contact-us-cont-ch">
					<a href="https://instagram.com/arc.ramez?igshid=NjIwNzIyMDk2Mg==" target='_blank' title='Instagram' rel="noreferrer"><GrInstagram className='foot-icon-in'/></a>
					<a href="https://api.whatsapp.com/send?phone=971501272852" target='_blank' title='Whatsapp' rel="noreferrer"><SiWhatsapp className='foot-icon-ch'/></a>
					<a href="#" target='_blank' title='Youtube' rel="noreferrer"><FiYoutube className='foot-icon-ch-yt'/></a>
					<a href="https://www.facebook.com/ramez.eg.uae.tur.sa/" target='_blank' title='Facebook' rel="noreferrer"><LiaFacebookSquare className='foot-icon-ch-fa'/></a>
					<a href="#" target='_blank' title='Linkedin' rel="noreferrer" ><LiaLinkedin className='foot-icon-ch-ln'/></a>
				</div>
				<img src={logo} alt="" className="company-logo-ch"/>
			</footer>
		</main>
)
}
