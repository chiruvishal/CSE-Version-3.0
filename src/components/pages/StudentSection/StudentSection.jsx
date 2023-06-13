import React from 'react';
import './StudentSection.css';
import { Link } from 'react-router-dom';

function StudentSection() {
  return (
    <>
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage:
              'url(https://i.postimg.cc/x1c6d7wZ/f7075b94-4c69-4bb5-857a-fcedb4e740ad.jpg)',
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: '60px' }}
            >
              <div className="green-line-text">Student Section</div>
            </div>
          </div>
        </div>
        <div className="main-box">
          <div className="side-box">
            <div className="side-container">
              <div className="side-top-box">
                <p>Student Zone</p>
              </div>

              <ul className="side-link">
                <li>
                  <div className="side-border-left" />
                  <Link to="/Course">Course</Link>
                </li>
                <li>
                  <div className="side-border-left" />
                  <Link to="/Project">Alumini-Network</Link>
                </li>
                <li>
                  {' '}
                  <div className="side-border-left" />
                  <Link to="/Gallery">Gallery</Link>
                </li>
                <li>
                  {' '}
                  <div className="side-border-left" />
                  <Link to="/StudentSection">Student Section</Link>
                </li>
                <li>
                  {' '}
                  <div className="side-border-left" />
                  <Link to="/Achievements">Achievements</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="student-section">
            <h2 className="student-section-heading">Student Section</h2>

            <div className="student-box">
              <h3 className="student-box-heading">Academic Resources</h3>
              <a className="student-link" href="#">
                MIS
              </a>
              <a className="student-link" href="#">
                Latest result
              </a>
              <a className="student-link" href="#">
                Internship at NIT Raipur
              </a>
              <a className="student-link" href="#">
                Scholarships for students
              </a>
              <a className="student-link" href="#">
                Resource 5
              </a>
              <a className="student-link" href="#">
                Resource 6
              </a>
            </div>

            <h2 className="contacts-heading">Contacts</h2>

            <table className="contacts-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Contact No</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dr. P.Y. Dhekne </td>
                  <td>Registrar </td>
                  <td>0771-2252700 </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Dr. Shrish Verma </td>
                  <td>Dean Office (Academics) </td>
                  <td>+91-9755574795 </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Dr. P. Y. Dhekne </td>
                  <td>Dean Office (Student Welfare) </td>
                  <td>+91-9669400678 </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Dr. P.Y. Dhekne </td>
                  <td>Dean Office (Faculty Welfare) </td>
                  <td>+91-9669400678 </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Dr. Prabhat Diwan </td>
                  <td>Dean Office (Research & Consultancy) </td>
                  <td>+91-9479221399 </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Dr. R.K. Tripathi </td>
                  <td>Dean Office (Planning & Development) </td>
                  <td>0771-2254114 </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Dr. (Mrs.) Shubhrata Gupta </td>
                  <td>Chief Warden (Girl's Hostel) </td>
                  <td>+91-9993244929 </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Dr. Manoj Pradhan </td>
                  <td>Chief Warden (Boy's Hostel) </td>
                  <td>+91-9826540711 </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Dr. Sanjeev Pandey </td>
                  <td>Sr. Medical Officer (Dispensary) </td>
                  <td>+91-8889838150 </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Establishment Section </td>
                  <td> - </td>
                  <td>+91-8602705520</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Store & Purchase Section </td>
                  <td> - </td>
                  <td>+91-9993947106 </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Student Section </td>
                  <td>
                    Assistant Registrar ( Email id: studentsection@nitrr.ac.in,
                    asstreg.ss@nitrr.ac.in ){' '}
                  </td>
                  <td>+91-9981544944 </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Examination Section </td>
                  <td> - </td>
                  <td>+91-9893655655 </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Central Library </td>
                  <td> - </td>
                  <td>+91-9977508422 </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Placement Cell </td>
                  <td>Registrar </td>
                  <td>+91-7400730333 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentSection;
