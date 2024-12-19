import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import styles from './App.module.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route
          exact path='/graduatework'
          Component={NavBar}
        />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App;
