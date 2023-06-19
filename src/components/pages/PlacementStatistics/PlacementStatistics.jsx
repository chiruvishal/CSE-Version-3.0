import React, { useEffect } from 'react';

import OwlCarousel from 'react-owl-carousel';

import './PlacementStatistics.css';


const PlacementSection = () => {

  useEffect(() => {
    const counterElements = document.querySelectorAll('.counter');

    const animateCounters = () => {
      counterElements.forEach((counterElement) => {
        const target = +counterElement.getAttribute('data-target');
        const count = +counterElement.innerText;
        const increment = target / 200;

        if (count < target) {
          counterElement.innerText = Math.ceil(count + increment);
          setTimeout(animateCounters, 10);
        } else {
          counterElement.innerText = target;
        }
      });
    };

    animateCounters();
  }, []);

  return (
    <div className="placement-section">
      <h2 style={{color: "#337ab7"}}>Placements</h2>
      <div className="placement-description">
        <p>
          Our placement program has been highly successful, providing numerous opportunities for our students to embark on their professional journeys. With strong industry collaborations and dedicated career development resources, we are proud to have achieved outstanding placement results this year.
        </p>
      </div>
      <div>
      
     
      <div className="counter-up">
        <div className="content">
          
          <div className="box">
            <div className="icon">
              <i className="fas fa-gift"></i>
            </div>
            <div className="counter" data-target="508">
              0
            </div>
            <div className="text">Offers Recieved</div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="counter" data-target="436">
              0
            </div>
            <div className="text">Students Placed</div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="counter" data-target="2">
              0
            </div>
            <div className="text">Cr Highest Package</div>
          </div>
        </div>
      </div>
    </div>
      <img  src="https://i.postimg.cc/ZqhL1WjY/sta.jpg" alt="placed image"
      className="placed-image" />
      <div className="placement-trends">
        <h2 style={{color: "#337ab7"}}>Placement Trends</h2>
      </div>
      <h3 className="subheading">Total offers over the past 5 Sessions</h3>
      <div className="placement-stats">
        <img src="https://i.postimg.cc/hGYGMwC9/pla1.png" alt="Placement Stats" />
      </div>
      <h3 className="subheading">Average CTC and No of companies participated</h3>
      <img className="second-image" src="https://i.postimg.cc/C1ygRVP6/pla2.png" alt="Second Image" />
      <div className="recruiters-section">
        <h2 style={{color: "#337ab7"}}>Our Recruiters</h2>
        <div className="company-logos-carousel">
        <OwlCarousel loop autoplay items={12} nav>
        <img src="https://i.postimg.cc/9F0CNg0L/FBDEE480-057-E-4-C3-F-82-A1-50-B62-AD0-CE55.jpg" alt="Adobe" />
        <img src="https://i.postimg.cc/QMGDCXbz/E6-E9-E1-F6-0598-4480-BB3-E-37-BE018-B6643.jpg" alt="DBOI" />
        <img src="https://i.postimg.cc/wMTgz0VT/57822-CB9-E6-F8-489-C-8009-08-ADFF428961.jpg" alt="accenture" />
        <img src="https://i.postimg.cc/MKLqk0jq/5-E706-EA2-E572-4-A88-B8-B2-1-CE91-F4808-A0.jpg" alt="deloitte" />
        <img src="https://i.postimg.cc/25QDBP9S/CFAAB588-4674-4-D77-B004-283-D0-F1-DA5-E9.jpg" alt="Optum" />
        <img src="https://i.postimg.cc/mgFRTcQM/F4-A87-AE3-4-B78-4-F8-C-9-AE3-1-A68-C282-A768.jpg" alt="D.E shaw" />
        <img src="https://i.postimg.cc/VsDzgPfS/F6-AA8-C5-A-5-CFC-47-C2-B1-D4-EE6819-C03578.jpg" alt="Amazon" />
        <img src="https://i.postimg.cc/SQTp8LdC/6-EDF5-F66-F76-B-4175-8-A8-C-21-BFF1-EC31-FA.jpg" alt="Fanatics" />
        <img src="https://i.postimg.cc/HnZHkXZ0/4168-E55-B-E497-47-F9-B712-C0-BB9-CABD554.jpg" alt="Soroco" />
         
        </OwlCarousel>
      </div>
      
    </div>
    </div>
  );
};

  


export default PlacementSection;
