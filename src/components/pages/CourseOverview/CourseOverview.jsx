import React, { useState } from "react";
import "./CourseOverview.css";
import { Link } from "react-router-dom";

export default function CourseOverview() {
  const [toggleState, setToggleState] = useState(1);
  const [selectedYear, setSelectedYear] = useState(" ");
  const [selectedSemester, setSelectedSemester] = useState(" ");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    // Reset the selected semester when the year changes
    setSelectedSemester("");
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };
  const getCourseData = () => {
    const curriculumData = [
      {
        year: "1st Year",
        semesters: [
          {
            name: "Semester I",
            pdfLink: "https://drive.google.com/file/d/1NJ6Qqhq9T7fVL8B2M4HGngPJEHJlGszG/view?usp=sharing",
          },
          {
            name: "Semester II",
            pdfLink: "https://drive.google.com/file/d/1NJ6Qqhq9T7fVL8B2M4HGngPJEHJlGszG/view?usp=sharing",
          },
        ],
      },
      {
        year: "2nd Year",
        semesters: [
          {
            name: "Semester I",
            pdfLink: "https://drive.google.com/file/d/1R9S2jmkkOK4NcL5fYfLOGATcpvFVAk--/view?usp=sharingf",
          },
          {
            name: "Semester II",
            pdfLink: "https://drive.google.com/file/d/15R8EvgdfV35Fay8Sm-a8PCyjCY8-JR1a/view?usp=sharing",
          },
        ],
      },
      {
        year: "3rd Year",
        semesters: [
          {
            name: "Semester I",
            pdfLink: "https://drive.google.com/file/d/1qmloaiRVcXiL_zae2nLU2nGsfYImdOkq/view?usp=sharing",
          },
          {
            name: "Semester II",
            pdfLink: "https://drive.google.com/file/d/1wvsQ6harP5R286QkkH31bnDvnMTsftnx/view?usp=sharing",
          },
        ],
      },
      {
        year: "4th Year",
        semesters: [
          {
            name: "Semester I",
            pdfLink: "https://drive.google.com/file/d/1Z4YKo3KQKT8xeZ9D31w0iODqNAKBYku7/view?usp=sharing",
          },
          {
            name: "Semester II",
            pdfLink: "https://drive.google.com/file/d/12LVtecxzGq-iki0IWg0CrEaK20i4CvTM/view?usp=sharing",
          },
        ],
      },
    ];

    const scheduleData = [
      {
        year: "1st Year",
        semesters: [
          {
            name: "Semester I",
            pdfLink: "https://drive.google.com/file/d/1H3BRdLlZfbhjYEIU8cdg_Kmqr-7C6NdT/view?usp=sharing ",
          },
          {
            name: "Semester II",
            pdfLink: "",
          },
        ],
      },
      {
        year: "2nd Year",
        semesters: [
          {
            name: "Semester I",
            pdfLink: "https://drive.google.com/file/d/1wBriY7ZnetRR8-zSlGEIWKGRJXriulZu/view?usp=sharing ",
          },
          {
            name: "Semester II",
            pdfLink: "",
          },
        ],
      },
      {
        year: "3rd Year",
        semesters: [
          {
            name: "Semester I",
            pdfLink: "https://drive.google.com/file/d/1wBriY7ZnetRR8-zSlGEIWKGRJXriulZu/view?usp=sharing",
          },
          {
            name: "Semester II",
            pdfLink: "",
          },
        ],
      },
      {
        year: "4th Year",
        semesters: [
          {
            name: "Semester I",
            pdfLink: "https://drive.google.com/file/d/1wBriY7ZnetRR8-zSlGEIWKGRJXriulZu/view?usp=sharing ",
          },
          {
            name: "Semester II",
            pdfLink: "",
          },
        ],
      },
    ];

    return toggleState === 1 ? curriculumData : scheduleData;
  };


  const handleShowButtonClick = () => {
    const courseDataForTab = getCourseData();
    const selectedCourse = courseDataForTab.find(
      (course) => course.year === selectedYear
    );
    if (selectedCourse) {
      const selectedSemesterData = selectedCourse.semesters.find(
        (semester) => semester.name === selectedSemester
      );
      if (selectedSemesterData) {
        const pdfLink = selectedSemesterData.pdfLink;
        if (pdfLink) {
          
          window.open(pdfLink, "_blank");
        } else {
          
          alert("PDF coming soon");
        }
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
              "url(https://i.postimg.cc/X72GbNpj/20191210-102521.jpg)",
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
