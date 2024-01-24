/** @format */


import styled from "styled-components";

const Wrapper = styled.div`
/* OffCanvasMenu.css */
display: none;
@media (max-width:992px) {
  display: block;
  background-color: black;
  position: fixed;
  width: 100%;
  z-index: 656599;
  padding: 8px 0px;
}
 .offcanvas-menu {
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100%;
    background-color: #333;
    -webkit-transition: left 0.3s ease-in-out;
    transition: right 0.3s ease-in-out;
    z-index: 5454545488;
    background: #000518;
}

.offcanvas-menu.open {
  left: auto;
  right: 0;
}

.toggle-button {
  position: fixed;
  top: 16px;
  left: auto;
  right: 20px;
  font-size: 20px;
  background: none;
  color: #fff;
  border: none;
  cursor: pointer;
}

.menu-content {
  padding: 20px;
  color: #fff;
  margin-top: 80px;
}

.menu-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-content li {
  padding: 10px 0;
  cursor: pointer;
}

.menu-content li:hover {
  background-color: #555;
}
.logo{
    padding-left: 20px;
}
.logo img{
  width: 140px;
}
.icon{
  font-size: 28px;
}
.mobileButton{
  display: flex;
  column-gap: 10px;
  justify-content: space-between;
  position: absolute;
  top: auto;
  bottom: 20px;
  width: 85%;
  align-items: center;

}
.mobileButton a{
  text-decoration: none;
  color: white;
  font-family: 'VT323', monospace;
  
  font-size: 18px;
  border-radius: 5px;
}

.mobileButton a:nth-child(2){
  padding: 10px 15px;
    background-color: #2571E9;
}
`;
export default Wrapper;
