import React, { useEffect } from 'react';
import Wrapper from './Banner.styled'
import Game from "../../images/game.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
  }, []);
  return (
   <Wrapper>
    <section className="banner">
      <div className="container-fluid2">
        <div className="row">
        <div className="col-md-6 mobileCOl">
          <div className="mobile_img">
                <img src={Game} className='img-fluid' alt="console" />
              </div>
          </div>
          <div className="col-md-6">
            <div className="banner_Content_single_item">
              <div className="banner_Title"  data-aos="fade-up" data-aos-duration="1000">
                <h3><span className='gradient'>ETHAN</span><span className='blink-soft gradient'>_</span>Empowering Digital Gaming.</h3>
              </div>
              <div className="banner_pera"data-aos="fade-up" data-aos-duration="1500">
                <p>Ethan, a forward-thinking blockchain company dedicated to pioneering cutting-edge decentralized applications, is thrilled to unveil its groundbreaking NFT Staking Platform, designed to operate seamlessly on the Binance Chain.</p>
              </div>
              <div className="banner_button"data-aos="fade-up" data-aos-duration="2500">
                <a href="#"><span>View all</span></a>
                <a href="#" className='newSkewButton'><span className='gradient-text skewNew'>Play Now</span></a>
              </div>
            </div>
          </div>


       
        </div>
      </div>
      <div className="right_single_item">
              <div className="banner_img">
                <img src={Game} className='img-fluid' loading='lazy' alt="console"  />
              </div>
            
            </div>
            
    </section>
 <div className="boxshadow">

 </div>
 <div className="boxshadow boxshadow2">
  
  </div>
    </Wrapper>
  )
}

export default Banner
