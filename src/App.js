import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home/Home'

const App = () => (
  <Router>
    <Router path="/" exact component={Home} />
  </Router>
)


export default App;
