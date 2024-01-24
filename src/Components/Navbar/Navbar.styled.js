/** @format */


import styled from "styled-components";


const Wrapper = styled.div`
nav{
    padding: 8px 0px;
    -webkit-box-shadow: 0px 27px 56px -21px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 27px 56px -21px rgba(0,0,0,0.75);
box-shadow: 0px 27px 56px -21px rgba(0,0,0,0.75);
position: fixed;
width: 100%;
z-index: 99999;
background-color: black;
}
.navbarSingleItem{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 100%;
}
.menu{}
.menu ul{
    display: flex;
    align-items: center;
    column-gap: 20px;
}
.menu ul li{
    list-style: none;
    display: flex;

}
.menu ul li a{
    text-decoration: none;
    color: #FEFEFE;
    transition: 0.5s ease;

}
.menu ul li a:hover{
    color: #2571E9;
    transform: scale(1.1);
}

.nav_button{
    display: flex;
    column-gap: 20px;
}
.nav_button a{
    text-decoration: none;
    font-family: 'VT323', monospace;
    color: white;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    transition: 0.5s ease;
}
.nav_button a:nth-child(2){
    background-color: #2571E9;
}
.nav_button a:hover{
    transform: scale(1.1);
}
@media (max-width:1192px) {
.nav_button a {
 
    padding: 10px 11px;
 
}
.nav_logo img{
    width: 150px;
}
.menu ul {
   
    column-gap: 12px;
}
    
}
@media (max-width: 992px) {
    nav{
        display: none;
    }
    
}
`;
export default Wrapper;
