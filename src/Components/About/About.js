import React, { useState } from 'react';
import Wrapper from './About.styled'
import Earth from "../../images/earth.png"
import AOS from 'aos';
import VisibilitySensor from 'react-visibility-sensor';
import 'aos/dist/aos.css';
function About() {


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

<section className="about" >
<div className="row">
    <div className="col-md-12">
        <div className="title">
            <h3 className='common_title gradient gradient2'> ABOUT US<span className='blink-soft gradient gradient2'>_</span></h3>
        </div>
    </div>
<div className="col-md-7">
<div className="earthImg"data-aos="zoom-in" data-aos-duration="1000">
        <img src={Earth} loading='lazy' className='img-fluid' alt="earth" />
    </div>
</div>
        <div className="col-md-5">

          <div className="about_content"data-aos="fade-up" data-aos-duration="3000">
                <h3>
                Introducing ETHAN_ Innovation.
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur. Pharetra mi quis arcu felis porttitor eget consectetur. Sed amet ridiculus sit nullam euismod. At mattis diam dui duis felis sem posuere lectus. Tincidunt a quis ornare mauris mauris aliquet interdum. Ac volutpat dolor quam adipiscing amet vitae in.</p>

                <div className="banner_button aboutButton">
                <a href="#"><span>Learn More</span></a>
     
              </div>
            </div>
          </div>
        </div>
 
   
</section>
</VisibilitySensor>
    </Wrapper>
  )
}

export default About
