import React, { useState } from 'react';
import './FacultyDetail.css';
import { Link, useParams } from 'react-router-dom';
// import FacultyCard from './FacultyCard';
// import './FacultyCard.css';
import Drop from './Drop';
import './Drop.css';
export default function FacultyDetail() {
  ///use this to get id or any param
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  
  const facultyMembers = [
    { 
      id:'0',
      name: 'Dr. Dilip Singh Sisodia ',
      picture: 'https://i.postimg.cc/fVdbRHgW/img1.png',
      Department: 'Computer science and Engineering',
      Qualification:'Ph.D. (Computer Science & Engineering), M.Tech. (Information Technology with Specialization in Artificial Intelligence), B.E. (Computer Science & Engineering)',
      Designition: 'Associate Professor & Head of the Department',
      email: ' dssisodia.cs@nitrr.ac.in',
      phone: '8462808174',
      publications: [
        'Rahul Shrivastava, Dilip Singh Sisodia, Naresh Kumar Nagwani. Deep neural network-based multi-stakeholder recommendation system exploiting multi-criteria ratings for preference learning, Expert Systems with Applications, vol.213, 2023.',
    'Deepti Sisodia, and Dilip Singh Sisodia. A Hybrid Data-Level Sampling Approach in Learning from Skewed User-Click Data for Click Fraud Detection in Online Advertising, Expert Systems, vol.-, 2022.',
    'Arati Anuragi, Dilip Singh Sisodia, Rambilas Pachori. EEG-based cross-subject Emotion Recognition using Fourier-Bessel series expansion based empirical wavelet transform and NCA feature selection method, Information Sciences, 2022.',
    'Saurabh Agrawal, Dilip Singh Sisodia, Naresh Kumar Nagwani. Functional Characterization of Unknown Protein Sequences using Neuro-Fuzzy Based Machine Learning Approach and Sequence Augmented Feature, Expert Systems with Applications, vol.205, 2022.',
    'Deepti Sisodia, and Dilip Singh Sisodia. Feature space transformation of user-clicks and deep transfer learning framework for fraudulent publisher detection in online advertising, Applied Soft Computing, vol.125, 2022.',
    'Abinash Pujahari, Dilip Singh Sisodia. Item feature refinement using matrix factorization and boosted learning-based user profile generation for content-based recommender systems, Expert Systems with Applications, vol.205, 2022.',
    'Rahul Shrivastava, Dilip Singh Sisodia, Naresh Kumar Nagwani. An Optimized Recommendation Framework Exploiting Textual Review based Opinion Mining for Generating Pleasantly Surprising, Novel yet Relevant Recommendations, Pattern Recognition Letters, vol.159, pp.91-99, 2022.',
    'Rahul Shrivastava, Dilip Singh Sisodia, Naresh Kumar Nagwani. Utility optimization-based multi-stakeholder personalized recommendation system, Data Technologies and Applications, 2022.',
    'Abinash Pujahari, Dilip Singh Sisodia. Handling Dynamic User Preferences using Integrated Point and Distribution Estimations in Collaborative Filtering, IEEE Transactions on Systems Man and Cybernetics: Systems, 2022.',
    'Deepti Sisodia, and Dilip Singh Sisodia. Feature distillation and accumulated selection for automated fraudulent publisher classification from user click data of online advertising, Data Technologies and Applications, 2022.',
    'Arati Anuragi, Dilip Singh Sisodia, Rambilas Pachori. Epileptic-seizure classification using phase-space representation of FBSE-EWT based EEG sub-band signals and ensemble learners, Biomedical Signal Processing and Control, 2021.',
    'Arati Anuragi, Dilip Singh Sisodia, Rambilas Pachori. Automated FBSE-EWT based Learning Framework for Detection of Epileptic Seizures using Time-segmented EEG Signals, Computers in Biology and Medicine, vol.136, 2021.'
    ],
      area: "Applications of Machine Learning and Soft Computing Techniques, Artificial Intelligence, Computational Intelligence, Biomedical Image/Signal Processing, Theoretical Computer Science",
      scholor:"ehfcebcfierfhrehbfhrfu"

    },
    { id:'1',
      name: 'Dr. ABC ',
      picture: 'https://i.postimg.cc/fVdbRHgW/img1.png',
      Department: 'Computer science and Engineering',
      Qualification:'Ph.D. (Computer Science & Engineering), M.Tech. (Information Technology with Specialization in Artificial Intelligence), B.E. (Computer Science & Engineering)',
      Designition: 'Associate Professor & Head of the Department',
      email: ' dssisodia.cs@nitrr.ac.in',
      phone: '8462808174',
      publication:'fuheruhfciehfcercf',
      area: "iuerhfyetdhvvjfjnfcurfhercfyerfyugufy",
      scholor:"ehfcebcfierfhrehbfhrfu"
    },
    { id:'2',
      name: 'Dr. XYZ ',
      picture: 'https://i.postimg.cc/fVdbRHgW/img1.png',
      Department: 'Computer science and Engineering',
      Qualification:'Ph.D. (Computer Science & Engineering), M.Tech. (Information Technology with Specialization in Artificial Intelligence), B.E. (Computer Science & Engineering)',
      Designition: 'Associate Professor & Head of the Department',
      email: ' dssisodia.cs@nitrr.ac.in',
      phone: '8462808174',
      publications: [
        'Rahul Shrivastava, Dilip Singh Sisodia, Naresh Kumar Nagwani. Deep neural network-based multi-stakeholder recommendation system exploiting multi-criteria ratings for preference learning, Expert Systems with Applications, vol.213, 2023.',
    'Deepti Sisodia, and Dilip Singh Sisodia. A Hybrid Data-Level Sampling Approach in Learning from Skewed User-Click Data for Click Fraud Detection in Online Advertising, Expert Systems, vol.-, 2022.',
    'Arati Anuragi, Dilip Singh Sisodia, Rambilas Pachori. EEG-based cross-subject Emotion Recognition using Fourier-Bessel series expansion based empirical wavelet transform and NCA feature selection method, Information Sciences, 2022.',
    'Saurabh Agrawal, Dilip Singh Sisodia, Naresh Kumar Nagwani. Functional Characterization of Unknown Protein Sequences using Neuro-Fuzzy Based Machine Learning Approach and Sequence Augmented Feature, Expert Systems with Applications, vol.205, 2022.',
    'Deepti Sisodia, and Dilip Singh Sisodia. Feature space transformation of user-clicks and deep transfer learning framework for fraudulent publisher detection in online advertising, Applied Soft Computing, vol.125, 2022.',
    'Abinash Pujahari, Dilip Singh Sisodia. Item feature refinement using matrix factorization and boosted learning-based user profile generation for content-based recommender systems, Expert Systems with Applications, vol.205, 2022.',
    'Rahul Shrivastava, Dilip Singh Sisodia, Naresh Kumar Nagwani. An Optimized Recommendation Framework Exploiting Textual Review based Opinion Mining for Generating Pleasantly Surprising, Novel yet Relevant Recommendations, Pattern Recognition Letters, vol.159, pp.91-99, 2022.',
    'Rahul Shrivastava, Dilip Singh Sisodia, Naresh Kumar Nagwani. Utility optimization-based multi-stakeholder personalized recommendation system, Data Technologies and Applications, 2022.',
    'Abinash Pujahari, Dilip Singh Sisodia. Handling Dynamic User Preferences using Integrated Point and Distribution Estimations in Collaborative Filtering, IEEE Transactions on Systems Man and Cybernetics: Systems, 2022.',
    'Deepti Sisodia, and Dilip Singh Sisodia. Feature distillation and accumulated selection for automated fraudulent publisher classification from user click data of online advertising, Data Technologies and Applications, 2022.',
    'Arati Anuragi, Dilip Singh Sisodia, Rambilas Pachori. Epileptic-seizure classification using phase-space representation of FBSE-EWT based EEG sub-band signals and ensemble learners, Biomedical Signal Processing and Control, 2021.',
    'Arati Anuragi, Dilip Singh Sisodia, Rambilas Pachori. Automated FBSE-EWT based Learning Framework for Detection of Epileptic Seizures using Time-segmented EEG Signals, Computers in Biology and Medicine, vol.136, 2021.'
    ],
      area: [
        'Applications of Machine Learning and Soft Computing Techniques',
        'Artificial Intelligence',
        'Computational Intelligence',
        'Biomedical Image/Signal Processing',
        'Theoretical Computer Science'
      ],
      scholor:"ehfcebcfierfhrehbfhrfu"
    },
  
  ],
  const [publishs, setpublish] = useState([
    {
      question: 'Area Of Interest',
      answer: facultyMembers[id].area,
      open: false
    },
    {
      question: 'publications',
      answer: facultyMembers[id].publications,
      open: false
    },
    {
      question: 'Scholar Information',
      answer: facultyMembers[id].scholor,
      open: false
    }
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

  const faculty = facultyMembers[id];
  return (
    <>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: 'url(https://i.postimg.cc/T3nsTnj5/IMG-2597.jpg)',
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: '60px' }}
            >
              <div className="green-line-text">People</div>

            </div>
          </div>
        </div>
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
      <div className="Aiml Fdm">
      <div className="areafd">
        <p>Dr. Dilip Singh Sisodia </p>
      </div>
        <div className="drops">
          <div className="faculty-members">
            <div className="faculty-member">
              <img src={faculty.picture} alt={faculty.name} className="faculty-picture" />
              <div className="faculty-details">
              <table className="info-table">
  <tbody>
    <tr>
      <td><strong>Department:</strong></td>
      <td>{faculty.Department}</td>
    </tr>
    <tr>
      <td><strong>Qualification:</strong></td>
      <td> {faculty.Qualification}</td>
    </tr>
    <tr>
      <td><strong>Designation:</strong></td>
      <td>{faculty.Designition}</td>
    </tr>
    <tr>
      <td><strong>Email:</strong></td>
      <td>{faculty.email}</td>
    </tr>
    <tr>
      <td><strong>Phone:</strong></td>
      <td>{faculty.phone}</td>
    </tr>
  </tbody>
</table>
                {publishs.map((publish, index) => (
                  <Drop
                    key={index}
                    publish={publish}
                    index={index}
                    toggledrop={toggledrop}
                  />
                ))}
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}