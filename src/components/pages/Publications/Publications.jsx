import React, { useState } from 'react';
import './Publications.css';
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './components/pages/Footer';
import Areas from '../Research/Research';
import Project from '../Projects/Projects';
import Drop from './Drop';
import './Drop.css';
export default function Publications() {
  const [publishs, setpublish] = useState([
    {
      question: 'Dr. Dilip Singh Sisodia',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.',
      open: false,
    },
    {
      question: 'Deepak Singh',
      answer: 'You! The viewer!',
      open: false,
    },
    {
      question: 'Sonal Yadav',
      answer: 'This many!',
      open: false,
    },
    {
      question: 'Deepak Singh',
      answer: 'You! The viewer!',
      open: false,
    },
    {
      question: 'Deepak Singh',
      answer: 'You! The viewer!',
      open: false,
    },
    {
      question: 'Deepak Singh',
      answer: 'You! The viewer!',
      open: false,
    },
    {
      question: 'Deepak Singh',
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
      <div className="main-box">
        <div className="side-box">
          <div className="side-container">
            <div className="side-top-box">
              <p>Research Areas</p>
            </div>

            <ul className="side-link">
              <li>
                <div className="side-border-left" />
                <Link to="/Areas">Areas</Link>
              </li>
              <li>
                <div className="side-border-left" />
                <Link to="/Project">Project</Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/Publication">Publications</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="drops">
          <h3>Publications</h3>
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
