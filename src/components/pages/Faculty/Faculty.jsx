import React from 'react';
import './Faculty.css';
import { Link } from 'react-router-dom';
import FacultyCard from './FacultyCard';
import './FacultyCard.css';
export default function FacultyOverview() {
  const facultyMembers = [
    {
      name: 'Dr. Dilip Singh Sisodia ',
      picture: 'https://i.postimg.cc/fVdbRHgW/img1.png',
      Designition: 'Associate Professor',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },
    
    {
      name: 'Dr. Dilip Singh Sisodia ',
      picture: 'https://i.postimg.cc/fVdbRHgW/img1.png',
      Designition: 'Associate Professor',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },
    { name: 'Dr. Naresh K. Nagwani',
      picture: 'https://i.postimg.cc/DWgnSRQh/img2.png',
      Designition: 'Associate Professor',
      email: 'Email:nknagwani.cs@nitrr.ac.in',
      phone: 'Phone:9993312001',
    },
    { name: 'Dr. Pradeep Singh',
    picture: 'https://i.postimg.cc/r0wcxggr/img3.png',
    Designition: 'Associate Professor',
    email: 'Email:psingh.cs@nitrr.ac.in',
    phone: 'Phone:9407627366',
  },
    // Add more faculty members here...
  ];

  return (
    <div>
      <>
        {/* <Navbar /> */}
        <div className="main-box">
          <div className="side-box">
            <div className="side-container">
              <div className="side-top-box">
                <p>Faculty</p>
              </div>

              <ul className="side-link">
                <li>
                  <div className="side-border-left" />
                  <Link to="/Faculty">Associate Professor</Link>
                </li>
                <li>
                  <div className="side-border-left" />
                  <Link to="/AssistantProfessor">Assistant Professor</Link>
                </li>
                <li>
                  <div className="side-border-left" />
                  <Link to="/TempararyFaculty">Temparary Faculty</Link>
                </li>
                <li>
                  <div className="side-border-left" />
                  <Link to="/Staff">Staff</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="drops">
            <h3>Head Of The Department</h3>
            
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

          {index === 0 && <h3>Associate Professor</h3>}
        </React.Fragment>
      ))}
    </div>
          </div>
        </div>

        {/* <h1 className="consulting">Publications</h1> */}
        {/* <Footer /> */}
      </>
    </div>
  );
}