import * as React from "react";
import "./Welcome.css";

const DirectorMessage = () => {
  return (
    <div className="welp">
    <div className="Aiml wel ">
      <div className="areaheadm">
        <p> HOD 's Message</p>{" "}
      </div>{" "}
      <div id="director-message" className="containerw mx-auto my-10">
        <div className="flexw flex-colw space-y-6 rounded-lg bg-light-purple overflow-hidden shadow-md md:flex-row md:space-y-0 md:space-x-6">
          <div className="basis-4/12">
            <img src="https://i.postimg.cc/qMrJWV55/p.jpg"
              className="basis-4/12 h-full w-full object-cover hodimg"
              alt="HOD's Image"
            />
          </div>{" "}
          <div
            id="content"
            className="flexw flex-colw basis-8/12 space-y-4 p-6"
          >
            <h2 className="text-xl font-medium text-dark-purple mess1">
              Dr.Pradeep Singh{" "}
            </h2>{" "}
            <p className="mess">
            The field of Computer Science and Engineering (CSE) is a dynamic and ever-evolving domain that promises a world of opportunities for aspiring tech enthusiasts. In today's digital age, CSE is at the forefront of innovation, driving advancements in artificial intelligence, data science, cybersecurity, and more. As we continue to witness rapid technological advancements, the demand for skilled CSE professionals is soaring. Graduates in this field not only enjoy a wide array of career options but also stand a strong chance of securing lucrative placements in top-tier tech companies. The future prospects for CSE graduates are exceptionally promising, offering the potential for groundbreaking contributions to technology and society, making it an immensely attractive and rewarding field for those with a passion for problem-solving and innovation.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
    </div>
  );
};

export default DirectorMessage;
