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

      <div className="counter-upp">
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
        <img src="https://i.postimg.cc/8CBrXkvL/0878-BED7-E8-F9-4-C79-B0-D0-2-DF17122-A4-A4.jpg" alt="Capgemini" />
        <img src="https://i.postimg.cc/8PPwh3qy/0-A346-A39-BDBA-42-CE-B129-8903-A55-FE584.jpg" alt="vedanta" />
        <img src="https://i.postimg.cc/MHs7P6h9/0-B95493-B-5-B03-4-DEE-AD8-E-DE7672-B2-B819.jpg" alt="tredence" />
        <img src="https://i.postimg.cc/cLPmGJ6j/3471-C095-B12-B-431-D-91-F9-DE174-FF05-FBC.jpg" alt="ford" />
        <img src="https://i.postimg.cc/L5vTcBZB/4-FDFE35-E-738-C-46-B4-AABB-F9-A3-DF35-D354.jpg" alt="avalara" />
        <img src="https://i.postimg.cc/QtfKs60t/6133-A19-A-02-C6-43-F7-B911-C41-E68772-C8-A.jpg" alt="samsung" />
        <img src="https://i.postimg.cc/PJqZwGPY/6-E55-F3-D8-E506-4-C56-BE0-B-F2-FD3-D4-F67-FB.jpg" alt="" />
        <img src="https://i.postimg.cc/hPfT4BFq/86448155-96-E3-4437-B797-772-F5528803-E.jpg" alt="" />
        <img src="https://i.postimg.cc/wTf2F2z9/886-D2801-A737-43-FE-9641-0-B7-AB1-FD227-B.jpg" alt="" />
        <img src="https://i.postimg.cc/sf0GNNMH/8-F0-C85-E6-C638-4-F8-D-B797-1076-C07-D5-CFF.jpg" alt="" />
        <img src="https://i.postimg.cc/GmDDYxh7/A59-AF224-3-F0-A-458-D-AD23-07-C232-DD31-BF.jpg" alt="" />
        <img src="https://i.postimg.cc/tRz2nymZ/9-E767787-563-B-47-E1-8-ED4-8-B93875-F5-F77.jpg" alt="" />
        <img src="https://i.postimg.cc/cJNnctvs/AE2-FB262-D49-C-482-E-913-C-E3460-BCA9-BC2.jpg" alt="" />
        <img src="https://i.postimg.cc/T3K9sb2g/B2-A6-C204-5164-4-B95-BD77-881-C4-B95-D5-D2.jpg" alt="" />
        <img src="https://i.postimg.cc/bNWbsB8S/C2-A71-CCE-F90-D-444-C-94-D1-46067-A3-A04-EE.jpg" alt="" />
        <img src="https://i.postimg.cc/9MCycw2x/CA9-C7452-BA0-B-431-A-8-C07-CA0-B2-FDABE2-D.jpg" alt="" />
        <img src="https://i.postimg.cc/43CzFFSR/CB30782-A-5525-4-E35-8-D0-D-436-FD33-B0390.jpg" alt="" />
        <img src="https://i.postimg.cc/BbwF5hKy/EFBB136-D-ED04-40-AC-986-B-F7-CADA79-A327.jpg" alt="" />
        <img src="https://i.postimg.cc/tTkWJRC9/F647-B318-A594-4962-997-B-8-AAEC4054-F1-C.jpg" alt="" />
        <img src="https://i.postimg.cc/Rh83JWrx/F77623-BC-1207-4-B87-8-B3-C-EFAFB66540-F5.jpg" alt="" />
        <img src="https://i.postimg.cc/PqmmGzgp/FD0809-EE-A96-F-4-A18-9-E1-B-A26-BFEAB98-A5.jpg" alt="" />
        <img src="https://i.postimg.cc/50Sqzqpd/FDAC5-A0-A-54-BA-4-E56-8351-268-FD52394-B6.jpg" alt="" />

        </div>
      
    </div>
    </div>
    </div>
  );
};

  


export default PlacementSection;