import React from 'react';
import Banner from './Banner.jsx';
import TestiMonials from './Testimonials.jsx';
import NewsandAnnouncement from '../NewsAndAnnouncement/NewsAndAnnouncement';
import NewsAndAnnouncement from '../NewsAndAnnouncement/NewsAndAnnouncement';
import Events from '../Events/Events';
import './Home.css';
import MyCarousel from './MyCarousel';
export default function Home() {
  return (
    <div>
      <MyCarousel />
      <div className="mu">
        <NewsAndAnnouncement />
        <Events />
      </div>
    </div>
  );
}
