import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from '../app/App.module.css'
import NavBar from '../navbar/NavBar.js';
import Home from '../pages/home/Home.js';
import NotFound from '../pages/notfound/NotFound.js';
import GradStudies from '../pages/graduatestudies/GraduateStudies.js';
import Projects from '../pages/graduatestudies/projects/Projects.js';
import SoftwareDev from '../pages/softwaredev/SoftwareDev.js';
import popUpDataProjects from "../../data/PopUpObjectsProjects.js";
import popUpDataChallenges from "../../data/PopUpObjectsChallenges.js";
import More from '../pages/more/More.js';

const App = () => (
  <div className={styles.body}>
    <BrowserRouter>
      <Routes>
        <Route
          path='/*'
          element={<NavBar />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path='/'
          element={<Home />}
        />
        <Route
          exact
          path='/graduatestudies'
          element={<GradStudies data={popUpDataProjects} />}
        />
        <Route
          exact
          path='graduatestudies/projects/*'
          element={<Projects data={popUpDataChallenges} />}
        />

        <Route
          exact
          path='softwaredevelopment'
          element={<SoftwareDev />} />

        <Route
          exact
          path='more'
          element={<More />} />



        <Route
          exact
          path='/*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
    <footer className={styles.footer}>
      <p>&#169; Sheena Monroe 2026</p>
    </footer>
  </div>
);

export default App;
