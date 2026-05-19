import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../navbar/NavBar.js';
import Home from '../pages/home/Home.js'
import NotFound from '../notfound/NotFound.js';
import GradStudies from '../pages/graduatestudies/GraduateStudies.js';
import Projects from '../pages/graduatestudies/projects/Projects.js';

const App = () => (
  <div>
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
          element={<Projects />} />

        <Route
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
    <footer>
      <p>&#169; Sheena Monroe 2025</p>
    </footer>
  </div>
);

export default App;
