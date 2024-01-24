import React from 'react'
import Wrapper from './Footer.styled'
import Logo from "../../images/logo.png"
import { Icon } from '@iconify/react';
function Footer() {
  return (
   <Wrapper>
<footer>
    <div className="container-fluid2">
       <div className="row">
       <div className="col-md-4">
            <div className="footerContent">
                <img src={Logo} className='img-fluid' loading='lazy' alt="logo" />

                <p>Ethan, a forward-thinking blockchain company dedicated to pioneering cutting-edge decentralized applications, is thrilled to unveil its groundbreaking NFT Staking Platform.</p>
            </div>
        </div>
        <div className="col-md-2">
            <div className="footer_menu">
                <h3>company</h3>
                <div className="list">
                    <ul>
                        <li>
                            <a href="#">products</a>
                        </li>
                        <li>
                            <a href="#">apps & games</a>
                        </li>
                        <li>
                            <a href="#">features</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-2">
        <div className="footer_menu">
                <h3>help</h3>
                <div className="list">
                    <ul>
                        <li>
                            <a href="#">support</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-2">
            <div className="footer_menu">
                <h3>resources</h3>
                <div className="list">
                    <ul>
                        <li>
                            <a href="#">youtube playlist</a>
                        </li>
                        <li>
                            <a href="#">how to - blog</a>
                        </li>
                        <li>
                            <a href="#">terms & conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
   <div className="col-md-12">
   <div className="copy_right">
            <div className="icons">
                <a href="#"><Icon icon="ri:twitter-fill" /></a>
                <a href="#"><Icon icon="bxl:facebook" /></a>
                <a href="#"><Icon icon="iconoir:instagram" /></a>
                <a href="#"><Icon icon="ic:round-discord" /></a>
              
            </div>
            <div className="copy-text">
                <p>© Copyright 2024, All Rights Reserved by ETHAN_</p>
            </div>
        </div>
   </div>
       </div>
    </div>
</footer>
   </Wrapper>
  )
}

export default Footer
