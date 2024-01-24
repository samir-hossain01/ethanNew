/** @format */


import styled from "styled-components";

import SliderBg from "../../images/marqueBg.png"
const Wrapper = styled.div`

@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider {
 background: url(${SliderBg});
  background-repeat: no-repeat;
  background-size: cover;

  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  /* transform: skew(0deg, -1deg); */
  -webkit-box-shadow: 24px -47px 89px 34px rgba(0,0,0,0.75);
-moz-box-shadow: 24px -47px 89px 34px rgba(0,0,0,0.75);
box-shadow: 24px -47px 89px 34px rgba(0,0,0,0.75);
margin-top: 20px;
z-index: 65656;

}
.slider::before, .slider::after {
  /* background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%); */
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
 .slider .slide-track {
    -webkit-animation: scroll 40s linear infinite;
    -webkit-animation: scroll 40s linear infinite;
    animation: scroll 40s linear infinite;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: calc(660px * 8);
    column-gap: 50px;
    align-items: center;
    padding: 8px 0px;
}

.slider .slide {

  width: 480px;
}
@media (max-width:992px) {
 .slider .slide-track {
  
    width: calc(660px * 6);
  
}
    
}
`;
export default Wrapper;
