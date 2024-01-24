// OffCanvasMenu.js

import { useState } from 'react';
import Logo from "../../images/navlogo.png"
import { Link, animateScroll as scroll } from 'react-scroll';
import Wrapper from './MobileMenu.styled';
import { Icon } from '@iconify/react';

// import { Link } from 'react-router-dom';
const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
    scroll.scrollToTop({ smooth: true }); // Scrolls to the top of the page with smooth scrolling
  };
  return (
    <Wrapper>
      <div className="logo">
<a href="/"><img src={Logo} className='img-fluid' loading='lazy' alt="" /></a>
      </div>
    <div className={`offcanvas-menu ${isMenuOpen ? 'open' : ''}`}>
    <button onClick={toggleMenu} className="toggle-button">
        {isMenuOpen ? (
          <span className='icon'>
<Icon icon="carbon:close" />
          </span>
        ) : (
       <span className='icon'>
           <Icon icon="fe:bar" />
       </span>
        )}
      </button>

      <div className="menu-content">
        <ul>
          <li>
            <Link
              to="home"
              smooth={true}
              onClick={handleMenuItemClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="feature"
              smooth={true}
              onClick={handleMenuItemClick}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="roadmap"
              smooth={true}
              onClick={handleMenuItemClick}
            >
              Roadmap
            </Link>
          </li>
          
          <li>
            <Link
              to="tokenmics"
              smooth={true}
              onClick={handleMenuItemClick}
            >
              Tokenmics
            </Link>
          </li>
          <li>
            <Link
              to="/"
              smooth={true}
              onClick={handleMenuItemClick}
            >
              Community
            </Link>
          </li>
        </ul>
        <div className="mobileButton">
                    <a href="#">Token Contract</a>
                    <a href="#">WhitePaper</a>
                </div>
      </div>
      {isMenuOpen && (
        <div className="close-icon" onClick={toggleMenu}>
          Close Icon ✕
        </div>
      )}
    </div>
    </Wrapper>
  );
};

export default MobileMenu;
