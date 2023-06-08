import React from 'react';
import './History.css';
import { Link } from 'react-router-dom';
export default function POs() {
  return (
    <>
      {/* <Navbar /> */}
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
          <h3>Hisdop</h3>

          <div class="title-section text-center about1">
            <span></span>
          </div>
          <div class="r1 about2">
            <div class="c1">
              <p className="p2">
                The institute is committed to the challenging task of
                development of technical education by preparing seasoned
                graduates in highly sophisticated field of engineering and
                technology. Development of India as an emerging industrial power
                is a demanding exercise as it involves the combination of cost
                effectiveness and efficiency along with producing world-class
                technology at the cutting edge. For about five decades we have
                been doing it with sincerity and commitment at NIT Raipur. At
                present the institute offers graduate level courses in twelve
                disciplines.
              </p>
              <img src='https://i.postimg.cc/tghyxPQn/nehru2.gif' alt="Image 1" className="image-right" />
            <p className="p2">
              This is the second paragraph of the content. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vestibulum varius, felis in
              porttitor tincidunt, lacus ante pellentesque ligula, ac varius
              sapien arcu et neque. Curabitur at nunc efficitur, sollicitudin
              nulla at, tempor quam.
            </p>
            <img src='https://i.postimg.cc/tghyxPQn/nehru2.gif' alt="Image 2" className="image-left" />
            </div>
          </div>
        </div>
      </div>

      {/* <h1 className="consulting">Publications</h1> */}
      {/* <Footer /> */}
    </>
  );
}
