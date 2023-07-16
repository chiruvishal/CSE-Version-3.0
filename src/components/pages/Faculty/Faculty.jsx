import React from 'react';
import './Faculty.css';
import { Link } from 'react-router-dom';
import FacultyCard from './FacultyCard';
import './FacultyCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function FacultyOverview() {
  /// make the spi start from id =0
  const facultyMembers = [
    {
      id: '0',
      name: 'Dr. Dilip Singh Sisodia ',
      picture: 'https://i.postimg.cc/fVdbRHgW/img1.png',
      Designition: 'Associate Professor',
      email: 'Email: dssisodia.cs@nitrr.ac.in',
      phone: 'Phone: 8462808174',
    },

    {
      id: '1',
      name: 'Dr. Naresh K. Nagwani',
      picture: 'https://i.postimg.cc/DWgnSRQh/img2.png',
      Designition: 'Associate Professor',
      email: 'Email:nknagwani.cs@nitrr.ac.in',
      phone: 'Phone:9993312001',
    },
    {
      id: '2',
      name: 'Dr. Pradeep Singh',
      picture: 'https://i.postimg.cc/r0wcxggr/img3.png',
      Designition: 'Associate Professor',
      email: 'Email:psingh.cs@nitrr.ac.in',
      phone: 'Phone:9407627366',
    },
    {
      id: '3',
      name: 'Dr.Aakank Sharaff',
      picture: 'https://i.postimg.cc/3d48tShj/img4.png',
      Designition: 'Assistant Professor',
      email: 'Email: asharaff.cs@nitrr.ac.in',
      phone: 'Phone: 8817813946',
    },
    {
      id: '4',
      name: 'Dr. Veena Anand',
      picture: 'https://i.postimg.cc/6TTtQj8s/img5.png',
      Designition: 'Assistant Professor',
      email: 'Email:vanand.cs@nitrr.ac.in',
      phone: 'Phone:7587071023',
    },
    {
      id: '5',
      name: 'Dr. Manu Vardhan',
      picture: 'https://i.postimg.cc/CBsBLv5n/img6.png',
      Designition: 'Assistant Professor',
      email: 'Email:mvardhan.cs@nitrr.ac.in',
      phone: 'Phone:9770543061',
    },
    {
      id: '6',
      name: 'Dr. Preeti Chandraka',
      picture: 'https://i.postimg.cc/V5z0HcZq/img7.png',
      Designition: 'Assistant Professor Grade-I',
      email: 'Email:pchandrakar.cs@nitrr.ac.in',
      phone: 'Phone:7003171408',
    },
    {
      id: '7',
      name: 'Dr. K. Jairam Naik',
      picture: 'https://i.postimg.cc/BLSZNJZt/img8.png" alt="img8',
      Designition: 'Assistant Professor',
      email: 'Email:jnaik.cse@nitrr.ac.in',
      phone: 'Phone:09959971548',
    },
    {
      id: '8',
      name: 'Dr. Deepak Singh',
      picture: 'https://i.postimg.cc/560YbSVj/img9.png" alt="img9',
      Designition: 'Assistant Professor Grade-II',
      email: 'Email:dsingh.cs@nitrr.ac.in',
      phone: 'Phone:9827916708',
    },
    {
      id: '9',
      name: 'Dr. Sonal Yadav',
      picture: 'https://i.postimg.cc/tngTRp88/img10.png" alt="img10',
      Designition: 'Assistant Professor Grade-II',
      email: 'Email:syadav.cse@nitrr.ac.in',
      phone: 'Phone:9785999900',
    },
    {
      id: '10',
      name: 'Dr. Jitendra Kumar Rout',
      picture: 'https://i.postimg.cc/nj2rtCSv/img11.png" alt="img11',
      Designition: 'Assistant Professor',
      email: 'Email:jkrout.cs@nitrr.ac.in',
      phone: 'Phone:7008153233',
    },
    { id:'11',
      name: 'Mr. Nilesh Kumar Verma',
      picture: 'https://i.postimg.cc/L6TfPSYb/ninesh.jpg',
      Designition: 'Temporary Faculty',
      email: 'Email: nkverma.cs@nitrr.ac.in',
      phone: 'Phone: 9770406560',
    },
    { id:'12',
      name: 'Mr. Ravi Kumar',
      picture: 'https://i.postimg.cc/tYwTy0km/img12.png" alt="img12',
      Designition: 'Temporary Faculty',
      email: 'Email:rkumar.cs@nitrr.ac.in',
      phone: 'Phone:9753053016',
    },
    { id:'13',
      name: 'Mr. Abhishek Shrivastava',
      picture: 'https://i.postimg.cc/nMVMGGMT/img13.png" alt="img13',
      Designition: 'Temporary Faculty',
      email: 'Email:abhi2711it@gmail.com',
      phone: 'Phone:9926135652',
    },
    { id:'14',
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
        <div>
          <div
            className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
            style={{
              backgroundImage:
                'url(https://i.postimg.cc/T3nsTnj5/IMG-2597.jpg)',
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
    <h3>Faculty Members</h3>
    <ul>
      {facultyMembers.map((faculty) => (
          <div className="faculty-names">
              {faculty.id <= 10 ? (
          <Link to={`/FacultyDetail?id=${faculty.id}`}>
            <h4>{faculty.name}</h4>
          </Link>
        ) : (
          <h4>{faculty.name}</h4>
        )}
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
              <h3>Head Of The Department</h3>

              <div>
                {facultyMembers.map((faculty, index) => (
                  <React.Fragment key={faculty.name}>
                    <FacultyCard
                      id={faculty.id}
                      name={faculty.name}
                      picture={faculty.picture}
                      Designition={faculty.Designition}
                      email={faculty.email}
                      phone={faculty.phone}
                    />

                    {index === 0 && <h3>Faculty</h3>}
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

