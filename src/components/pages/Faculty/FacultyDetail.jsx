import React, { useState } from 'react';
import './FacultyDetail.css';
import { Link } from 'react-router-dom';
// import FacultyCard from './FacultyCard';
// import './FacultyCard.css';
import Drop from './Drop';
import './Drop.css';
export default function FacultyDetails() {
  const facultyMembers = [
    {
      name: 'Dr. Dilip Singh Sisodia ',
      picture: 'https://i.postimg.cc/fVdbRHgW/img1.png',
      Department: 'Computer science and Engineering',
      Qualification:'Ph.D. (Computer Science & Engineering), M.Tech. (Information Technology with Specialization in Artificial Intelligence), B.E. (Computer Science & Engineering)',
      Designition: 'Associate Professor & Head of the Department',
      email: ' dssisodia.cs@nitrr.ac.in',
      phone: '8462808174',
    },],
  const [publishs, setpublish] = useState([
    {
      question: 'Area Of Intrest',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.',
      open: false,
    },
    {
      question: 'Publications',
      answer: 'You! The viewer!',
      open: false,
    },
    {
      question: 'Other Information',
      answer: 'You! The viewer!',
      open: false,
    },
  ]);

  const toggledrop = (index) => {
    setpublish(
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

  return (
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
  {/* <h3>Dr Dilip Singh Sisodia</h3> */}
  <div className="faculty-members">
    {facultyMembers.map((faculty, index) => (
      <div key={index} className="faculty-member">
        <img src={faculty.picture} alt={faculty.name} className="faculty-picture" />
        <div className="faculty-details">
          <h4>{faculty.name}</h4>
          <p><strong>Department:</strong> {faculty.Department}</p>
          <p><strong>Qualification:</strong> {faculty.Qualification}</p>
          <p><strong>Designation:</strong> {faculty.Designition}</p>
          <p><strong>Email:</strong> {faculty.email}</p>
          <p><strong>Phone:</strong> {faculty.phone}</p>
        </div>
      </div>
    ))}
  </div>


          {publishs.map((publish, index) => (
            <Drop
              publish={publish}
              index={index}
              key={index}
              toggledrop={toggledrop}
            />
          ))}
        </div>
      </div>
      {/* <h1 className="consulting">Publications</h1> */}
      {/* <Footer /> */}
    </>
  );
}
