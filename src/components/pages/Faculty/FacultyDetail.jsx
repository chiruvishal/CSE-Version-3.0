import React, { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import './FacultyDetail.css';
import Drop from './Drop';
import './Drop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function FacultyDetail() {
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get('id');

  const facultyMembers = [
    {
      id: '0',
      name: 'Dr. Dilip Singh Sisodia',
      picture: 'https://i.postimg.cc/fVdbRHgW/img1.png',
      Department: 'Computer Science and Engineering',
      Qualification: 'Ph.D. (Computer Science & Engineering), M.Tech. (Information Technology with Specialization in Artificial Intelligence), B.E. (Computer Science & Engineering)',
      Designition: 'Associate Professor & Head of the Department',
      email: 'dssisodia.cs@nitrr.ac.in',
      phone: '8462808174',
      publications: [
        'Rahul Shrivastava, Dilip Singh Sisodia, Naresh Kumar Nagwani. Deep neural network-based multi-stakeholder recommendation system exploiting multi-criteria ratings for preference learning, Expert Systems with Applications, vol.213, 2023.'
      ],
      area: 'Applications of Machine Learning and Soft Computing Techniques, Artificial Intelligence, Computational Intelligence, Biomedical Image/Signal Processing, Theoretical Computer Science',
      scholor: '8999fierfhrehbfhrfu'
    },
    {
      id: '1',
      name: 'Dr. Naresh K. Nagwani',
      picture: 'https://i.postimg.cc/DWgnSRQh/img2.png',
      Department: 'Computer Science and Engineering',
      Qualification: 'B.E. (Hons - CS&E), M.Tech. - IT (ABV-IIITM Gwalior), Ph.D. - CS&E (NIT Raipur)',
      Designition: 'Associate Professor',
      email: 'nknagwani.cs@nitrr.ac.in',
      phone: '9993312001',
      publications: [
        'Publication 1'
      ],
      area: 'Data Mining, Graph Mining, Fuzzy Logic, Information Retrieval, Text Mining, NLP,  Software Engineering, Object Oriented Methodologies.',
      scholor: 'Scholar Information'
    },
    {
      id: '2',
      name: 'Dr. Pradeep Singh',
      picture: 'https://i.postimg.cc/r0wcxggr/img3.png',
      Department: 'Computer Science and Engineering',
      Qualification: 'Ph. D (Computer Science & Engineering)',
      Designition: 'Associate Professor',
      email: 'psingh.cs@nitrr.ac.in',
      phone: '9407627366',
      publications: [
        'Publication 1'
      ],
      area: 'Software Engineering, Machine Learning, Database Systems, Evolutionary Computing, Deep learning, Business Analytics and  Computational Intelligence',
      scholor: 'Scholar Information'
    },
    {
      id: '3',
      name: 'Dr. Aakanksha  Sharaff',
      picture: 'https://i.postimg.cc/3d48tShj/img4.png',
      Department: 'Computer Science and Engineering',
      Qualification: 'Ph.D. (Computer Science & Engineering), M.Tech. (Honours- Computer Science & Engineering), B.E. (Honours-Computer Science & Engineering)',
      Designition: 'Assistant Professor Grade I',
      email: 'asharaff.cs@nitrr.ac.in',
      phone: '8817813946',
      publications: [
        'Publication 1'
      ],
      area: 'Data  Analytics, Text Mining, Social Media Mining, Machine Learning, Information  Retrieval, Sentiment Ananlysis, Soft Computing, Evolutionary Computation, Biostatistics',
      scholor: 'Scholar Information'
    },
    {
      id: '4',
      name: 'Dr. Veena Anand',
      picture: 'https://i.postimg.cc/6TTtQj8s/img5.png',
      Department: 'Computer Science and Engineering',
      Qualification: 'BTech(CSE)- MMMEC , MTech(Hons-Systems Engg)-IIT BHU , Ph.D (IT)-NIT Raipur',
      Designition: 'Assistant Professor',
      email: 'vanand.cs@nitrr.ac.in',
      phone: '7587071023',
      publications: [
        'Publication 1'
      ],
      area: 'Mobile ad-hoc networks,Wireless sensor networks,Internet Of Thing, Soft Computing',
      scholor: 'Scholar Information'
    },
    {
      id: '5',
      name: 'Dr. Manu  Vardhan',
      picture: 'https://i.postimg.cc/CBsBLv5n/img6.png',
      Department: 'Computer Science and Engineering',
      Qualification: 'Ph.D.',
      Designition: 'Assistant Professor',
      email: 'mvardhan.cs@nitrr.ac.in',
      phone: '2312',
      publications: [
        'Publication 1'
      ],
      area: 'Distributed Systems, Security Concrens in Cloud Computing,Scheduling in Cloud Computing, Specific Areas in Social Networking, Blockchain Technology',
      scholor: 'Scholar Information'
    },
    {
      id: '6',
      name: 'Dr. Preeti  Chandrakar',
      picture: 'https://i.postimg.cc/V5z0HcZq/img7.png',
      Department: 'Computer Science and Engineering',
      Qualification: 'Ph. D.',
      Designition: 'Assistant Professor',
      email: 'pchandrakar.cs@nitrr.ac.in',
      phone: '7003171408',
      publications: [
        'Publication 1'
      ],
      area: 'Blockchain, Authentication, Information Security, Cloud Computing, WSN Security.',
      scholor: 'Scholar Information'
    },
    {
      id: '7',
      name: 'Dr. K. Jairam  Naik',
      picture: 'https://i.postimg.cc/BLSZNJZt/img8.png',
      Department: 'Computer Science and Engineering',
      Qualification: 'BPh.D(C.S.E), M.Tech(C.S.E), B.Tech(C.S.E)',
      Designition: 'Assistant Professor',
      email: 'jnaik.cse@nitrr.ac.in',
      phone: '9959971548',
      publications: [
        'Publication 1'
      ],
      area: 'Computer Networks, Distributed Computing, Grid & Cloud Computing, Fog Computing, Edge & IoT  Computing. ',
      scholor: 'Scholar Information'
    },
    {
      id: '8',
      name: 'Dr. Deepak Singh',
      picture: 'https://i.postimg.cc/560YbSVj/img9.png',
      Department: 'Computer Science and Engineering',
      Qualification: 'PhD Computer Science and Engineering',
      Designition: 'Associate Professor',
      email: 'dsingh.cs@nitrr.ac.in',
      phone: '919827916708',
      publications: [
        'Publication 1'
      ],
      area: 'Domain Adaptation, Evolutionary Computation, Transfer Learning',
      scholor: 'Scholar Information'
    },
    {
      id: '9',
      name: 'Dr Sonal  Yadav',
      picture: 'https://i.postimg.cc/tngTRp88/img10.png',
      Department: 'Computer Science and Engineering',
      Qualification: 'Postdoc (CSE, IIT Guwahati), PhD (CSE, MNIT Jaipur), MTech (CSE, MNIT Jaipur)',
      Designition: 'Associate Professor',
      email: 'syadav.cse@nitrr.ac.in',
      phone: '9785999900',
      publications: [
        'Publication 1'
      ],
      area: 'Networks-on-Chip, Computer Architecture, Computer Vision, Machine Learning, Artificial Intelligence',
      scholor: 'Scholar Information'
    },
    {
      id: '10',
      name: 'Dr Jitendra Kumar Rout',
      picture: 'https://i.postimg.cc/nj2rtCSv/img11.png',
      Department: 'Computer Science and Engineering',
      Qualification: 'Ph.D',
      Designition: 'Assistant Professor',
      email: 'jkrout.cs@nitrr.ac.in',
      phone: '09439622802',
      publications: [
        'Publication 1'
      ],
      area: 'Natural Language Processing,AI and Machine Learning,Data Analytics,Privacy in Social Networks,Cryptography,IoT',
      scholor: 'Scholar Information'
    }
    // Add more faculty members...
  ];

  const [publishs, setPublishs] = useState([
    {
      question: 'Area Of Interest',
      answer: facultyMembers[id].area,
      open: true
    },
    {
      question: 'publications',
      answer: facultyMembers[id].publications,
      open: false
    },
    {
      question: 'Scholar Information',
      answer: facultyMembers[id].scholor,
      open: false
    }
  ]);

  const toggledrop = (index) => {
    setPublishs(
      publishs.map((publish, i) => {
        if (i === index) {
          publish.open = !publish.open;
        } else {
          publish.open = false;
        }

        return publish;
      })
    );
  };

  const faculty = facultyMembers[id];
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/Publications'); // Replace '/another-page' with the desired page URL
  };

  return (
    <>
      <div className="nitr-page-title-wrap nitr-style-custom nitr-left-align">
        <div className="nitr-header-transparent-substitute"></div>
        <div className="nitr-page-title-bottom-gradient"></div>
        <div className="nitr-page-title-container green destinations-section-wrapper nitr-container">
          <div className="nitr-page-title-content nitr-item-pdlr" style={{ paddingBottom: '60px' }}>
            <div className="green-line-text">People</div>
          </div>
        </div>
      </div>

      <div className="main-box">
      <div className="side-box">
  <div className="faculty-list">
    <h3 style={{ padding: '10px' }}>Faculty Members</h3>
    <ul>
      {facultyMembers.map((faculty) => (
          <div className="faculty-names">
              <h4>{faculty.name}</h4>
          </div>
      ))}
    </ul>
  </div>
</div>
        <div className="navi">
        <div style={{ padding: '10px' }}> 
                <Link to="/Faculty"  style={{paddingLeft: '80px' }}>
                  <FontAwesomeIcon icon={faUsers} className="nav-icon" />
                  Faculty
                </Link>
                <Link to="/Staff" style={{ paddingLeft: '30px' }}>
                  <FontAwesomeIcon icon={faUser} className="nav-icon" />
                  Staff
                </Link>
            </div>
        <div className="Aiml Fdm wel">
          <div className="areafd">
            <p>{faculty.name}</p>
          </div>
          <div className="drops">
            <div className="faculty-members">
              <div className="faculty-member">
                <img src={faculty.picture} alt={faculty.name} className="faculty-picture" />
                <div className="faculty-details">
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Department:</strong>
                        </td>
                        <td>{faculty.Department}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Qualification:</strong>
                        </td>
                        <td>{faculty.Qualification}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Designation:</strong>
                        </td>
                        <td>{faculty.Designition}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Email:</strong>
                        </td>
                        <td>{faculty.email}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Phone:</strong>
                        </td>
                        <td>{faculty.phone}</td>
                      </tr>
                    </tbody>
                  </table>

                  {publishs.map((publish, index) =>
                    index === 1 ? (
                      <div className="Aimli">
                      <button key={index} className="drop-button drop-button-animation" onClick={handleButtonClick}>
                       Publications
                      </button>
                      </div>
                    ) : (
                      <Drop key={index} publish={publish} index={index} toggledrop={toggledrop} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
