/** @format */

import Bg from "../../images/footer3.png"
import styled from "styled-components";

const Wrapper = styled.div`
footer{
    background-color: #2D1E6B;
    background: url(${Bg});
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 120px;
    background-position: right;
}
.container-fluid2{
    padding-left: 15px;
    padding-right: 15px;
}
.footerContent{
    padding-right: 40px;
}
.footerContent img{}
.footerContent p{
    font-family: 'Source Sans 3', sans-serif;
    color:white;
  padding-top: 40px;
    line-height: 29px;
}
.footer_menu{}
.footer_menu h3{
    color: white;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
}
.list{}
.list ul{}
.list ul li{
    list-style: none;
    padding-bottom: 20px;
}
.list ul li a{
    text-transform: capitalize;
    text-decoration: none;

    font-size: 18px;
    font-family: 'Lato', sans-serif;
    color: white;
    word-spacing: 5px;
    transition: 0.5s ease;
    display: block;
}
.list ul li a:hover{
    transform: scale(1.1);
}
.copy_right{
    display: flex;
    align-items: center;
    column-gap: 40px;
    padding-top: 120px;
padding-bottom: 15px;
}
.icons{
    display: flex;
    align-items: center;
    column-gap: 15px;
}
.icons a{
    color: white;
    width: 28px;
    height: 28px;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all.5s ease-in;
}
.icons a:hover{
    background-color: #932cff;
    transform: translateY(-20px);
    border: 1px solid #932cff;
}
.copy-text{}
.copy-text p{
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    color: white;
}
@media (max-width:992px) {
    .col-md-4 {
    flex: 0 0 43.333333%;
    max-width: 43.333333%;
}
 .footerContent {
    padding-right: 0px;
}
.col-md-2 {
    flex: 0 0 16.67;
    max-width: 18.67%;
}
 .list ul li a {
  
    font-size: 15px;

    word-spacing: 1px;
}
    
}
@media (max-width:767.98px) {
    .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
}

.col-md-2 {
    flex: 0 0 16.67;
    max-width: 33.33%;
    margin-top: 20px;
}

footer{
   
    padding-top: 80px;
    
 
}
.copy_right{

    padding-top: 80px;
padding-bottom: 15px;
}
}
@media (max-width:767.98px) {


.col-md-2 {
    flex: 0 0 16.67;
    max-width: 50%;
    margin-top: 20px;
}

footer{
   
    padding-top: 60px;
   
 
}
.copy_right{

padding-top: 60px;
padding-bottom: 15px;
}
}
@media (max-width:575.98px) {
    .copy_right{
    display: block;
    text-align: center;
   
 
}
.icons{
justify-content: center;
}
.copy-text p{
    margin-top: 15px;
}
 footer {

    background-position: center;
}
    
}

`;
export default Wrapper;
