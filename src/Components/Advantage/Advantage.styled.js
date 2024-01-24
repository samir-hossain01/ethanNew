/** @format */


import styled from "styled-components";

const Wrapper = styled.div`
.advantage{
    padding: 80px 0px;
}
.row{
    align-items: center;
}
.advantage_item{
    padding-right: 80px;
}
.advantage_item h4{
    font-size: 36px;
    font-weight: 700;
    color: white;
}
.advantage_item p{
    color: #494949;
    padding: 20px 0px;
}
@media (max-width: 1192px) {
  .advantage_item {
    padding-right: 0px;
}
.container-fluid2 {

    padding-right: 60px;
    padding-left: 60px;

}
}
@media (max-width: 992px) {
  .advantage_item {
    padding-right: 0px;
}
.container-fluid2 {

    padding-right: 40px;
    padding-left: 40px;

}
 .advantage_item h4 {
    font-size: 27px;

}
.advantage_item p {
  
    font-size: 14px;
}

}
@media (max-width: 767.98px) {
.col-md-5,.col-md-7{
    flex: 0 0 100%;
    max-width: 100%;
}
.row{
    flex-direction: column-reverse;
}
 .advantage_item {
    text-align: center;
    margin-top: 40px;
}
}
@media (max-width: 575.98px) {
    .container-fluid2 {
    padding-right: 15px;
    padding-left: 15px;
}
}
`;
export default Wrapper;
