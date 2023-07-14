import React, { useState } from "react";
import "./Academics.css";
import { Link } from "react-router-dom";

export default function Academics() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: "url(https://i.postimg.cc/9fpN7VnW/IMG-2585.jpg)",
          }}
        >
          <div className="nitr-header-transparent-substitute"></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: "60px" }}
            >
              <div className="green-line-text">Academics</div>
            </div>
          </div>
        </div>
        <h1 className="consulting">Academics</h1>
      </div>
      <div className="main-boxx">
        <div className="side-boxxx">
          <div className="side-container">
            <div className="side-top-box">
              <p>Academics</p>
            </div>
            <ul className="side-link">
              <li>
                <div className="side-border-left"></div>
                <Link to="/Course">Course</Link>
              </li>
              <li>
                <div className="side-border-left"></div>
                <Link to="/Academics">Programs Offered</Link>
              </li>
              <li>
                <div className="side-border-left"></div>
                <Link to="/Activities">Activities</Link>
              </li>
              <li>
                <div className="side-border-left"></div>
                <Link to="/POs">POs, PEOs, PSOs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dr">
          <div className="Aiml">
            <h3 className="headm">BTech</h3>
            <div className="para">
              <p>
                A broad-based program that covers the fundamentals of computer
                science, including programming, algorithms, data structures,
                operating systems, and software engineering. This program
                provides a strong foundation for the theoretical underpinnings
                of computer science and prepares students for a variety of
                careers in software development, IT, and other technical fields.
                B.Tech Computer Science and Engineering program provides you
                with a sound knowledge of computing principles and applications
                in scientific and engineering domains. It develops in you the
                ability to analyze complex engineering problems and generate
                solutions through computing. It also gives you exposure to
                principles and practices of design and development of computing
                systems. The graduates will apply their knowledge of science,
                mathematics, and computer science and engineering to identify
                and solve complex engineering problems across a broad range of
                application areas. The graduates will work and communicate
                effectively in an interdisciplinary environment, either
                independently or in a team, and demonstrate significant
                leadership qualities.
              </p>
              <div
                className={`expand-icon ${expanded ? "expanded" : ""}`}
                onClick={toggleExpand}
              >
                <span>{expanded ? "-" : "+"}</span>
              </div>
            </div>
            {expanded && (
              <div className="expanded-content">
                <h2>Programme Outcomes (POs)</h2>
                <ol className="pos" start={1}>
                  <li>
                    <b>Engineering knowledge:</b> Apply the knowledge of
                    mathematics, science, engineering fundamentals, and an
                    engineering specialization to the solution of complex
                    engineering problems.
                  </li>
                  <li>
                    <b>Problem analysis:</b> Identify, formulate, research
                    literature, and analyze complex engineering problems
                    reaching substantiated conclusions using first principles
                    of mathematics, natural sciences, and engineering sciences.
                  </li>
                  <li>
                    <b>Design/development of solutions:</b> Design solutions
                    for complex engineering problems and design system
                    components or processes that meet the specified needs with
                    appropriate consideration for public health and safety and
                    cultural, societal, and environmental considerations.
                  </li>
                  <li>
                    <b>Conduct investigations of complex problems:</b> Use
                    research-based knowledge and research methods including
                    design of experiments, analysis and interpretation of data,
                    and synthesis of information to provide valid conclusions.
                  </li>
                  <li>
                    <b>Modern tool usage:</b> Create, select, and apply
                    appropriate techniques, resources, and modern engineering
                    and IT tools, including prediction and modeling to complex
                    engineering activities, with an understanding of the
                    limitations.
                  </li>
                  <li>
                    <b>The engineer and society:</b> Apply reasoning informed
                    by the contextual knowledge to assess societal, health,
                    safety, legal, and cultural issues and the consequent
                    responsibilities relevant to the professional engineering
                    practice.
                  </li>
                  <li>
                    <b>Environment and sustainability:</b> Understand the
                    impact of the professional engineering solutions in
                    societal and environmental contexts and demonstrate the
                    knowledge of and the need for sustainable development.
                  </li>
                  <li>
                    <b>Ethics:</b> Apply ethical principles and commit to
                    professional ethics and responsibilities and norms of the
                    engineering practice.
                  </li>
                  <li>
                    <b>Individual and team work:</b> Function effectively as an
                    individual and as a member or leader in diverse teams and
                    in multidisciplinary settings.
                  </li>
                  <li>
                    <b>Communication:</b> Communicate effectively on complex
                    engineering activities with the engineering community and
                    with society at large, such as being able to comprehend and
                    write effective reports and design documentation, make
                    effective presentations, and give and receive clear
                    instructions.
                  </li>
                  <li>
                    <b>Project management and finance:</b> Demonstrate
                    knowledge and understanding of the engineering and
                    management principles and apply these to one's own work, as
                    a member and leader in a team, to manage projects and in
                    multidisciplinary environments.
                  </li>
                  <li>
                    <b>Life-long learning:</b> Recognize the need for and have
                    the preparation and ability to engage in independent and
                    lifelong learning in the broadest context of technological
                    change.
                  </li>
                </ol>
                <h2>Programme Educational Objectives (PEOs)</h2>
                <ol className="peo" start={1}>
                  <li>
                    Cater to the needs of Indian as well as multinational
                    industries.
                  </li>
                  <li>
                    Be competent with a strong technological background to
                    analyze data, formulate and undertake industrial problems,
                    and obtain viable solutions.
                  </li>
                  <li>
                    Make a successful career in industry, research, or higher
                    studies.
                  </li>
                  <li>
                    Be lifelong learners and be able to work on
                    multi-disciplinary projects.
                  </li>
                  <li>
                    Be competent in effective communication, management, and
                    professional skills and ethics.
                  </li>
                </ol>
                <h2>Programme Specific Objectives (PSOs)</h2>
                <ol className="pso" start={1}>
                  <li>
                    Apply concepts of design, production, and thermal-fluid
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
                    tools while ensuring the best manufacturing practices.
                  </li>
                </ol>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </>
  );
}
