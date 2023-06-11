import React from 'react';
import './NewsAndAnnouncement.css';
const myComponent = {
  width: '100%',
  height: '450px',
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
          <h3 className="hen">News And Announcement</h3>
          <div className="news" style={myComponent}>
            <div className="main-news-box">
              {newsArray.map((news, idx) => (
                <div className="inside-news-box">
                  <div className="for-border">
                    <div className="newsdes">{news.date}</div>
                    <div className="alink">
                      <a href={news.link}>{news.descript}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
