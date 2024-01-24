import React, { useEffect } from 'react';
import Wrapper from './Tokenmics.styled'
import Elipse from "../../images/ellipse.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
function Tokenmics() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
      }, []);
  return (
 <Wrapper id='tokenmics'>
  <section className="tokenmics" >
    <div className="container-fluid2">
        <div className="row">
            <div className="col-md-12">
                <div className="title">
                    <h3 className="common_title   gradient3">
                    TOKENOMICS<span className='blink-soft  gradient3'>_</span>
                    </h3>
                </div>
            </div>
            <div className="col-md-7">
                <div className="tokemics_elipse" data-aos="zoom-in" data-aos-duration="1200">
                    <img src={Elipse} className='img-fluid' loading='lazy' alt="elipse" />
                </div>
            </div>

            <div className="col-md-5">
                <div className="token_Deta_item">
                    <div className="token_content">
                        <h5>TOKEN DETAILS</h5>
                    {/* single item start here */}
                        <div className="token_common_item"data-aos="fade-up" data-aos-duration="1400">
                            <div className="name">
                                <h4>Name</h4>
                            </div>
                            <div className="symbol">
                                <h4>-</h4>
                            </div>
                            <div className="token">
                                <h4>Ethan Token</h4>
                            </div>
                        </div>
                        {/* single item end */}

                                         {/* single item start here */}
                                         <div className="token_common_item"data-aos="fade-up" data-aos-duration="1600">
                            <div className="name">
                                <h4>Name</h4>
                            </div>
                            <div className="symbol">
                                <h4>-</h4>
                            </div>
                            <div className="token">
                                <h4>Ethan Token</h4>
                            </div>
                        </div>
                        {/* single item end */}
                                         {/* single item start here */}
                                         <div className="token_common_item"data-aos="fade-up" data-aos-duration="1800">
                            <div className="name">
                                <h4>Name</h4>
                            </div>
                            <div className="symbol">
                                <h4>-</h4>
                            </div>
                            <div className="token">
                                <h4>Ethan Token</h4>
                            </div>
                        </div>
                        {/* single item end */}
                                         {/* single item start here */}
                                         <div className="token_common_item"data-aos="fade-up" data-aos-duration="2000">
                            <div className="name">
                                <h4>Name</h4>
                            </div>
                            <div className="symbol">
                                <h4>-</h4>
                            </div>
                            <div className="token">
                                <h4>Ethan Token</h4>
                            </div>
                        </div>
                        {/* single item end */}
                                         {/* single item start here */}
                                         <div className="token_common_item"data-aos="fade-up" data-aos-duration="2200">
                            <div className="name">
                                <h4>Name</h4>
                            </div>
                            <div className="symbol">
                                <h4>-</h4>
                            </div>
                            <div className="token">
                                <h4>Ethan Token</h4>
                            </div>
                        </div>
                        {/* single item end */}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
 </Wrapper>
  )
}

export default Tokenmics
