import React from 'react'
import Wrapper from './Navbar.styled'
import Logo from "../../images/navlogo.png"
import { NavHashLink as Link } from 'react-router-hash-link';
import MobileMenu from '../MobileMenu/MobileMenu';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Navbar() {
  return (
<Wrapper>
<nav>
    <div className="container-fluid2">
        <div className="row">
            <div className="navbarSingleItem">
                <div className="nav_logo"data-aos="fade-down" data-aos-duration="1000">
<a href="/"><img src={Logo} className='img-fluid' loading='lazy' alt="logo" /></a>
                </div>
                <div className="menu">
                    <ul>

                    <li data-aos="fade-down" data-aos-duration="1200">
                    <Link smooth to="/#">
          Home
        </Link>
                    </li>
                    <li data-aos="fade-down" data-aos-duration="1400">
                    <Link smooth to="/#feature">
          Features
        </Link>
                    </li>
                    <li  data-aos="fade-down" data-aos-duration="1600">
                    <Link smooth to="/#roadmap">
          Roadmap
        </Link>
        
                    </li>
                    <li data-aos="fade-down" data-aos-duration="1800">
                    <Link smooth to="/#tokenmics">
          Tokenmics
        </Link>
        
                    </li>
                    <li data-aos="fade-down" data-aos-duration="2000">
                    <Link smooth to="/#community">
                    Community
        </Link>
                    </li>
           
                    </ul>
                </div>
                <div className="nav_button">
                    <a href="#" data-aos="fade-down" data-aos-duration="2200">Token Contract</a>
                    <a href="#" data-aos="fade-down" data-aos-duration="2400">WhitePaper</a>
                </div>
            </div>
        </div>
    </div>
</nav>
<MobileMenu />
</Wrapper>
  )
}

export default Navbar
