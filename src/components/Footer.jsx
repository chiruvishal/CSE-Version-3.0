import React from 'react';
import { TfiLocationPin } from 'react-icons/tfi';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

import { Link } from 'react-router-dom';

import './Footer.css';
const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <footer id="dk-footer" className="dk-footer">
        <div className="container">
          <div className="row1">
            <div className="two-column">
              <div className="col-md-121 col-lg-4">
                <div className="dk-footer-box-info">
                  <a href="index.html" className="footer-logo">
                    <img
                      src="https://i.postimg.cc/2js2MXj5/Logowhite.png"
                      alt="footer_logo"
                      className="img-fluid temp"
                    />
                  </a>
                  <p className="footer-info-text p1">
                    "Exploring Boundless Horizons, Empowering Future Innovators.
                    Nationa Institute of Technology Raipur: Igniting Minds,
                    Shaping Futures."
                  </p>
                  <div class="connect-section">
                    <p class="connect-text">Connect with us:</p>
                    <div class="social-icons-wrapper">
                      <button class="btnp">
                        <a href="#">
                          <i class="fab fa-facebook"></i>
                        </a>
                      </button>
                      <button class="btnp">
                        <a href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </button>
                      <button class="btnp">
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </button>
                      <button class="btnp">
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-121 col-lg-4">
                <div className="contact-us">
                  <div className="contact-info">
                    <p className="contact-info-item">
                      <span className="iconf">
                        <TfiLocationPin size={32} />
                      </span>
                      National Institute of Technology Raipur G.E. Road, Raipur
                      Chhatisgarh - 492010
                    </p>
                    <p className="contact-info-item">
                      <span className="iconf">
                        <AiOutlinePhone size={32} />
                      </span>
                      Phone:(+91)-771-2254200
                    </p>
                    <p>
                      <a href="#" className="contact-info-link">
                        <span className="iconf">
                          <AiOutlineMail size={32} />
                        </span>
                        Email- director@nitrr.ac.in registrar@nitrr.ac.in
                      </a>
                    </p>
                  </div>
                </div>
                <div className="footer-widget footer-left-widget">
                  <div className="section-heading">
                    <h3>Useful Links</h3>
                    <span className="animate-border border-black"></span>
                  </div>
                  <ul>
                    <li>
                      <Link to="/" onClick={handleLinkClick}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/StudentSection" onClick={handleLinkClick}>
                        Student Section
                      </Link>
                    </li>
                    <li>
                      <Link to="/Gallery" onClick={handleLinkClick}>
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/Achievements" onClick={handleLinkClick}>
                        Achievements
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/Placements" onClick={handleLinkClick}>
                        Placements
                      </Link>
                    </li>
                    <li>
                      <Link to="/Course" onClick={handleLinkClick}>
                        Course
                      </Link>
                    </li>
                    <li>
                      <Link to="/Research-Areas" onClick={handleLinkClick}>
                        Research Areas
                      </Link>
                    </li>
                    <li>
                      <Link to="/ContactUs" onClick={handleLinkClick}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-121 col-lg-4">
              <div className="section-heading glance">
                <h3 style={{ color: 'white' }}>A Glance</h3>
                <span className="animate-border1"></span>
              </div>
              <div className="player-wrapper">
                <div>
                  <iframe
                    className="container"
                    type="text/html"
                    width="635px"
                    height="413px"
                    src="https://www.youtube.com/embed/tSQVgiwr3lU?autoplay=1&rel=0&modestbranding=1&loop=1"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span>Developed By ACE Web Team</span>
              </div>
              <div className="col-md-6">
                <div className="copyright-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
