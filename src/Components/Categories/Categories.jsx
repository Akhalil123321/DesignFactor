/* eslint-disable eqeqeq */
import {React} from 'react'
import { Link } from "react-router-dom";
import point from "../../Images/Logo/part5.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import CategoriesData from '../../Data/CategoriesData'
// import Category from '../../Sources/Category/Category'
import Furnitures from '../../Images/Categories/Furnitures/Furnitures.jpg'
import Appliances from '../../Images/Categories/Appliances/Appliances.png'
import Doors from '../../Images/Categories/Doors/Doors.jpg'
import electricSocket from '../../Images/Categories/electricSocket/electricSocket.jpg'
import marbleImg from '../../Images/Categories/Marble/Marble.jpg'
import GymImg from '../../Images/Categories/GYM/GYM.jpg'
import fitOutImg from '../../Images/Categories/Fit-out/Fit-out.jpg'
import ceramicsImg from '../../Images/Categories/Ceramics/Ceramics.jpg'
import SanitaryImg from '../../Images/Categories/Sanitary/Sanitary.jpg'
import CurtainsImg from '../../Images/Categories/Curtains/Curtain.jpg'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Categories.css'

const Categories = () => {
	// const categoriesCards = CategoriesData.map(cardItem => {
	// 	return <Category
	// 		id={cardItem.id}
	// 		{...cardItem}
	// 	/>
	// })
  return (
		<div className='categories-cont'>
			<div className='main-title-cont main-title small'>
				<img src={point} alt='' className='point'/> 
				<span>OUR SCOPE OF WORK</span>
			</div>
		<div className='main-title large'>CATEGORIES</div>
			<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2.5,
					}}
					pagination={{ el: '.swiper-pagination', clickable: true }}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
						clickable: true,
					}}
					modules={[EffectCoverflow, Pagination, Navigation]}
					className="swiper_container"
				>
				<SwiperSlide>
					<div className='categories-img-cont'>
						<img src={Furnitures} alt="slide_image" className='categories-img'/>
						<Link to="/Furniture" className='categories-img-shadow'>
							<p className='categories-img-text'>FURNITURES</p>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='categories-img-cont'>
						<img src={Appliances} alt="slide_image" className='categories-img'/>
						<Link to="/Appliances" className='categories-img-shadow'>
							<p className='categories-img-text'>APPLIANCES</p>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='categories-img-cont'>
						<img src={Doors} alt="slide_image" className='categories-img'/>
						<Link to="/Doors" className='categories-img-shadow'>
							<p className='categories-img-text'>DOORS</p>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='categories-img-cont'>
						<img src={electricSocket} alt="slide_image" className='categories-img'/>
						<Link to="/Sockets" className='categories-img-shadow'>
							<p className='categories-img-text'>ELECTRIC SOCKETS</p>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='categories-img-cont'>
						<img src={marbleImg} alt="slide_image" className='categories-img'/>
						<Link to="/Marble" className='categories-img-shadow'>
							<p className='categories-img-text'>MARBLE</p>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='categories-img-cont'>
						<img src={GymImg} alt="slide_image" className='categories-img'/>
						<Link to="/Gym" className='categories-img-shadow'>
							<p className='categories-img-text'>GYM</p>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='categories-img-cont'>
						<img src={fitOutImg} alt="slide_image" className='categories-img'/>
						<Link to="/Fitout" className='categories-img-shadow'>
							<p className='categories-img-text'>FIT-OUT</p>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='categories-img-cont'>
						<img src={ceramicsImg} alt="slide_image" className='categories-img'/>
						<Link to="/ceramics" className='categories-img-shadow'>
							<p className='categories-img-text'>CERAMICS</p>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='categories-img-cont'>
						<img src={SanitaryImg} alt="slide_image" className='categories-img'/>
						<Link to="/Sanitary" className='categories-img-shadow'>
							<p className='categories-img-text'>SANITARY</p>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='categories-img-cont'>
						<img src={CurtainsImg} alt="slide_image" className='categories-img'/>
						<Link to="/Curtains" className='categories-img-shadow'>
							<p className='categories-img-text'>CURTAINS</p>	
						</Link>
					</div>
				</SwiperSlide>
				<div className="slider-controler">
					<div className="swiper-button-prev slider-arrow-lift"></div>
					<div className="swiper-button-next slider-arrow-right"></div>
					<div className="swiper-pagination"></div>
				</div>
			</Swiper>
		</div>
  )
}

export default Categories