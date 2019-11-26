import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Bio from './components/Bio/Bio'
import Skills from './components/Skills/Skills'
import Spotify from './components/Spotify/Spotify'
import ScrollBar from './components/ScrollBar/ScrollBar'
import Resume from './components/Resume/Resume'
import Personal from './components/Personal/Personal'
import Intro from './components/Intro/Intro'

const App = () => (
  <Fragment>
    <Router>
      <main>
        <Route path="/" component={Header} />
        <Route path="/" exact component={Intro} />
        <Route path="/Bio" exact component={Bio} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/personal" exact component={Personal} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/" component={ScrollBar} />
      </main>
      <aside>
        <Route path="/" component={Spotify} />
      </aside>
    </Router>
  </Fragment>
)

// <Route path="/" exact component={CodeActivity} />

export default App;
