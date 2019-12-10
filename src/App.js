import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Spotify from './components/Spotify/Spotify'
import ScrollBar from './components/ScrollBar/ScrollBar'
import Resume from './components/Resume/Resume'
import Intro from './components/Intro/Intro'
import Error from './components/Error/Error.js'
import Contact from './components/Contact/Contact.js'
import Projects from './components/Projects/Projects.js'

// <Route path="/personal" exact component={Personal} />
// <Route path="/resume" exact component={Resume} />
// basename={process.env.PUBLIC_URL}

console.log(process.env.PUBLIC_URL)

const App = () => (
  <Fragment>
    <Router >
      <main>
          <div className='header'>
            <Route path="/" component={Header} />
            </div>
          <div className='appContent'>
          <Switch>
            <Route path="/" exact component={Intro} />
            <Route path="/AboutMe" exact component={AboutMe} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/projects" exact component={Projects} />
            <Route component={Error} />

          </Switch>
          </div>
          <div className='footer'>
            <Route path="/" component={ScrollBar} />
          </div>
      </main>
      <aside>
        <Route path="/" component={Spotify} />
      </aside>
    </Router>
  </Fragment>
)

// <Route path="/" exact component={CodeActivity} />

export default App;
