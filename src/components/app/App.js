import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../navbar/NavBar.js';
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
        <Route
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
