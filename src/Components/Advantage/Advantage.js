import React, { useState } from 'react';
import Wrapper from './Advantage.styled'
import VisibilitySensor from 'react-visibility-sensor';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Illusion from "../../images/Illustration.png"
function Advantage() {
    const [isVisible, setIsVisible] = useState(false);

    const onVisibilityChange = (visibility) => {
      if (visibility) {
        setIsVisible(true);
        AOS.refresh();
      }
    };
    
  return (
<Wrapper>

<VisibilitySensor onChange={onVisibilityChange} partialVisibility>
<section className="advantage">
    <div className="container-fluid2">
<div className="row">
<div className="col-md-5">
    <div className="advantage_item">
        <h4  data-aos="fade-up" data-aos-duration="1200">Advantages of NFT Staking</h4>
        <p  data-aos="fade-up" data-aos-duration="1500">Swift Transactions: Polygon serves as a Layer 2 scaling solution, offering rapid and cost-effective transactions,</p>
        <div className="banner_button"  data-aos="fade-up" data-aos-duration="1800">
                <a href="#"><span>Play Now</span></a>
           
              </div>
    </div>
</div>
<div className="col-md-7">
    <div className="advantage_img" data-aos="zoom-in" data-aos-duration="1000">
        <img src={Illusion} className='img-fluid' loading='lazy' alt="illusion" />
    </div>
</div>
</div>
    </div>
</section>
</VisibilitySensor>
</Wrapper>
  )
}

export default Advantage
