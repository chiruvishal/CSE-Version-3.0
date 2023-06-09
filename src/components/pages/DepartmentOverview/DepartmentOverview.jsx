import React from 'react';
import './DepartmentOverview.css';

import NewsAndAnnouncement from './components/pages/NewsAndAnnouncement/NewsAndAnnouncement';
import Events from './components/pages/Events/Events';

export default function DepartmentOverview() {
  return (
    <>
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
        <h1 className="consulting">DepartmentOverview</h1>

        <NewsAndAnnouncement />
        <Events />
      </div>
    </>
  );
}
