import React, { useState } from 'react';
import './CourseOverview.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
export default function CourseOverview() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [selectedYear, setSelectedYear] = useState('1st Year');
  const [selectedSemester, setSelectedSemester] = useState('Semester I');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleShowButtonClick = () => {
    alert(`You selected: ${selectedYear} - ${selectedSemester}`);
  };

  return (
    <>
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage:
              'url(https://i.postimg.cc/prR0XdvQ/c5df7fde-108f-4ff4-ad60-670db73b8bd2.jpg)',
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: '60px' }}
            >
              <div className="green-line-text">Course</div>
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
                  <Link to="/AluminiNetwork">Alumini-Network</Link>
                </li>
                <li>
                  {' '}
                  <div className="side-border-left" />
                  <Link to="/Gallary">Gallary</Link>
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
          <div className="to-centerx">
            <div className="containersy">
              <div className="bloc-tabsx">
                <button
                  className={toggleState === 1 ? 'tabsx active-tabsx' : 'tabsx'}
                  onClick={() => toggleTab(1)}
                >
                  Curriculum
                </button>
                <button
                  className={toggleState === 2 ? 'tabsx active-tabsx' : 'tabsx'}
                  onClick={() => toggleTab(2)}
                >
                  Schedule
                </button>
              </div>

              <div className="content-tabsx">
                <div
                  className={
                    toggleState === 1 ? 'contentx active-contentx' : 'contentx'
                  }
                >
                  <div className="containerxy">
                    <div className="boxx">
                      <div className="columnx">Curriculum</div>
                      <div className="dropdown-containerx">
                        <select
                          className="dropdownx"
                          value={selectedYear}
                          onChange={handleYearChange}
                        >
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year</option>
                        </select>
                        <div className="gapx"></div>
                        <select
                          className="dropdownx"
                          value={selectedSemester}
                          onChange={handleSemesterChange}
                        >
                          <option value="Semester I">Semester I</option>
                          <option value="Semester II">Semester II</option>
                        </select>
                      </div>
                      <br />
                      <button
                        className="buttonx"
                        onClick={handleShowButtonClick}
                      >
                        Show
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    toggleState === 2 ? 'contentx active-contentx' : 'contentx'
                  }
                >
                  <div className="containerxy">
                    <div className="boxx">
                      <div className="columnx">Schedule</div>
                      <div className="dropdown-containerx">
                        <select
                          className="dropdownx"
                          value={selectedYear}
                          onChange={handleYearChange}
                        >
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year</option>
                        </select>
                        <div className="gapx"></div>
                        <select
                          className="dropdownx"
                          value={selectedSemester}
                          onChange={handleSemesterChange}
                        >
                          <option value="Semester I">Semester I</option>
                          <option value="Semester II">Semester II</option>
                        </select>
                      </div>
                      <br />
                      <button
                        className="buttonx"
                        onClick={handleShowButtonClick}
                      >
                        Show
                      </button>
                    </div>
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
