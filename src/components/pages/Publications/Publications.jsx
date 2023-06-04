import React, { useState } from 'react';
import './Publications.css';
import { Link } from 'react-router-dom';
import Drop from './Drop';
import './Drop.css';
export default function Publications() {
  const years = [2023, 2022];
  const [Year, setYear] = useState('2023');
  let currentyear = 2023;
  const publish = [
    {
      year: '2023',
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
    {
      year: '2022',
      publishs: [
        {
          description:
            'Domngam Boje, Mini Loya, anuanta Kumar Atta* "Amidoquinoline-based xylofuranose derivative for selective detection of Cu2+ in aqueous medium", Journal of Photochemistry and Photobiology A: Chemistry, vol. 437, pp. 114468, 2023.',
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
  const selectHandler = (event) => {
    // if(event.target.value=='--Select Year--')
    // setYear(2023);
    // else
    setYear(event.target.value);
  };
  // //const res = publish.find(({ year }) => year === Year);
  // const result = publish.find(({ year }) => year === Year);
  // console.log(result);
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
        <div className="publication">
          <h3>Publications</h3>
          <div className="maint">
            <div className="selectyr">
              <div className="selectyeasr">
                <select name="Year" id="sel" onChange={selectHandler}>
                  <option value="2023">--Select Year--</option>
                  {years.map((yr) => (
                    <option value={yr}>{yr}</option>
                  ))}
                </select>
              </div>
              <div className="syear">
                <h2>Year: {Year}</h2>
              </div>
            </div>
            <div className="pubtable">
              {publish.map(({ year, publishs }) =>
                year === Year ? (
                  <table className="publishtable">
                    <thead>
                      <tr>
                        <th className="wid">S.no.</th>
                        <th>Publications</th>
                        <th className="wid">Link</th>
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
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
