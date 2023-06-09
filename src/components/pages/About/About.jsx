import React from 'react';
import './About.css';
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
                <Link to="/About">History</Link>
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
          <div className="r1 about2">
            <div className="c1">
              <div className="c2">
                <img
                  src="https://i.postimg.cc/tghyxPQn/nehru2.gif"
                  alt="Image 1"
                  className="image-right"
                />
              </div>
              <div className="c2">
                <p className="p1">
                The first President of independent India honorable Dr. Rajendra Prasad laid the Foundation stone of the college building on 14th September 1956. The construction work was completed in 1962 and inauguration was on 14th March 1963 by India's first Prime Minister Pt. Jawaharlal Nehru. After independence and with reorganisation of the state of Madhya Pradesh, the government attention was directed towards giving priority to overall development of technical education.
                </p>
              </div>
              </div>
              <div className = "c1">
              <div className="c">
              <p className="p2">Till as late as 1956 there were only three technical institutes in the country offering courses in the important fields of Mining and Metallurgical Engineering. In view of this fact and also with an aim of harnessing the ample mineral resources of the region, this institute was set-up on 1st May 1956 as Government College of Mining and Metallurgy. The first session of the college commenced from 1st July 1956 with the admission of 15 students each in Mining and Metallurgy Engineering.
            </p>
            </div>
            </div>
            <div className="c1">
              <div className="c2">
                <p className="p2">
                  This is the second paragraph of the content. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Vestibulum varius,
                  felis in porttitor tincidunt, lacus ante pellentesque ligula,
                  ac varius sapien arcu et neque. Curabitur at nunc efficitur,
                  sollicitudin nulla at, tempor quam.
                </p>
              </div>
              <div className="c2">
                <img
                  src="https://i.postimg.cc/tghyxPQn/nehru2.gif"
                  alt="Image 2"
                  className="image-left"
                />
              </div>
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