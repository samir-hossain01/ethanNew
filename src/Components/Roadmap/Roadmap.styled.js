/** @format */


import styled from "styled-components";

const Wrapper = styled.div`
.roadmap{
    background: #D9D9D9;
    padding: 80px 0px;

    font-family: 'Poppins', sans-serif;
}
.col-md-12{
    display: flex;
    padding-bottom: 60px;
    justify-content: center;
}
.roadmap_single_item{
    min-height: 230px;

border-bottom: 5px solid black;
padding: 8px 0px;
padding-left: 40px ;
padding-right: 25px;



border-width: 5px; 
  /* border-style: solid;  */
  border-bottom: 5px solid transparent;
  border-image: linear-gradient(90deg, rgba(223,1,0,1) 0%, rgba(223,1,96,1) 60%, rgba(222,0,199,1) 100%); 
  border-image-slice: 1; 
  /* padding: 10px;  */
}
.roadmap_single_item2{
    border-bottom: 0px;
    border-top: 5px solid ;
    border-left: 5px solid ;
    border-right: 5px solid ;
}
.roadmap_title{
    display: flex;
    align-items: center;
    column-gap: 15px;
}
.circle{
    background-color: black;
    width: 27px;
    height: 27px;
    border-radius: 50%;
}
.roadmap_title h3{
    font-size: 36px;
    font-weight: 600;
}
.roadmapList{
    margin-top: 15px;
}
.roadmapList ul{}
.roadmapList ul li{
    font-family: 'Syne', sans-serif;
    margin-bottom: 10px;
}
@media (max-width: 992px) {
    .roadmap_single_item{
        min-height: 250px;
    }
    
}

@media (max-width: 767.98px) {
    .roadmap_single_item{
        min-height: 310px;
        padding-left: 30px;
        padding-right: 15px;
    }
    .roadmap_title h3 {
    font-size: 30px;
  
}
.circle {

    width: 20px;
    height: 20px;
 
}
    
}


`;
export default Wrapper;
