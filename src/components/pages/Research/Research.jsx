import React from 'react';
import './Research.css';
import { Link } from 'react-router-dom';

export default function Research() {
  const areas = [
    {
      areaname: 'Artificial Intelligence | Machine Learning',
      content: [
        {
          imglink: 'https://i.postimg.cc/C52R1xhg/Mr-Dilip-Singh-Sisodia.jpg',
          name: 'Dr.Dilip Singh Sisodia',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/d3V4q9MF/Mr-Pradeep-Singh.jpg',
          name: 'Dr.Pradeep Singh',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/fRC7b9KT/jitendra.jpg',
          name: 'Dr.Jitendra Kumar Rout',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/tgVgc0YQ/sonal-yadav.png',
          name: 'Dr.Sonal Yadav',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/KvWXK18F/ravi.jpg',
          name: 'Mr.Ravi Kumar',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/1X4CPK6F/visahal.jpg',
          name: 'Mr.Vishal Sathawane',
          proflink: '',
        },
      ],
    },
    {
      areaname: 'Data Minig | Text Mining',
      content: [
        {
          imglink: 'https://i.postimg.cc/C52R1xhg/Mr-Dilip-Singh-Sisodia.jpg',
          name: 'Dr.Dilip Singh Sisodia',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/hGJPnStH/Ms-Aakanksha-Sharaff.jpg',
          name: 'Dr. Aakanksha Sharaff',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/c4hXNWch/Naresh-Kumar-Nagwani.jpg',
          name: 'Dr.Naresh Kumar Nagwani',
          proflink: '',
        },
      ],
    },
    {
      areaname: 'Software Engineering',
      content: [
        {
          imglink: 'https://i.postimg.cc/hGJPnStH/Ms-Aakanksha-Sharaff.jpg',
          name: 'Dr. Aakanksha Sharaff',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/c4hXNWch/Naresh-Kumar-Nagwani.jpg',
          name: 'Dr.Naresh Kumar Nagwani',
          proflink: '',
        },
        {
          imglink: 'https://i.postimg.cc/CK1TTJm5/Mr-Pradeep-Singh.jpg',
          name: 'Dr.Pradeep Singh',
          proflink: '',
        },
      ],
    },
  ];
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
                <Link to="/Research-Areas">
                  <p>Research Areas</p>
                </Link>
              </li>
              <li>
                <div className="side-border-left" />
                <Link to="/Project">
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/Publications">
                  <p>Publications</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Research Areas</h3>
          {areas.map(({ areaname, content }) => (
            <div className="Aiml">
              <p>{areaname}</p>
              <div className="prof">
                {content.map(({ imglink, name, proflink }) => (
                  <div className="contentarea">
                    <img src={imglink} height="72" width="50"></img>
                    <div className="profname">
                    <a href={proflink}>{name}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
