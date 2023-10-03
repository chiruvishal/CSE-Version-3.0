import React from 'react';
import './Staff.css';
import { Link } from 'react-router-dom';
import FacultyCard from './FacultyCard';
import './FacultyCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function FacultyOverview() {
  const facultyMembers = [
    { id:'15',
      name: 'Mr. Naveen Prakash Sharma',
      picture: 'https://i.postimg.cc/4Nfp8jsh/Mr-Sharma.jpg',
      Designition: 'Technical Assistant ( SG-I )',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },
    { id:'16',
      name: 'Mr. Ravishankar Sahu',
      picture: 'https://i.postimg.cc/MHNMK3fz/Ravishankar-Sahu.jpg',
      Designition: 'Technical Assistant ( SG-I )',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },
    { id:'17',
      name: 'Mr. Ravi Shankar Pandey',
      picture: 'https://i.postimg.cc/PqCxVs6K/Ravi-Shankar-Pandey.jpg',
      Designition: 'Technical Assistant ( SG-I )',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },
    { id:'18',
      name: 'Mr. Laxman Kumar Dhivar',
      picture: 'https://i.postimg.cc/fTy69zkH/Laxman-Kumar-Dhivar.jpg',
      Designition: 'Technical Assistant ( SG-I )',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },
    { id:'19',
      name: 'Ms. Anjali Parate',
      picture: 'https://i.postimg.cc/tRwLF0Pp/Ms-Parate.jpg',
      Designition: 'Technical Assistant ( SG-I )',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },
    { id:'20',
      name: 'Mr. Rama Shankar Vastrakar',
      picture: 'https://i.postimg.cc/4dKW3dWt/Mr-Rama-Shankar-Vastrakar.jpg',
      Designition: 'Office Assistant',
      email: 'Email:rama.shankar83@gmail.com',
      phone: 'Phone:7898987826',
    },
    { id:'21',
      name: 'Mr. Ajay Kumar',
      picture: 'https://i.postimg.cc/9F1Zv2pj/Mr-Ajay-Kumar.jpg',
      Designition: 'Office Attendant',
      email: 'Email: 1979kumarajay@gmail.com',
      phone: 'Phone:7748894589',
    },
   
    // Add more faculty members here...
  ];

  return (
    <div>
      <>
        {/* <Navbar /> */}
        <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: 'url(https://i.postimg.cc/T3nsTnj5/IMG-2597.jpg)',
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: '60px' }}
            >
              <div className="green-line-text">People</div>
                
            </div>
          </div>
        </div>
         
        <div className="main-box">
          <div className="side-box">
          <div className="faculty-list">
    <h3>Staff Members</h3>
    <ul>
      {facultyMembers.map((faculty) => (
          <div className="faculty-names">
              <h4>{faculty.name}</h4>
            </div>
      ))}
    </ul>
  </div>
          </div>
          <div className="drops">
          <div  style={{ padding: '20px' }}> 
                <Link to="/Faculty"  style={{ paddingRight: '30px' }}>
                  <FontAwesomeIcon icon={faUsers} className="nav-icon" />
                  Faculty
                </Link>
                <Link to="/Staff">
                  <FontAwesomeIcon icon={faUser} className="nav-icon" />
                  Staff
                </Link>
            </div>
            <h3>Staff</h3>

            <div>
              {facultyMembers.map((faculty, index) => (
                <React.Fragment key={faculty.name}>
                  <FacultyCard
                    name={faculty.name}
                    picture={faculty.picture}
                    Designition={faculty.Designition}
                    email={faculty.email}
                    phone={faculty.phone}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* <h1 className="consulting">Publications</h1> */}
        {/* <Footer /> */}
        </div>
      </>
    </div>
  );
}
