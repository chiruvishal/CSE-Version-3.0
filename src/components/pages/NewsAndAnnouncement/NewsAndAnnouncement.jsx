// import React from 'react';
// import './NewsAndAnnouncement.css';
// export default function NewsAndAnnouncement() {
//   return (
//     <>
//       <h1 className="consulting">NewsAndAnnouncement</h1>
//     </>
//   );
// }
import React from 'react';
import './NewsAndAnnouncement.css';
import Tablerow from './Tablerow';
const myComponent = {
  width: '100%',
  height: '300px',
  overflowX: 'hidden',
  overflowY: 'scroll',
};
export default function NewsAndAnnouncement() {
  const newsArray = [
    { date: '30 may 2023', link: '/', descript: 'Lorem ipsum dolor sit' },
    { date: '30 may 2023', link: '/', descript: 'Lorem ipsum dolor sit' },
    { date: '30 may 2023', link: '/', descript: 'Lorem ipsum dolor sit' },
    { date: '30 may 2023', link: '/', descript: 'Lorem ipsum dolor sit' },
    { date: '30 may 2023', link: '/', descript: 'Lorem ipsum dolor sit' },
    { date: '30 may 2023', link: '/', descript: 'Lorem ipsum dolor sit' },
    { date: '30 may 2023', link: '/', descript: 'Lorem ipsum dolor sit' },
    { date: '30 may 2023', link: '/', descript: 'Lorem ipsum dolor sit' },
    { date: '30 may 2023', link: '/', descript: 'Lorem ipsum dolor sit' },
    { date: '30 may 2023', link: '/', descript: 'Lorem ipsum dolor sit' },
  ];
  return (
    <>
      <div className="first">
        <div className="heading">
          <h3>News And Announcement</h3>
          <div className="news" style={myComponent}>
            <div></div>
            <table className="newstable">
              {newsArray.map(({ date, link, descript }) => (
                <tr>
                  {/* <Tablerow /> */}
                  <div classname="datenews">
                    <p>{date}</p>
                    <a href="link">
                      <div classname="descript">{descript}</div>
                    </a>
                  </div>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
      {/* <h1 className="consulting">NewsAndAnnouncement</h1> */}
    </>
  );
}
