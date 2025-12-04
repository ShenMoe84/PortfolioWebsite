import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../navbar/NavBar.js';
import Home from '../pages/home/Home.js'
import styles from './App.module.css';
import NotFound from '../notfound/NotFound.js';
import GradWork from '../pages/graduatework/GraduateWork.js';

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
          path='graduatework'
          element={<GradWork />} />

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
