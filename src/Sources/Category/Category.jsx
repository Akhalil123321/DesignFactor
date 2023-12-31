import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import './Category.css'
import Furnitures from '../../Images/Categories/Furnitures/Furnitures.jpg'
import Appliances from '../../Images/Categories/Appliances/Appliances.jpg'
import Doors from '../../Images/Categories/Doors/Doors.jpg'
import Lighting from '../../Images/Categories/Lighting/Lighting.jpg'
import marbleImg from '../../Images/Categories/Marble/Marble.png'
import GymImg from '../../Images/Categories/GYM/GYM.png'
import fitOutImg from '../../Images/Categories/Fit-out/Fit-out.jpg'
import ceramicsImg from '../../Images/Categories/Ceramics/Ceramics.jpg'
import SanitaryImg from '../../Images/Categories/Sanitary/Sanitary.jpg'
import CurtainsImg from '../../Images/Categories/Curtains/Curtain.jpg'
import MaintenanceImg from '../../Images/Categories/Maintenance/Maintenance.jpg'
import AccessoriesImg from '../../Images/Categories/Accessories/Accessories.jpg'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Category = (props) => {
  return (
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
  <SwiperSlide >
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
      <img src={Lighting} alt="slide_image" className='categories-img'/>
      <Link to="/Lighting" className='categories-img-shadow'>
        <p className='categories-img-text'>LIGHTING</p>
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
      <img src={SanitaryImg} alt="slide_image" className='categories-img'/>
      <Link to="/Sanitary" className='categories-img-shadow'>
        <p className='categories-img-text'>SANITARY</p>
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
      <img src={CurtainsImg} alt="slide_image" className='categories-img'/>
      <Link to="/Curtains" className='categories-img-shadow'>
        <p className='categories-img-text'>CURTAINS</p>	
      </Link>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className='categories-img-cont'>
      <img src={MaintenanceImg} alt="slide_image" className='categories-img'/>
      <Link to="/Maintenance" className='categories-img-shadow'>
        <p className='categories-img-text'>MAINTENANCE</p>	
      </Link>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className='categories-img-cont'>
      <img src={AccessoriesImg} alt="slide_image" className='categories-img'/>
      <Link to="/Accessories" className='categories-img-shadow'>
        <p className='categories-img-text'>ACCESSORIES</p>	
      </Link>
    </div>
  </SwiperSlide>

  <div className="slider-controler">
    <div className="swiper-button-prev slider-arrow-lift"></div>
    <div className="swiper-button-next slider-arrow-right"></div>
    <div className="swiper-pagination"></div>
  </div>
</Swiper>
  )
}

export default Category