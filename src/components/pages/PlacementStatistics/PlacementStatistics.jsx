import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import OwlCarousel from 'react-owl-carousel';
import './PlacementStatistics.css';
import BarChart from './BarChart';
import BarChart2 from './BarChart2';

const Counter = ({ target }) => {
  const counterRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when counter enters viewport
    threshold: 1,
  });

  

  useEffect(() => {
    if (!inView) return;

    const counterElement = counterRef.current;
    const count = +counterElement.innerText;
    const increment = target / 200;
    let currentCount = 0;

    const animateCounters = () => {
      if (currentCount < target) {
        currentCount += increment;
        counterElement.innerText = Math.ceil(currentCount);
        requestAnimationFrame(animateCounters);
      } else {
        counterElement.innerText = target;
      }
    };

    animateCounters();
  }, [inView, target]);

  return (
    <div ref={ref}>
      <div className="counter" ref={counterRef} data-target={target}>
        0
      </div>
    </div>
  );
};
const PlacementSection = () => {

  
  return (
    <div>
    <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: 'url(https://i.postimg.cc/FsMqtTSQ/IMG-2725.jpg)',
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: '60px' }}
            >
              <div className="green-line-text">Placements</div>
            </div>
          </div>
        </div>
    <div className="placement-section">
      <h2 style={{color: "#337ab7"}}>Placements</h2>
    <div className="placement-description">
        <p>
        The placement section of the Computer Science branch at NIT Raipur is known for its remarkable track record and industry collaborations. With a strong emphasis on technical skills and practical knowledge, the department prepares students to excel in the ever-evolving field of computer science. The placement team organizes various training programs, workshops, and mock interviews to enhance students' employability. Renowned companies from diverse sectors actively participate in the recruitment process, offering enticing job opportunities and internships. The department's extensive network and alumni connections further contribute to the successful placement of students, ensuring a bright future for aspiring computer science graduates from NIT Raipur.
        </p>
        </div>
         <div>
      
     
            <div className="counter-up">
              <div className="content">
          
                <div className="box">
                  <div className="icon">
                    <i className="fas fa-gift"></i>
            </div>
            <Counter target={508} />
                <div className="text">Offers Received</div>
              </div>
          
          <div className="box">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <Counter target={436} />
                <div className="text">Students Placed</div>
              </div>
          <div className="box">
            <div className="icon">
              <i className="fas fa-award"></i>
            </div>
            <Counter target={2} />
                <div className="text">Cr Highest Package</div>
              </div>
        </div>
      </div>
    </div>

      <div className="placement-trends">
        <h2 style={{color: "#337ab7"}}>Placement Trends</h2>
      </div>
      
      <div className='bar1'>
      <h3>Total offers over the past 5 Sessions</h3>
      <BarChart /> 
    </div>
      
      <div className='bar1'>
      <h3>No of companies participated</h3>
      <BarChart2 />
    </div>

      <div>
        <div className="placement-details">
      <h2 style={{color: "#337ab7"}}>YEARWISE PLACEMENT DETAILS</h2>
      </div>
      <h3 style={{color:"black", fontSize: '24px'}}>Number of Students Placed</h3>

      <div className="counter-up">
              <div className="content">               
          <div className="box">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <Counter target={78} />
                <div className="text">2021-22</div>
              </div>

          <div className="box">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <Counter target={75} />
                <div className="text">2020-21</div>
              </div>

          <div className="box">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <Counter target={75} />
                <div className="text">2019-20</div>
              </div>
          <div className="box">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <Counter target={74} />
                <div className="text">2018-19</div>
              </div>
          
        </div>
      </div>


      </div>
      <div className="recruiters-section">
        <h2 style={{color: "#337ab7"}}>Our Recruiters</h2>
        <div className="recruiters">
        <img src="https://i.postimg.cc/9F0CNg0L/FBDEE480-057-E-4-C3-F-82-A1-50-B62-AD0-CE55.jpg" alt="Adobe" />
        <img src="https://i.postimg.cc/QMGDCXbz/E6-E9-E1-F6-0598-4480-BB3-E-37-BE018-B6643.jpg" alt="DBOI" />
        <img src="https://i.postimg.cc/wMTgz0VT/57822-CB9-E6-F8-489-C-8009-08-ADFF428961.jpg" alt="accenture" />
        <img src="https://i.postimg.cc/MKLqk0jq/5-E706-EA2-E572-4-A88-B8-B2-1-CE91-F4808-A0.jpg" alt="deloitte" />
        <img src="https://i.postimg.cc/25QDBP9S/CFAAB588-4674-4-D77-B004-283-D0-F1-DA5-E9.jpg" alt="Optum" />
        <img src="https://i.postimg.cc/mgFRTcQM/F4-A87-AE3-4-B78-4-F8-C-9-AE3-1-A68-C282-A768.jpg" alt="D.E shaw" />
        <img src="https://i.postimg.cc/VsDzgPfS/F6-AA8-C5-A-5-CFC-47-C2-B1-D4-EE6819-C03578.jpg" alt="Amazon" />
        <img src="https://i.postimg.cc/SQTp8LdC/6-EDF5-F66-F76-B-4175-8-A8-C-21-BFF1-EC31-FA.jpg" alt="Fanatics" />
        <img src="https://i.postimg.cc/HnZHkXZ0/4168-E55-B-E497-47-F9-B712-C0-BB9-CABD554.jpg" alt="Soroco" />
        <img src="https://i.postimg.cc/3Nf6JmgH/08-A7-AB62-F750-4-B2-C-A63-E-4-C004-AAE5-B35.jpg" alt="Netcracker" />
        <img src="https://i.postimg.cc/NfLSCCcG/1-D610551-2193-4-C43-A907-E2-E2-D5068058.jpg" alt="Jio" />
        <img src="https://i.postimg.cc/VLVQYQRb/39278-ED7-BE05-4-D7-F-A0-EB-91-CB74884-DE3.jpg" alt="Wipro" />
        <img src="https://i.postimg.cc/52hhCBD4/676-EFFCB-8-F9-F-4782-A2-CA-8279-E76-AA2-D6.jpg" alt="Genpact" />
        <img src="https://i.postimg.cc/85H99qcc/711-E822-A-CCF3-427-E-8-F69-527-D58364-DA2.jpg" alt="Paytm" />
        <img src="https://i.postimg.cc/qMYYPcJs/A15-BCBBB-CC59-41-F8-A2-C0-A3-E826-B1913-C.jpg" alt="MAQ" />
        <img src="https://i.postimg.cc/FzH84DkZ/A5322277-6-F08-40-B2-BC4-B-69-CD5-E7-FFC89.jpg" alt="Infoedge" />
        <img src="https://i.postimg.cc/g2L9jSSt/B83696-CB-651-D-40-D8-9201-F0-FD33-B5856-F.jpg" alt="ZS" />
        <img src="https://i.postimg.cc/3w2PCyHg/C6543-BA6-B981-4-DD9-9-FCD-0-BEA396-B4000.jpg" alt="Oracle" />
        
        </div>
      
    </div>
    </div>
    </div>
  );
};

  


export default PlacementSection;