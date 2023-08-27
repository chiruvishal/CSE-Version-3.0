import React, { useEffect, useRef, useState } from "react";
import "./Publications.css";
import { Link } from "react-router-dom";
import Sisodias from "./Sisodia.json";
import Deepaks from "./Deepak.json";
import Sonals from "./Sonal.json";
import JKRouts from "./JKRout.json";
import AkanshaMam from "./AkanshaMam.json";
import JairamSir from "./JairamSir.json";
import ManuSir from "./ManuSir.json";
import NagwaniSir from "./NagwaniSir.json";
import PradeepSir from "./PradeepSir.json";
import PreetiMan from "./PreetiMam.json";
import VeenaMam from "./VeenaMam.json";
import { event } from "jquery";
export default function Publications() {
  const years = [
    2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
    2011, 2010, 2009, 2008, 2007, 2006, 2005,
  ];
  const Professors = [
    "Dr.Dilip Singh Sisodia",
    "Dr.Naresh k. Nagwani",
    "Dr.Pradeep Singh",
    "Dr.K. Jairam Naik",
    "Dr.Deepak Singh",
    "Dr.Sonal Yadav",
    "Dr.Jitendra kumar Rout",
    "Dr.Aakansha Sharaff",
    "Dr.Manu Vardhan",
    "Dr.Preeti Chandrakar",
    "Dr.Veena Anand",
  ];
  const [isVisible, setIsVisible] = useState(false);
  const [prof, setprof] = useState("Dr.Dilip Singh Sisodia");
  let currentyear = 2023;
  const [Year, setYear] = useState(0);
  const sectionRef = useRef(null);
  const [data, setData] = useState(Sisodias);
  const selectHandler = (event) => {
    // if(event.target.value=='--Select Year--')
    // setYear(2023);
    // else
    setprof(event.target.value);
    if (event.target.value == "Dr.Dilip Singh Sisodia") setData(Sisodias);
    if (event.target.value == "Dr.Deepak Singh") setData(Deepaks);
    if (event.target.value == "Dr.Sonal Yadav") setData(Sonals);
    if (event.target.value == "Dr.Jitendra kumar Rout") setData(JKRouts);
    if (event.target.value == "Dr.Naresh k. Nagwani") setData(NagwaniSir);
    if (event.target.value == "Dr.Pradeep Singh") setData(PradeepSir);
    if (event.target.value == "Dr.Aakansha Sharaff") setData(AkanshaMam);
    if (event.target.value == "Dr.Manu Vardhan") setData(ManuSir);
    if (event.target.value == "Dr.Preeti Chandrakar") setData(PreetiMan);
    if (event.target.value == "Dr.K. Jairam Naik") setData(JairamSir);
    if (event.target.value == "Dr.Veena Anand") setData(VeenaMam);
  };
  const selectHandler1 = (event1) => {
    //console.log(Year + " 1");
    //console.log(event1.target.value);
    setYear(event1.target.value);
    //console.log(event1.target.value);
    //console.log(Year);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setYear(Year);
  //   }, 1000);
  //   // console.log(Year);
  // });
  //const res = publish.find(({ year }) => year === Year);
  // const result = publish.find(({ year }) => year === Year);
  // console.log(result);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: "url(https://i.postimg.cc/J4Xc7kCr/pexels-element-digital-1370295.jpg)",
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: "60px" }}
            >
              <div className="green-line-text">Publications</div>
            </div>
          </div>
        </div>
        <div className="main-box" ref={sectionRef}>
          <div className="side-box">
            <div className="side-container">
              <div className="side-top-box">
                <p>Research Areas</p>
              </div>
              <ul className="side-link">
                <li>
                  <div className="side-border-left" />
                  <Link to="/Research-Areas">Areas</Link>
                </li>

                <li>
                  {" "}
                  <div className="side-border-left" />
                  <Link to="/Publications">Publications</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`publication ${
              isVisible ? "animate__animated animate__slideInUp" : ""
            }`}
          >
            <h3 className="heap">Publications</h3>
            <div className="maint">
              <div className="selectyr">
                <div className="selectyeasr">
                  <div>
                    <select name="Year" id="sel" onChange={selectHandler}>
                      <option value="Dr.Dilip Singh Sisodia">
                        --Select Professor--
                      </option>
                      {Professors.map((pr) => (
                        <option value={pr}>{pr}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select name="Yer" id="sel" onChange={selectHandler1}>
                      <option value={0}>--Select Year--</option>
                      {years.map((yr) => (
                        <option value={yr}>{yr}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="syear">
                  <h2>Professor Name: {prof}</h2>
                </div>
              </div>
              <div className="pubtable">
                {/* {Professors.map((pr) =>
                  pr === prof + "s" ? ( */}
                <table className="publishtable">
                  <thead>
                    <tr>
                      <th className="wid">S.no.</th>
                      <th>Publications</th>
                      <th className="wid">Year</th>
                      <th className="wid">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((pub, idx) =>
                      parseInt(Year) === parseInt(pub.year[1]) ||
                      parseInt(Year) === 0 ? (
                        <tr>
                          <td>{idx + 1}</td>
                          <td>{pub.article}</td>
                          <td>{pub.year[1]}</td>
                          <td>
                            <a href={pub.link}>Link</a>
                          </td>
                        </tr>
                      ) : null
                    )}
                  </tbody>
                </table>
                {/* ) : null
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
