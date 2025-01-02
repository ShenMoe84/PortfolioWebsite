import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../navbar/NavBar.js';
import Home from '../pages/home/Home.js'
import styles from './App.module.css';
import NotFound from '../notfound/NotFound.js';

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
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
