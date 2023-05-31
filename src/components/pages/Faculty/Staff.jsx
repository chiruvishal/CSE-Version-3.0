import React from 'react';
import './Staff.css';
import { Link } from 'react-router-dom';
import FacultyCard from './FacultyCard';
import './FacultyCard.css';
export default function FacultyOverview() {
  const facultyMembers = [
    {
      name: 'Mr. Naveen Prakash Sharma',
      picture: 'https://i.postimg.cc/4Nfp8jsh/Mr-Sharma.jpg',
      Designition: 'Technical Assistant ( SG-I )',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },
    {
      name: 'Ravishankar Sahu',
      picture: 'https://i.postimg.cc/MHNMK3fz/Ravishankar-Sahu.jpg',
      Designition: 'Technical Assistant ( SG-I )',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },
    {
      name: 'Ravi Shankar Pandey',
      picture: 'https://i.postimg.cc/PqCxVs6K/Ravi-Shankar-Pandey.jpg',
      Designition: 'Technical Assistant ( SG-I )',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },
    {
      name: 'Laxman Kumar Dhivar',
      picture: 'https://i.postimg.cc/fTy69zkH/Laxman-Kumar-Dhivar.jpg',
      Designition: 'Technical Assistant ( SG-I )',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },
    {
      name: 'Anjali Parate',
      picture: 'https://i.postimg.cc/tRwLF0Pp/Ms-Parate.jpg',
      Designition: 'Technical Assistant ( SG-I )',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },
    {
      name: 'Mr. Rama Shankar Vastrakar',
      picture: 'https://i.postimg.cc/4dKW3dWt/Mr-Rama-Shankar-Vastrakar.jpg',
      Designition: 'Office Assistant',
      email: 'Email:rama.shankar83@gmail.com',
      phone: 'Phone:7898987826',
    },
    {
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
            <h4>Staff</h4>

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
      </>
    </div>
  );
}
