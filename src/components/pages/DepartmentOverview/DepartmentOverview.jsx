import React from 'react';
import './DepartmentOverview.css';

import NewsAndAnnouncement from './components/pages/NewsAndAnnouncement/NewsAndAnnouncement';
import Events from './components/pages/Events/Events';


export default function DepartmentOverview() {
  return (
    <>
      <h1 className="consulting">DepartmentOverview</h1>
    </>
    <NewsAndAnnouncement/>
      <Events/>
      
  );
}
