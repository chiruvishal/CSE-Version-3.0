import React from 'react';
import './TempararyFaculty.css';
import { Link } from 'react-router-dom';
import FacultyCard from './FacultyCard';
import './FacultyCard.css';
export default function FacultyOverview() {
  const facultyMembers = [
    {
      name: 'Mr. Nilesh Kumar Verma',
      picture: 'https://i.postimg.cc/L6TfPSYb/ninesh.jpg',
      Designition: 'Temporary Faculty',
      email: 'Email: nkverma.cs@nitrr.ac.in',
      phone: 'Phone: 9770406560',
    },
    {
      name: 'Mr. Ravi Kumar',
      picture: 'https://i.postimg.cc/tYwTy0km/img12.png" alt="img12',
      Designition: 'Temporary Faculty',
      email: 'Email:rkumar.cs@nitrr.ac.in',
      phone: 'Phone:9753053016',
    },
    {
      name: 'Mr. Abhishek Shrivastava',
      picture: 'https://i.postimg.cc/nMVMGGMT/img13.png" alt="img13',
      Designition: 'Temporary Faculty',
      email: 'Email:abhi2711it@gmail.com',
      phone: 'Phone:9926135652',
    },
    {
      name: 'Mr. Vishal Sathawane',
      picture: 'https://i.postimg.cc/Y4wCG1J6/img14.png" alt="img14',
      Designition: 'Temporary Faculty',
      email: 'Email:vhsathawane@gmail.com',
      phone: 'Phone:7709489118',
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
            <h4>Temparary Faculty</h4>

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
