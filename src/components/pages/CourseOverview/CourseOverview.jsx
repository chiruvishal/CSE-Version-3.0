import React, { useState } from "react";
import "./CourseOverview.css";
import { Link } from "react-router-dom";

const courseData = [
  {
    year: "1st Year",
    semesters: [
      {
        name: "Semester I",
        pdfLink:
          "https://drive.google.com/file/d/1fLW5XICAMCuwbQL6_6NqOvXVpyumi3J5/view?usp=sharing",
      },
      {
        name: "Semester II",
        pdfLink: "https://example.com/year1_sem2.pdf",
      },
    ],
  },
  {
    year: "2nd Year",
    semesters: [
      {
        name: "Semester I",
        pdfLink: "https://example.com/year2_sem1.pdf",
      },
      {
        name: "Semester II",
        pdfLink: "https://example.com/year2_sem2.pdf",
      },
    ],
  },
  {
    year: "3rd Year",
    semesters: [
      {
        name: "Semester I",
        pdfLink: "https://example.com/year2_sem1.pdf",
      },
      {
        name: "Semester II",
        pdfLink: "https://example.com/year2_sem2.pdf",
      },
    ],
  },
  {
    year: "4th Year",
    semesters: [
      {
        name: "Semester I",
        pdfLink: "https://example.com/year2_sem1.pdf",
      },
      {
        name: "Semester II",
        pdfLink: "https://example.com/year2_sem2.pdf",
      },
    ],
  },
  // Add more years and semesters as needed
];
export default function CourseOverview() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [selectedYear, setSelectedYear] = useState(" ");
  const [selectedSemester, setSelectedSemester] = useState(" ");

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleShowButtonClick = () => {
    const selectedCourse = courseData.find(
      (course) => course.year === selectedYear
    );
    if (selectedCourse) {
      const selectedSemesterData = selectedCourse.semesters.find(
        (semester) => semester.name === selectedSemester
      );
      if (selectedSemesterData) {
        window.open(selectedSemesterData.pdfLink, "_blank");
      }
    }
  };

  return (
    <>
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/x1sfgTzb/Untitled-design-4.jpg)",
          }}>
          <div className="nitr-header-transparent-substitute "> </div>{" "}
          <div className="nitr-page-title-bottom-gradient"> </div>{" "}
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: "60px" }}>
              <div className="green-line-text"> Course </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="main-boxx">
          <div className="side-boxxx">
            <div className="side-container">
              <div className="side-top-box">
                <p> Acadamics </p>{" "}
              </div>
              <ul className="side-link">
                <li>
                  <div className="side-border-left" />
                  <Link to="/Course"> Course </Link>{" "}
                </li>{" "}
                <li>
                  <div className="side-border-left" />
                  <Link to="/Academics"> Programs Offered </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <div className="side-border-left" />
                  <Link to="/Activities"> Activities</Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <div className="side-border-left" />
                  <Link to="/POs"> POs,PEOs,PSOs</Link>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div className="to-centerx">
            <div className="containersy">
              <div className="bloc-tabsx">
                <button
                  className={toggleState === 1 ? "tabsx active-tabsx" : "tabsx"}
                  onClick={() => toggleTab(1)}>
                  Curriculum{" "}
                </button>{" "}
                <button
                  className={toggleState === 2 ? "tabsx active-tabsx" : "tabsx"}
                  onClick={() => toggleTab(2)}>
                  Schedule{" "}
                </button>{" "}
              </div>
              <div className="content-tabsx">
                <div
                  className={
                    toggleState === 1 ? "contentx active-contentx" : "contentx"
                  }>
                  <div className="containerxy">
                    <div className="boxx">
                      <div className="columnx"> Curriculum </div>{" "}
                      <div className="dropdown-containerx">
                        <select
                          className="dropdownx"
                          value={selectedYear}
                          onChange={handleYearChange}>
                          <option value=""> -select Year - </option>{" "}
                          <option value="1st Year"> 1 st Year </option>{" "}
                          <option value="2nd Year"> 2 nd Year </option>{" "}
                          <option value="3rd Year"> 3 rd Year </option>{" "}
                          <option value="4th Year"> 4 th Year </option>{" "}
                        </select>{" "}
                        <div className="gapx"> </div>{" "}
                        <select
                          className="dropdownx"
                          value={selectedSemester}
                          onChange={handleSemesterChange}>
                          <option value=""> -select Sem - </option>{" "}
                          <option value="Semester I"> Semester I </option>{" "}
                          <option value="Semester II"> Semester II </option>{" "}
                        </select>{" "}
                      </div>{" "}
                      <br />
                      <button
                        className="buttonx"
                        onClick={handleShowButtonClick}>
                        Show{" "}
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div
                  className={
                    toggleState === 2 ? "contentx active-contentx" : "contentx"
                  }>
                  <div className="containerxy">
                    <div className="boxx">
                      <div className="columnx"> Schedule </div>{" "}
                      <div className="dropdown-containerx">
                        <select
                          className="dropdownx"
                          value={selectedYear}
                          onChange={handleYearChange}>
                          <option value=""> -select Year - </option>{" "}
                          <option value="1st Year"> 1 st Year </option>{" "}
                          <option value="2nd Year"> 2 nd Year </option>{" "}
                          <option value="3rd Year"> 3 rd Year </option>{" "}
                          <option value="4th Year"> 4 th Year </option>{" "}
                        </select>{" "}
                        <div className="gapx"> </div>{" "}
                        <select
                          className="dropdownx"
                          value={selectedSemester}
                          onChange={handleSemesterChange}>
                          <option value=""> -select Sem - </option>{" "}
                          <option value="Semester I"> Semester I </option>{" "}
                          <option value="Semester II"> Semester II </option>{" "}
                        </select>{" "}
                      </div>{" "}
                      <br />
                      <button
                        className="buttonx"
                        onClick={handleShowButtonClick}>
                        Show{" "}
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
