import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
export default function POs() {
  return (
    <>
      {" "}
      {/* <Navbar /> */}{" "}
      <div>
        
        <div className="main-box">
          
          <div class="drop">
            <div className="Aiml wel abcd">
              <h3 class="headm">
                <i class="fas fa-university"> </i>{" "}
                <span className="icon-txt"> About Institute </span>{" "}
              </h3>{" "}
              {/* <div id="director-message" className="containerw mx-auto my-10"> */}{" "}
              <div className="flexw flex-colw space-y-6 rounded-lg bg-light-purple overflow-hidden shadow-md md:flex-row md:space-y-0 md:space-x-6">
                <div className="basis-4/12">
                  <img
                    src="https://i.postimg.cc/wvK39NJM/coll1.jpg"
                    className="basis-4/12 h-full w-full object-cover hodimg"
                    alt="college"
                  />
                </div>{" "}
                <div
                  id="content"
                  className="flex flex-colw basis-8/12 space-y-4 p-6"
                >
                  <p className="mess">
                    The institute is committed to the challenging task of
                    development of technical education by preparing seasoned
                    graduates in highly sophisticated field of engineering and
                    technology.Development of India as an emerging industrial
                    power is a demanding exercise as it involves the combination
                    of cost effectiveness and efficiency along with producing
                    world - class technology at the cutting edge.The Institute,
                    located in Raipur, the Capital City of Chhattisgarh State,
                    is spared over an area of 100 acres.Raipur city is well
                    connected with Mumbai, Delhi, Chennai, Visakhapatnam, Nagpur
                    & Bhubneshwar by regular flights and is on the main Howrah -
                    Mumbai railway line route.The institute is 5 km from Raipur
                    railway station and 14 km from airport on NH - 6, the Great
                    Eastern Road.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              {/* </div> */}{" "}
            </div>{" "}
            
          </div>{" "}
          
        </div>{" "}
        <div>
      
     
      <div className="counter-up">
        <div className="content">
    
          <div className="box">
            <div className="icon">
              <i className="fas fa-gift"></i>
      </div>
                <div className="text">Offers Received</div>
              </div>
    
    <div className="box">
      <div className="icon">
        <i className="fas fa-users"></i>
      </div>
                <div className="text">Students Placed</div>
              </div>
    <div className="box">
      <div className="icon">
        <i className="fas fa-award"></i>
      </div>
                <div className="text">Cr Highest Package</div>
              </div>
  </div>
</div>
</div>
        <div className="dro">
     <div className="Aiml wel abcd">
       <h3 className="headm">  <i className="fas fa-eye icon"></i>
              <span className="icon-text">Vision & Mission</span></h3>
       {/* <div id="director-message" className="containerw mx-auto my-10"> */}
       
       <div className="flexw flex-colw space-y-6 rounded-lg bg-light-purple overflow-hidden shadow-md md:flex-row md:space-y-0 md:space-x-6">
        <div className="basis-4/12">
            <img
              src="https://i.postimg.cc/GtcyyG5m/garden.jpg"
              className="basis-4/12 h-full w-full object-cover hodimg"
              alt="college"
            />
          </div>
          <div id="content" className="flexw1 flex-colw basis-8/12 space-y-4 p-6">
            <p className="mv1">
            To promote Research and Development in the frontier areas of
                  Computer Science & Engineering. To generate Competent
                  Professionals to become part of the industry and Research
                  Organizations at the National and International levels. To
                  provide necessary strengths to enable the students to Innovate
                  and to become Entrepreneurs.
            </p>
          </div>
          
          
        </div>
        <div className="flexw flex-colw space-y-6 rounded-lg bg-light-purple overflow-hidden shadow-md md:flex-row md:space-y-0 md:space-x-6">
          <div id="content" className="flexw flex-colw basis-8/12 space-y-4 p-6">
            <p className="mv">
                To impart effective education at undergraduate levels in the
                  field of Computer Science and Engineering. To strive steadily
                  for the overall growth and development of intellect and
                  personality of the students who, as professionals, would be
                  confident to face the challenges of the world of work. To
                  conduct Research and Development and offer consultancy
                  services. To improve continuously the quality of
                  teaching-learning process.
            </p>
          </div>
          <div className="basis-4/12">
            <img
              src="https://i.postimg.cc/bwTFSfNx/download-1.jpg"
              className="basis-4/12 h-full w-full object-cover hodimg"
              alt="college"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
