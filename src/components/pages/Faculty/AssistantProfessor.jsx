import React from 'react';
import './AssistantProfessor.css';
import { Link } from 'react-router-dom';
import FacultyCard from './FacultyCard';
import './FacultyCard.css';
export default function FacultyOverview() {
  const facultyMembers = [

    {
      name: 'Dr.Aakanksha Sharaff',
      picture: 'https://i.postimg.cc/3d48tShj/img4.png',
      Designition: 'Assistant Professor',
      email: 'Email: asharaff.cs@nitrr.ac.in',
      phone: 'Phone: 8817813946',
    },
    {
      name: 'Dr. Veena Anand',
      picture: 'https://i.postimg.cc/6TTtQj8s/img5.png',
      Designition: 'Assistant Professor',
      email: 'Email:vanand.cs@nitrr.ac.in',
      phone: 'Phone:7587071023',
    },
    {
      name: 'Dr. Manu Vardhan',
      picture: 'https://i.postimg.cc/CBsBLv5n/img6.png',
      Designition: 'Assistant Professor',
      email: 'Email:mvardhan.cs@nitrr.ac.in',
      phone: 'Phone:9770543061',
    },
    {
      name: 'Dr. Preeti Chandraka',
      picture: 'https://i.postimg.cc/V5z0HcZq/img7.png',
      Designition: 'Assistant Professor Grade-I',
      email: 'Email:pchandrakar.cs@nitrr.ac.in',
      phone: 'Phone:7003171408',
    },
    {
      name: 'Dr. K. Jairam Naik',
      picture: 'https://i.postimg.cc/BLSZNJZt/img8.png" alt="img8',
      Designition: 'Assistant Professor',
      email: 'Email:jnaik.cse@nitrr.ac.in',
      phone: 'Phone:09959971548',
    },
    {
      name: 'Dr. Deepak Singh',
      picture: 'https://i.postimg.cc/560YbSVj/img9.png" alt="img9',
      Designition: 'Assistant Professor Grade-II',
      email: 'Email:dsingh.cs@nitrr.ac.in',
      phone: 'Phone:9827916708',
    },
    {
      name: 'Dr. Sonal Yadav',
      picture: 'https://i.postimg.cc/tngTRp88/img10.png" alt="img10',
      Designition: 'Assistant Professor Grade-II',
      email: 'Email:syadav.cse@nitrr.ac.in',
      phone: 'Phone:9785999900',
    },
    {
      name: 'Dr. Jitendra Kumar Rout',
      picture: 'https://i.postimg.cc/nj2rtCSv/img11.png" alt="img11',
      Designition: 'Assistant Professor',
      email: 'Email:jkrout.cs@nitrr.ac.in',
      phone: 'Phone:7008153233',
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
            <h4>Assistant Professor</h4>

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
