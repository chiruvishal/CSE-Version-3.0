import React from 'react';
import './History.css';
import { Link } from 'react-router-dom';
export default function POs() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: 'url(https://i.postimg.cc/9fpN7VnW/IMG-2585.jpg)',
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: '60px' }}
            >
              <div className="green-line-text">About</div>
            </div>
          </div>
        </div>
        <div className="main-box">
          <div className="side-box">
            <div className="side-container">
              <div className="side-top-box">
                <p>About US</p>
              </div>

              <ul className="side-link">
                <li>
                  <div className="side-border-left" />
                  <Link to="/History">History</Link>
                </li>
                <li>
                  <div className="side-border-left" />
                  <Link to="/VisionAndMission">Vision And Mission</Link>
                </li>
                <li>
                  {' '}
                  <div className="side-border-left" />
                  <Link to="/POs">POs,PEOs,PSOs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="drops">
            <h3>History</h3>

            <div class="title-section text-center about1">
              <span></span>
            </div>
            <div class="r1 about2">
              <div class="c1">
                <p className="p2">
                  The institute is committed to the challenging task of
                  development of technical education by preparing seasoned
                  graduates in highly sophisticated field of engineering and
                  technology. Development of India as an emerging industrial
                  power is a demanding exercise as it involves the combination
                  of cost effectiveness and efficiency along with producing
                  world-class technology at the cutting edge. For about five
                  decades we have been doing it with sincerity and commitment at
                  NIT Raipur. At present the institute offers graduate level
                  courses in twelve disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <h1 className="consulting">Publications</h1> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
