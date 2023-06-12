import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';



export default function Navbar() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        autoDisplay: false,
      },
      'google_translate_element'
    );
  };
  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isLogoScrolled, setIsLogoScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsLogoScrolled(scroll >= 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

  return (
    <div className={`head-box ${isLogoScrolled ? 'scrolled' : ''}`}>
      <header id="header" className={isLogoScrolled ? 'scrolled1' : ''}>
        <div className="clear wrap">
          <div className="logo fl">
            <a href="" title="">
              <img
                              className={`logo1 ${isLogoScrolled ? 'scrolled' : ''}`}
                src="https://i.postimg.cc/gc66cnjk/4-F4-BA61-B-8331-4369-A3-FC-24-D6-F239-A800-preview-rev-1.png"
              />
            </a>
          </div>
        </div>
      </header>
      <div id="google_translate_element"></div>
      <nav className={`animenu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <label for="menu-toggle" class="menu-toggle">
            <i class="fas fa-bars"></i>
          </label>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line"></span>
        </div>
        <ul className="animenu__nav wrap">
          <li className="parent-menu">
            <Link to="/" className="icon" onClick={handleMenuToggle}>
              Home
            </Link>
          </li>
          <li className="parent-menu">
            <Link to="/About" onClick={handleMenuToggle}>
              About
            </Link>
            <div className="jt"></div>
            <ul className="animenu_nav_child">
              <li>
                <Link to="/About" onClick={handleMenuToggle}>
                  History
                </Link>
              </li>
              <li>
                <Link to="/VisionAndMission" onClick={handleMenuToggle}>
                  Vision and Mission
                </Link>
              </li>
              <li>
                <Link to="/POs" onClick={handleMenuToggle}>
                  POs, PEOs, PSOs
                </Link>
              </li>
            </ul>
          </li>
          <li className="parent-menu">
            <Link to="/Faculty" onClick={handleMenuToggle}>
              People
            </Link>
          </li>
          <li className="parent-menu">
            <Link
              to="/Research-Areas"
              className="mobile-line-break"
              onClick={handleMenuToggle}
            >
              Research Areas
            </Link>
            <div className="jt"></div>
            <ul className="animenu_nav_child">
              <li>
                <Link to="/Research-Areas" onClick={handleMenuToggle}>
                  Areas
                </Link>
              </li>
              <li>
                <Link to="/Project" onClick={handleMenuToggle}>
                  Project
                </Link>
              </li>
              <li>
                <Link to="/Publications" onClick={handleMenuToggle}>
                  Publications
                </Link>
              </li>
            </ul>
          </li>
          <li className="parent-menu">
            <Link
              to="/Course"
              className="mobile-line-break"
              onClick={handleMenuToggle}
            >
              Student Zone
            </Link>
            <div className="jt"></div>
            <ul className="animenu_nav_child">
              <li>
                <Link to="/Course" onClick={handleMenuToggle}>
                  Course
                </Link>
              </li>
              <li>
                <Link to="/AluminiNetwork" onClick={handleMenuToggle}>
                  Alumni Network
                </Link>
              </li>
              <li>
                <Link to="/Gallery" onClick={handleMenuToggle}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/StudentSection" onClick={handleMenuToggle}>
                  Student Section
                </Link>
              </li>
              <li>
                <Link to="/Achievements" onClick={handleMenuToggle}>
                Achievements
                </Link>
              </li>
            </ul>
          </li>
          <li className="parent-menu">
            <Link to="/Placements" onClick={handleMenuToggle}>
              Placements
            </Link>
          </li>
          <li className="parent-menu">
            <Link to="/ContactUs" onClick={handleMenuToggle}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
