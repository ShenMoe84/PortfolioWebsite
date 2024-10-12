import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import styles from './App.module.css';

const App = () => {
  <div>
    <BrowserRouter>
      <Route
        Component={NavBar}
      />
    </BrowserRouter>
  </div>
}

export default App;
