import React, { useState } from 'react';
import './Publications.css';
import { Link } from 'react-router-dom';
import Drop from './Drop';
import './Drop.css';
export default function Publications() {
  // const [publishs, setpublish] = useState([
  //   {
  //     question: 'Dr. Dilip Singh Sisodia',
  //     answer:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.',
  //     open: false,
  //   },
  //   {
  //     question: 'Deepak Singh',
  //     answer: 'You! The viewer!',
  //     open: false,
  //   },
  //   {
  //     question: 'Sonal Yadav',
  //     answer: 'This many!',
  //     open: false,
  //   },
  //   {
  //     question: 'Deepak Singh',
  //     answer: 'You! The viewer!',
  //     open: false,
  //   },
  //   {
  //     question: 'Deepak Singh',
  //     answer: 'You! The viewer!',
  //     open: false,
  //   },
  //   {
  //     question: 'Deepak Singh',
  //     answer: 'You! The viewer!',
  //     open: false,
  //   },
  //   {
  //     question: 'Deepak Singh',
  //     answer: 'You! The viewer!',
  //     open: false,
  //   },
  // ]);

  // const toggledrop = (index) => {
  //   setpublish(
  //     publishs.map((publish, i) => {
  //       if (i === index) {
  //         publish.open = !publish.open;
  //       } else {
  //         publish.open = false;
  //       }

  //       return publish;
  //     })
  //   );
  // };
  const year = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
  const [selectedyear, setyear] = useState([2023]);
  const selectHandler = (event) => {
    setyear(event.target.value);
  };
  const publish = [
    {
      year: 2023,
      publishs: [
        {
          discription: 'hknhujbujv',
          link: 'jbjbj',
        },
        {
          discription: 'jbjbjb',
          link: 'jojoj',
        },
        {
          discription: 'jjbuj',
          link: 'hihih',
        },
      ],
    },
    {
      year: 2022,
      publishs: [
        {
          discription: '',
          link: '',
        },
        {
          discription: '',
          link: '',
        },
        {
          discription: '',
          link: '',
        },
      ],
    },
    {
      year: 2021,
      publishs: [
        {
          discription: '',
          link: '',
        },
        {
          discription: '',
          link: '',
        },
        {
          discription: '',
          link: '',
        },
      ],
    },
    {
      year: 2020,
      publishs: [
        {
          discription: '',
          link: '',
        },
        {
          discription: '',
          link: '',
        },
        {
          discription: '',
          link: '',
        },
      ],
    },
    {
      year: 2019,
      publishs: [
        {
          discription: '',
          link: '',
        },
        {
          discription: '',
          link: '',
        },
        {
          discription: '',
          link: '',
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
        {/* <div className="drops">
          <h3>Publications</h3>
          {publishs.map((publish, index) => (
            <Drop
              publish={publish}
              index={index}
              key={index}
              toggledrop={toggledrop}
            />
          ))}
        </div> */}
        <div>
          <h3>Publications</h3>
          <select name="Year">
            {year.map((yr) => (
              <option value={yr} onChange={selectHandler}>
                {yr}
              </option>
            ))}
          </select>
          <div>
            <h2>Year: {setyear}</h2>
          </div>
          <div>
            {publish.map(({ year, publishs }) => (
              <table>
                <tr>
                  <th>Index</th>
                  <th>Publications</th>
                  <th>Link</th>
                </tr>
                {publishs.map(({ description, link, index }) => (
                  <tr>
                    <td>{index}</td>
                    <td>{description}</td>
                    <td>
                      <a href={link}>Link</a>
                    </td>
                  </tr>
                ))}
              </table>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
