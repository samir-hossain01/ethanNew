/** @format */


import styled from "styled-components";

import SliderBg from "../../images/sliderbg.png"
import Bg from "../../images/featurebg.png"
const Wrapper = styled.div`
overflow-x: hidden;
background-position: center;
background-repeat: no-repeat;
background: url(${Bg});
.feature{
   padding-top: 80px;
   padding-bottom: 50px;

}
   .swiper-slide {

      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s ease-in-out;
    }
.swiper-slide-active {
      transform: scale(1.2); /* Adjust the scale factor as needed */
    }
    .swiper{
        width:100%;
    }
 .swiper-slide img{
    width: 100%;
 }
 .title{
    text-align: center;
 }

 .row{
    justify-content: center;
 }
 .swiper-wrapper {

    padding-top: 50px;
    padding-bottom: 40px;
}
.featuresButton{
   margin-top: 60px;
   display: flex;
   justify-content: center;
   column-gap: 20px;
}
.featuresButton a{
   padding: 12px 0px;
   min-width: 180px;
}
@media (max-width: 575.98px) {
   .feature{

   padding-left: 10px;
   padding-right: 10px;
}
.featuresButton{
display: block;
padding: 0px 15px;
text-align: center;
    position: relative;
    left: 15px;
}
.featuresButton a{
 width: 224px;
 margin-bottom: 25px;
}
.swiper-slide img{
   width: 80%;
}
   
}
`;
export default Wrapper;
