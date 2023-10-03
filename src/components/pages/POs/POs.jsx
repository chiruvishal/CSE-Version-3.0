import React from "react";
import "./POs.css";
import { Link } from "react-router-dom";
export default function POs() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: "url(https://i.postimg.cc/yNBbxWnQ/IMG-2618.jpg)",
          }}>
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: "60px" }}>
              <div className="green-line-text  POs-text"> POs,PEOs,PSOs</div>
            </div>
          </div>
        </div>
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
          <div className="dr">
            <div className="Aiml Acad-mic">
              <h3 className="headm">PEOs, PSOs and POs</h3>
              {/* <div id="director-message" className="containerw mx-auto my-10"> */}
              <div className="flexi flex-colw space-y-6 rounded-lg bg-light-purple overflow-hidden shadow-md md:flex-row md:space-y-0 md:space-x-6">
                <div id="content" className="ps">
                  <h2>Programme Educational Objectives (PEOs) </h2>
                  <ol className="peo" start={1}>
                    <li>
                      Cater to the needs of Indian as well as multinational
                      industries.
                    </li>
                    <li>
                      Be competent with strong technological background to
                      analyze data, formulate and undertake industrial problems
                      and obtain viable solutions
                    </li>
                    <li>
                      Make successful career in industry / research / higher
                      Studies.
                    </li>
                    <li>
                      Be life-long learning and should be able to work on
                      multi-disciplinary projects.
                    </li>
                    <li>
                      Be Competent for effective communication, in management
                      and in professional skills and ethics.
                    </li>
                  </ol>
                  <h2>Programme Outcomes(POs) </h2>
                  <ol className="pos" start={1}>
                    <li>
                      <b>Engineering knowledge: </b>Apply the knowledge of
                      mathematics, science, engineering fundamentals, and an
                      engineering specialisation for the solution of complex
                      engineering problems.
                    </li>
                    <li>
                      <b>Problem analysis:</b> Identify, formulate, research
                      literature, and analyse complex engineering problems
                      reaching substantiated conclusions using first principles
                      of mathematics, natural sciences, and engineering
                      sciences.
                    </li>
                    <li>
                      <b>Design/development of solutions: </b> Design solutions
                      for complex engineering problems and design system
                      components or processes that meet the specified needs with
                      appropriate consideration for public health and safety,
                      and cultural, societal, and environmental considerations.
                    </li>

                    <li>
                      <b>Conduct investigations of complex problems: </b>The
                      problems: • that cannot be solved by straightforward
                      application of knowledge, theories and techniques
                      applicable to the engineering discipline. • that may not
                      have a unique solution. For example, a design problem can
                      be solved in many ways and lead to multiple possible
                      solutions. • that require consideration of appropriate
                      constraints/requirements not explicitly given in the
                      problem statement. (like: cost, power requirement,
                      durability, product life, etc.). • which need to be
                      defined (modeled) within appropriate mathematical frame
                      work. • that often require use of modern computational
                      concepts and tools.
                    </li>

                    <li>
                      <b>Modern tool usage: </b>Create, select, and apply
                      appropriate techniques, resources, and modernengineering
                      and IT tools, including prediction and modelling to
                      complex engineering activities, with an understanding of
                      the limitations.
                    </li>
                    <li>
                      <b>The engineer and society: </b> Apply reasoning informed
                      by the contextual knowledge to assess societal, health,
                      safety, legal, and cultural issues and the consequent
                      responsibilities relevant to the professional engineering
                      practice.
                    </li>
                    <li>
                      <b>Individual and team work:</b> Function effectively as
                      an individual, and as a member or leader in diverse teams,
                      and in multidisciplinary settings.
                    </li>
                    <li>
                      <b>Environment and sustainability: </b>Understand the
                      impact of the professional engineering solutions in
                      societal and environmental contexts, and demonstrate the
                      knowledge of, and need for sustainable development.
                    </li>
                    <li>
                      <b>Ethics:</b> Apply ethical principles and commit to
                      professional ethics and responsibilities and norms of the
                      engineering practice
                    </li>
                    <li>
                      <b>Communication: </b>Communicate effectively on complex
                      engineering activities with the engineering community and
                      with t h e society at large, such as, being able to
                      comprehend and write effective reports and design
                      documentation, make effective presentations, and give and
                      receive clear instructions.
                    </li>
                    <li>
                      <b>Project management and finance: </b> Demonstrate
                      knowledge and understanding of the engineering and
                      management principles and apply these to one’s own work,
                      as a member and leader in a team, to manage projects and
                      in multidisciplinary environments.
                    </li>
                    <li>
                      <b>Life-long learning:</b>Recognise the need for, and have
                      the preparation and ability to engage inindependent and
                      life-long learning in the broadest context of
                      technological change technological change.
                    </li>
                  </ol>
                  <h2>​Programme Specific Objectives (PSOs)</h2>
                  <ol className="pso" start={1}>
                    <li>
                      Apply concepts of Design, Production and Thermal-fluid
                      sciences to solve engineering problems utilizing advanced
                      technology.
                    </li>
                    <li>
                      Use mechanical engineering software for the design and
                      analysis of mechanical engineering systems/processes.
                    </li>
                    <li>
                      Extend and implement new thoughts on product design and
                      development with the aids of modern CFD and CAD/CAM/CAE
                      tools, while ensuring best manufacturing practices.
                    </li>
                  </ol>
                </div>
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
        {/* <h1 className="consulting">Publications</h1> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
