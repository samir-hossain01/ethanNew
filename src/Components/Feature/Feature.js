
import Wrapper from './Feature.styled'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay  } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SliderImg from "../../images/swiperslider.png"
function Feature() {
  AOS.init();
  return (
   <Wrapper>
    <div className="feature" id='feature' data-aos="fade-up" data-aos-duration="1500">
        <div className="container-fluid">
            <div className="row">
                <div className="title">
                    <h3 className='common_title'>
                    choose your  <br /><span className='gradient'>Favorite</span> Features
                    </h3>
                </div>
            </div>
        </div>
    
   <Swiper
  slidesPerView={2.5} // Display 3 slides at a time
  spaceBetween={80}
   // Adjust this value to control the visibility of the right half slide
  loop={true}
  centeredSlides={true}     // Set to true to activate center slide
//   centeredSlidesBounds={true}
autoplay={{
  delay: 1500,
  disableOnInteraction: false,
}}
breakpoints={{
  120: {
    slidesPerView: 1,
    spaceBetween:0,
  },
  576: {
    slidesPerView: 2,
    spaceBetween:50,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 60,
  },
  1024: {
    slidesPerView: 2.5,
    spaceBetween: 80,
  },
}}

modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={SliderImg} className='img-fluid' loading='lazy' alt="slider" /></SwiperSlide>
        <SwiperSlide><img src={SliderImg} className='img-fluid' loading='lazy' alt="slider" /></SwiperSlide>
        <SwiperSlide><img src={SliderImg} className='img-fluid' loading='lazy' alt="slider" /></SwiperSlide>
        <SwiperSlide><img src={SliderImg} className='img-fluid' loading='lazy' alt="slider" /></SwiperSlide>
        <SwiperSlide><img src={SliderImg} className='img-fluid' loading='lazy' alt="slider" /></SwiperSlide>
        <SwiperSlide><img src={SliderImg} className='img-fluid' loading='lazy' alt="slider" /></SwiperSlide>
        <SwiperSlide><img src={SliderImg} className='img-fluid' loading='lazy' alt="slider" /></SwiperSlide>
        <SwiperSlide><img src={SliderImg} className='img-fluid' loading='lazy' alt="slider" /></SwiperSlide>
        <SwiperSlide><img src={SliderImg} className='img-fluid' loading='lazy' alt="slider" /></SwiperSlide>

      
      </Swiper>
      <div className="banner_button featuresButton">
                <a href="#"><span>View all</span></a>
                <a href="#" className='newSkewButton'><span className='gradient-text'>Play Now</span></a>
              </div>
      </div>
    </Wrapper>
  )
}

export default Feature
