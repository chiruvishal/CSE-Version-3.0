import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleMenuToggle();
  };

  return (
    <div className={`head-box ${isLogoScrolled ? "scrolled" : ""}`}>
      <header id="header" className={isLogoScrolled ? "scrolled1" : ""}>
        <div className="clear wrap">
          <div className="logo fl">
            <a href="" title="">
              <img
                className={`logo1 ${isLogoScrolled ? "scrolled" : ""}`}
                src="https://i.postimg.cc/gc66cnjk/4-F4-BA61-B-8331-4369-A3-FC-24-D6-F239-A800-preview-rev-1.png"
              />
            </a>
          </div>
        </div>
      </header>
      <div id="google_translate_element"></div>
      <nav className={`animenu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <label htmlFor="menu-toggle" className="menu-toggle">
            <i className="fas fa-bars"></i>
          </label>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line"></span>
        </div>
        <ul className="animenu__nav wrap">
          <li className="parent-menu">
            <Link to="/" className="icon" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="parent-menu">
            <a className="hover1">Academics</a>
            <div className="jt"></div>
            <ul className="animenu_nav_child">
              <li>
                <Link to="/Course" onClick={handleLinkClick}>
                  Course
                </Link>
              </li>
              <li>
                <Link to="/Academics" onClick={handleLinkClick}>
                  Programs Offered
                </Link>
              </li>

              <li>
                <Link to="/POs" onClick={handleLinkClick}>
                  POs, PEOs, PSOs
                </Link>
              </li>
            </ul>
          </li>
          <li className="parent-menu">
            <Link to="/Faculty" onClick={handleLinkClick}>
              People
            </Link>
          </li>
          <li className="parent-menu">
            <a className="hover1">Research Areas</a>
            <div className="jt"></div>
            <ul className="animenu_nav_child">
              <li>
                <Link to="/Research-Areas" onClick={handleLinkClick}>
                  Areas
                </Link>
              </li>
              {/* <li>
                <Link to="/Project" onClick={handleLinkClick}>
                  Project
                </Link>
              </li> */}

              <li>
                <Link to="/Publications" onClick={handleLinkClick}>
                  Publications
                </Link>
              </li>
            </ul>
          </li>
          <li className="parent-menu">
            <a className="hover1">Student Zone</a>
            <div className="jt"></div>
            <ul className="animenu_nav_child">

              <li>
                <Link to="/Gallery" onClick={handleLinkClick}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/StudentSection" onClick={handleLinkClick}>
                  Student Section
                </Link>
              </li>
              <li>
                <Link to="/Achievements" onClick={handleLinkClick}>
                  Achievements
                </Link>
              </li>
            </ul>
          </li>
          <li className="parent-menu">
            <Link to="/Placements" onClick={handleLinkClick}>
              Placements
            </Link>
          </li>
          <li className="parent-menu">
            <Link to="/ContactUs" onClick={handleLinkClick}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
