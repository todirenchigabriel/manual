import React from 'react';
import { ReactComponent as Logo } from '../../../../assets/images/Logo.svg';
import { ReactComponent as FacebookIcon } from '../../../../assets/images/FacebookIcon.svg';
import { ReactComponent as TwitterIcon } from '../../../../assets/images/TwitterIcon.svg';
import { ReactComponent as GoogleIcon } from '../../../../assets/images/GoogleIcon.svg';
import './landingFooter.scss';

const LandingFooter = () => {
  return (
    <footer className='footer'>
      <div className='footer_info'>
        <div className='footer_logo'>
          <Logo />
        </div>
        <div className='links-section'>
          <div className='links-section_container'>
            <span className='section-title'>Product</span>
            <a href='#'>Popular</a>
            <a href='#'>Trending</a>
            <a href='#'>Guided</a>
            <a href='#'>Products</a>
          </div>
          <div className='links-section_container'>
            <span className='section-title'>Compnay</span>
            <a href='#'>Press</a>
            <a href='#'>Mission</a>
            <a href='#'>Strategy</a>
            <a href='#'>About</a>
          </div>
          <div className='links-section_container'>
            <span className='section-title'>Info</span>
            <a href='#'>Support</a>
            <a href='#'>Customer Service</a>
            <a href='#'>Get Started</a>
          </div>
          <div className='links-section_container'>
            <span className='section-title'>Follow Us</span>
            <div className='social-media-links'>
              <a href='#'>
                <FacebookIcon />
              </a>
              <a href='#'>
                <GoogleIcon />
              </a>
              <a href='#'>
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='footer_copyright'>
        <span>2022 Manual. All rights reserved</span>
      </div>
    </footer>
  );
};

export default LandingFooter;
