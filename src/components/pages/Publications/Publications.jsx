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
  const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
  const [year, setyear] = useState(2023);
  let currentyear = 2023;
  const selectHandler = (event) => {
    setyear(event.target.value);
    console.log(event.target.value);
    console.log(year);
  };
  const publish = [
    {
      year: 2023,
      publishs: [
        {
          description:
            'Domngam Boje, Mini Loya, Ananta Kumar Atta* "Amidoquinoline-based xylofuranose derivative for selective detection of Cu2+ in aqueous medium", Journal of Photochemistry and Photobiology A: Chemistry, vol. 437, pp. 114468, 2023.',
          link: 'jbjbj',
        },
        {
          description: 'jbjbjb',
          link: 'jojoj',
        },
        {
          description: 'jjbuj',
          link: 'hihih',
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
        <div className="publication">
          <h3>Publications</h3>
          <div className="maint">
            <div className="selectyr">
            <div className="selectyeasr">
            <select name="Year" id="sel">
              <option>--Select Year--</option>
              {years.map((yr) => (
                <option value={yr} onChange={selectHandler}>
                  {yr}
                </option>
              ))}
            </select>
            </div>
            <div className="syear">
              <h2>Year: {year}</h2>
            </div>
            </div>
            <div className="pubtable">
              {publish.map(({ year, publishs }) => (
                <table className="publishtable">
                  <thead>
                    <tr>
                      <th className='wid'>S.no.</th>
                      <th>Publications</th>
                      <th className='wid'>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {publishs.map((pub, idx) => (
                      <tr>
                        <td>{idx + 1}</td>
                        <td>{pub.description}</td>
                        <td>
                          <a href={pub.link}>Link</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
