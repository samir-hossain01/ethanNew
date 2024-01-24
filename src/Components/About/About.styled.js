/** @format */


import styled from "styled-components";


const Wrapper = styled.div`
.about{
    position: relative;
    padding: 120px 0px;
    /* height: 80vh; */
    display: flex;
    align-items: center;
    overflow-x: hidden;
}
.row{
    align-items: center;
}
.col-md-6{
    /* margin-left: 50%; */
    padding-right: 20px;
    
}
.about_content{
    color: white;
    padding-right: 20px;
}
.about_content h3{
    font-size: 38px;
    letter-spacing: 6px;
    font-weight: 600;
}
.about_content p{
    color: #E1E1E1;
    padding-top: 15px;
    line-height: 33px;
    padding-bottom: 25px;
}
.earthImg{
    padding-right: 80px;
}
.earthImg img{
    width: 100%;
}
.title{
 
    padding-bottom: 40px;
}

.col-md-12{
    display: flex;
    justify-content: center;
}
.aboutButton{
    margin-top: 20px;
}

@media (max-width: 1192px) {
    .col-md-7 {
    flex: 0 0 50.333333%;
    max-width: 58.333333%;
}
.col-md-5 {
    flex: 0 0 49.666667%;
    max-width: 49.666667%;
}
 .about_content h3 {
    font-size: 34px;

  
}
    
}
@media (max-width: 992px) {
 .about {

    padding: 80px 0px;
  
}
 .about_content h3 {
    font-size: 23px;
    letter-spacing: 3px;

  
}
 .about_content p {
line-height: 27px;

    font-size: 13px;
}
    
}

@media (max-width: 767.98px) {

.about_content h3 {
   font-size: 22px;
   letter-spacing: 3px;

 
}
 .col-md-7 {
   
    flex: 0 0 45.333333%;
    max-width: 45.333333%;
}
 .col-md-5 {

    flex: 0 0 55.666667%;
    max-width: 54.666667%;
}  
.earthImg {
    padding-right: 0;
}
}


@media (max-width: 575.98px) {

.about_content h3 {
   font-size: 22px;
   letter-spacing: 3px;

 
}
 .col-md-7 {
   
    flex: 0 0 100%;
    max-width: 100%;
}
 .col-md-5 {

    flex: 0 0 100%;
    max-width: 100%;
}  
.earthImg {
    padding-right: 0;
    padding-right: 15px;
}
.about_content {

    padding-right: 20px;
    text-align: center;
    margin-top: 40px;
    padding: 0px 15px;
}
}
`;
export default Wrapper;
