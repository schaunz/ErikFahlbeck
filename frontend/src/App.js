import React from 'react';
import './App.css';
import './App.scss';
import Home from './components/Home';
import { Router } from '@reach/router';
import SinglePost from './components/SinglePost';
import Avhandlingar from './components/Avhandlingar'

function App() {
  return (
    <div>
      <Router>
        <Home path='/' />
        <Avhandlingar path="/avhandlingar" />
        <SinglePost path="/singlepost" />
      </Router>
    </div>
  );
}

export default App;
