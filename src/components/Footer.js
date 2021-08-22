import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>How it works</Link>
            <Link to='/about'>What we do</Link>
            <Link to='/about'>Investors</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/info'>Contact</Link>
            <Link to='/info'>Support</Link>
            <Link to='/sign-up'>Sign Up</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Careers</h2>
            <Link to='/info'>Jobs</Link>
            <Link to='/info'>Agency</Link>
            <Link to='/info'>Newsletter</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link target='_blank' to={{ pathname: "https://www.instagram.com" }}>Instagram</Link>
            <Link target='_blank' to={{ pathname: "https://www.facebook.com" }}>Facebook</Link>
            <Link target='_blank' to={{ pathname: "https://www.twitter.com" }}>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/home' className='social-logo'>
            <i class='fas fa-globe-americas' />
              LDTR
            </Link>
          </div>
          <small class='website-rights'>LDTR © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: "https://www.facebook.com" }}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://www.twitter.com" }}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;