import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from '../app/App.module.css'
import NavBar from '../navbar/NavBar.js';
import Home from '../pages/home/Home.js';
import NotFound from '../notfound/NotFound.js';
import GradStudies from '../pages/graduatestudies/GraduateStudies.js';
import Projects from '../pages/graduatestudies/projects/Projects.js';

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
          path='/'
          element={<Home />}
        />
        <Route
          path='graduatestudies'
          element={<GradStudies />} />
        <Route
          path='graduatestudies/projects'
          element={<Projects accordionPositions={["section1", "section2", "section3", "section4"]} />} />

        <Route
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
