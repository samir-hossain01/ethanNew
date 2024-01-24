import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import VisibilitySensor from 'react-visibility-sensor';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode } from 'swiper/modules';
import Wrapper from './Roadmap.styled'
function Roadmap() {
    const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visibility) => {
    if (visibility) {
      setIsVisible(true);
      AOS.refresh();
    }
  };
  return (
   <Wrapper id='roadmap'>


  <VisibilitySensor onChange={onVisibilityChange} partialVisibility>

  <section className="roadmap" >
   <div className="container-fluidi"data-aos="fade-up" data-aos-duration="1500">
   <div className="col-md-12">
        <h3 className="common_title gradient3">Roadmap<span className='blink-soft  gradient3'>_</span></h3>
    </div>
    <Swiper 
        slidesPerView={3.5}
        spaceBetween={0}
        freeMode={true}
        loop={true}
        grabCursor={true}
        
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            50: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            576: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1192: {
                slidesPerView: 3.5,
                spaceBetween: 0,
              },
          }}
          
        
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide  >

            <div className="roadmap_single_item">
                <div className="roadmap_title">
                <div className="circle"></div>
                    <h3>Q1/2024</h3>
                   
                </div>
                <div className="roadmapList">
                    <ul>
                        <li>Token IDO & Listing</li>
                        <li>Shopdi Wallet</li>
                        <li>Authentic Products Pre-sale</li>
                        <li>NFT Products Collection</li>
                    </ul>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide  >
            <div className="roadmap_single_item roadmap_single_item2">
                <div className="roadmap_title">
                <div className="circle"></div>
                    <h3>Q2/2024</h3>
                   
                </div>
                <div className="roadmapList">
                    <ul>
                        <li>Launch Shopdi Global Marketplace</li>
                        <li>- Integration Livestream on Social Platforms</li>
                        <li>- KOL/KOC Gamification Platform</li>
                        <li>- All transaction will encrypt and store evidence on Blockchain</li>
                    </ul>
                </div>
            </div></SwiperSlide>
            <SwiperSlide>
            <div className="roadmap_single_item  ">
                <div className="roadmap_title">
                <div className="circle"></div>
                    <h3>Q3/2024</h3>
                   
                </div>
                <div className="roadmapList">
                    <ul>
                        <li>Launch Secondary Marketplace</li>
                        <li>- KOL/KOC Gamification Platform</li>
                   
                    </ul>
                </div>
            </div></SwiperSlide>

            <SwiperSlide >
            <div className="roadmap_single_item roadmap_single_item2 ">
                <div className="roadmap_title">
                <div className="circle"></div>
                    <h3>Q4/2043</h3>
                   
                </div>
                <div className="roadmapList">
                    <ul>
                    <li>Token IDO & Listing</li>
                        <li>Shopdi Wallet</li>
                        <li>Authentic Products Pre-sale</li>
                        <li>NFT Products Collection</li>
                    </ul>
                </div>
            </div></SwiperSlide>

      </Swiper>
   </div>
  </section>
  </VisibilitySensor>
   </Wrapper>
  )
}

export default Roadmap
