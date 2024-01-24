/** @format */


import styled from "styled-components";
import Bg from "../../images/banner2.png"
const Wrapper = styled.div`
.banner{
background: url(${Bg});
min-height: 90vh;
background-size: cover;
background-position: bottom;
position: relative;
overflow: hidden;
display: flex;
align-items: end;
}
.banner_Content_single_item{
    padding-bottom: 100px;
}
.banner_Title{}
.banner_Title h3{
    font-size: 46px;
    font-weight: 700;
    color: white;
}
.banner_Title h3 span{
    /* background-clip: text;
  color: transparent; */
/* background-color: #26BFED; */
}
.banner_pera{
    padding: 20px 0px;
    
}
.banner_pera p{
    color: white;
    line-height: 30px;
}
.banner_button{
    display: flex;
    column-gap: 20px;
   
}

.banner_img{
    position: absolute;
    width: 52%;
    left: auto;
    top: 0;
    right: 0;
    top: auto;
    bottom: -10px;
    z-index: 22;
}
.mobileCOl{
    display: none;
}
@media (max-width: 1192px) {
 .banner_Content_single_item {
    padding-bottom: 40px;
}
 .banner_Title h3 {
    font-size: 35px;
    
}
.banner_button a {
   
    min-width: 184px;
 
}
 .banner_img {

    width: 50%;

    bottom: -6px;

}

}
@media (max-width: 992px) {
    .mobileCOl{
        display: block;
    }
 .mobile_img{
    text-align: center;
 }
 .mobile_img img{
    width: 65%;
 }
    .right_single_item{
        display: none;
    }
 .banner {
padding-top: 80px;
    min-height: auto;
 
}
    .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
}
.container-fluid2 {
    
    padding-right: 40px;
    padding-left: 40px;

}
.banner_Content_single_item {
   padding-top: 20px;
    text-align: center;
}
.banner_button {

    justify-content: center;
}
}
@media (max-width: 575.98px) {
 
 .mobile_img img{
    width: 100%;
 }
    .right_single_item{
        display: none;
    }
 .banner {
padding-top: 80px;
    min-height: auto;
 
}

.container-fluid2 {
    
    padding-right: 15px;
    padding-left: 15px;

}
.banner_Content_single_item {
   padding-top: 20px;
    text-align: center;
}
.banner_Title h3 {
    font-size: 25px;
}
.banner_button {

    display: block;
    padding: 0px 15px;
}
 .banner_button a {

    width: 224px;
    margin-bottom: 20px;
}
}

.boxshadow,.boxshadow2{
    position: absolute;
    left: auto;
    right: 32%;
    height: 80px;
    width: 18%;
    background-color: wheat;
    background-color: #020202;
    ebkit-box-shadow: 2px -19px 48px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px -19px 48px -4px rgba(0,0,0,0.75);
    box-shadow: 2px -19px 48px -4px rgba(0,0,0,0.75);
    top: auto;
    bottom: 35px;
    z-index: 546;
    filter: blur(12px);
}
.boxshadow2{
    left: auto;
    right: 0;
}
@media (max-width: 1192px) {
 .boxshadow {

    right: 32%;
    height: 55px;
    width: 35%;
   
    bottom: 25px;
   
}
.boxshadow2{
    left: auto;
    right: 0;
}
    
}
@media (max-width: 992px) {

    .boxshadow,.boxshadow2{
        display: none;
    }
}
@media (max-width: 575.98px) {
    .mobileCOl{
        display: none;
    }
    
}
`;
export default Wrapper;
