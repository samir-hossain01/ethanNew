/** @format */


import styled from "styled-components";
import Bg from "../../images/bg_token.png"
const Wrapper = styled.div`
.tokenmics{
    padding-top: 30px;
    padding-bottom: 80px;
background: url(${Bg});
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;

}
.title{
    padding-bottom: 60px;
}
.col-md-12{
    display: flex;
    justify-content: center;
}
.container-fluid2{
padding-left: 10px;
padding-right: 50px;
}
.row{
    align-items: center;
}
.token_Deta_item{
    padding: 0px 40px 0px 15px;
}

.token_content{}
.token_content h5{
    font-size: 32px;
    font-weight: 700;
    color: white;
    text-align: center;
}
.token_content h4{
    font-size: 16px;
    font-weight: 700;
    color: white;
}
.token_common_item{
    display: flex;
    align-items: center;
    justify-content: space-between;
padding: 10px 25px;
background-color: #102644;
border-radius: 80px;

border: 1px solid beige;
    -webkit-box-shadow: -8px 48px 109px 130px rgba(255,255,255,1);
    -moz-box-shadow: -8px 48px 109px 130px rgba(255,255,255,1);
    box-shadow: 9px 3px 25px -13px rgb(47 158 240);
    margin-bottom: 30px;


 
}
.name{
    flex:  0 0 35%;
    max-width: 35%;
}
.name h4{}
.symbol{
    flex: 0 0 30%;
    max-width: 30%;
}
.symbol h4{
    text-align: center;
}
.token{
    flex:  0 0 35%;
    max-width: 35%;
}
.token h4{
    text-align: end;
}
@media (max-width: 1192px) {


 .token_Deta_item {
    padding: 0px 10px 0px 15px;
}
    
}
@media (max-width: 992px) {


.token_Deta_item {
   padding: 0px 5px 0px 5px;
}
 .token_content h4 {
    font-size: 11px;

}
.token_common_item {

    margin-bottom: 20px;
}
   
}
@media (max-width: 767.98px) {


    .col-md-7,.col-md-5 {
    flex: 0 0 100%;
    max-width: 100%;
}
 .token_content h4 {
    font-size: 11px;

}
.token_common_item {

    margin-bottom: 20px;
}
   .container-fluid2{
    padding-left: 15px;
    padding-right: 15px;
   }
}
`;
export default Wrapper;
