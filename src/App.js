import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import People from './components/pages/Faculty/Faculty';
import POs from './components/pages/POs/POs';
import ResearchAreas from './components/pages/Research/Research';
import Project from './components/pages/Projects/Projects';
import Publications from './components/pages/Publications/Publications';
import Course from './components/pages/CourseOverview/CourseOverview';
import AluminiNetwork from './components/pages/AluminiNetwork/AluminiNetwork';
import Gallary from './components/pages/Gallary/Gallary';
import StudentSection from './components/pages/StudentSection/StudentSection';
import Achievements from './components/pages/Achievements/Achievements';
import Placements from './components/pages/PlacementStatistics/PlacementStatistics';
import ContactUs from './components/pages/ContactInformation/ContactInformation';

import About from './components/pages/About/About';
import VisionAndMission from './components/pages/VisionAndMission/VisionAndMission';
import Faculty from './components/pages/Faculty/Faculty';
import FacultyDetail from './components/pages/Faculty/FacultyDetail';
import AssistantProfessor from './components/pages/Faculty/AssistantProfessor';
import TempararyFaculty from './components/pages/Faculty/TempararyFaculty';
import Staff from './components/pages/Faculty/Staff';
import POs from './components/pages/POs/POs';
import History from './components/pages/History/History';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="About" component={About} />
        <Route path="/POs" component={POs} />
        <Route path="/Faculty" component={Faculty} />
        <Route path="/FacultyDetail" component={FacultyDetail} />
        <Route path="/Faculty/:FacultyId" component={FacultyDetail} />
        <Route path="/AssistantProfessor" component={AssistantProfessor} />
        <Route path="/TempararyFaculty" component={TempararyFaculty} />
        <Route path="/Staff" component={Staff} />
        <Route path="/About" component={About} />
        <Route path="/VisionAndMission" component={VisionAndMission} />
        <Route path="/Research-Areas" component={ResearchAreas} />
        <Route path="/Research-Areas" component={ResearchAreas} />
        <Route path="/Project" component={Project} />
        <Route path="/Publications" component={Publications} />
        <Route path="/Course" component={Course} />
        <Route path="/AluminiNetwork" component={AluminiNetwork} />
        <Route path="/Gallery" component={Gallary} />
        <Route path="/StudentSection" component={StudentSection} />
        <Route path="/Activities" component={Activities} />
        <Route path="/Placements" component={Placements} />
        <Route path="/ContactUs" component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
