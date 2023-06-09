import React from 'react';
import $ from 'jquery';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import ReactPlayer from 'react-player';
import { TfiLocationPin } from 'react-icons/tfi';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { CiTwitter } from 'react-icons/ci';
import { FiMail } from 'react-icons/fi';
import { CiLinkedin } from 'react-icons/ci';
import { SlSocialInstagram } from 'react-icons/sl';
import './Footer.css';
const Footer = () => {
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
                      <a href="#" class="social-link facebook-link">
                        <i class="fab fa-facebook-f facebook-icon" />
                      </a>
                      <a href="#" class="social-link twitter-link">
                        <i class="fab fa-twitter twitter-icon" />
                      </a>
                      <a href="#" class="social-link instagram-link">
                        <i class="fab fa-instagram instagram-icon" />
                      </a>
                      <a href="#" class="social-link linkedin-link">
                        <i class="fab fa-linkedin-in linkedin-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-121 col-lg-4">
                <div className="contact-us">
                  <div className="contact-info">
                    <p>
                      <TfiLocationPin color="white" size="32" />
                      <span> </span>
                      National Institute of Technology Raipur G.E. Road, Raipur
                      Chhatisgarh - 492010
                    </p>
                    <p>
                      <AiOutlinePhone size={32} color="white" />
                      <span> </span> Phone:(+91)-771-2254200
                    </p>
                    <p>
                      <a
                        href="#"
                        style={{ color: 'white', textDecoration: 'none' }}
                      >
                        <AiOutlineMail size={32} />
                        <span> </span> Email- director@nitrr.ac.in
                        registrar@nitrr.ac.in
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
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Faq</a>
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
                    src="https://www.youtube.com/embed/tSQVgiwr3lU?autoplay=1&rel=0&modestbranding=1"
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
