/* eslint-disable eqeqeq */
import {React} from 'react'
import point from "../../Images/Logo/part5.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import CategoriesData from '../../Data/CategoriesData'
// import Category from '../../Sources/Category/Category'
import catImage from '../../Images/Categories/Furniture.png'

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
					<img src={catImage} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={catImage} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={catImage} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={catImage} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={catImage} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={catImage} alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={catImage} alt="slide_image" />
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