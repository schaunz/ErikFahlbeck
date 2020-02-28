import React from 'react';
import './App.css';
import './App.scss';
import Home from './pages/Home';
import Utreder from './pages/Utreder';
import Analyserar from './pages/Analyserar';
import Modererar from './pages/Modererar';
import { Router } from '@reach/router';

function App() {
  return (
    <div>
      <Router>
        <Home path='/' />
        <Analyserar path="/analyserar"/>
        <Utreder path="/utreder"/>
        <Modererar path="/modererar"/>
      </Router>
    </div>
  );
}

export default App;
