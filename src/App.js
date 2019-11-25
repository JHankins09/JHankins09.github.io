import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Home from './components/Home/Home'
import Spotify from './components/Spotify/Spotify'
import CodeActivity from './components/CodeActivity/CodeActivity'

const App = () => (
  <body>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/" exact component={Spotify} />
      <Route path="/" exact component={CodeActivity} />
    </Router>
  </body>
)


export default App;
