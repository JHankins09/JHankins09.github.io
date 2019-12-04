import React from 'react'
import { Link } from 'react-router-dom'
import './ScrollBar.css'

// <Link className="resume" to={'/resume/'}>
// <div className="card--content">
// <h1 className="scrollLink">
// Resume<br/>
// <br/>
// </h1>
// </div>
// </Link>

  const ScrollBar = () => (
    <section>
    <div className="scrollBar">
        <section className="card">

          <Link className="homeLink" to={'/'}>
            <div className="card--content">
              <h1 className="scrollLink">
                Home<br/>
                <br/>
              </h1>
            </div>
          </Link>

          <Link className="bioLink" to={'/AboutMe/'}>
            <div className="card--content">
              <h1 className="scrollLink">
                About<br/>
                Me
              </h1>
            </div>
          </Link>

          <Link className="skillsLink" to={'/skills/'}>
            <div className="card--content">
              <h1 className="scrollLink">
                Dev<br/>
                Skills
              </h1>
            </div>
          </Link>

          <Link className="projects" to={'/projects/'}>
            <div className="card--content">
              <h1 className="scrollLink">
                Projects<br/>
                Work
              </h1>
            </div>
          </Link>

          <Link className="code" to={'/code-snippets/'}>
            <div className="card--content">
              <h1 className="scrollLink">
                Code<br/>
                Snippets
              </h1>
            </div>
          </Link>

          <Link className="personal" to={'/contact/'}>
            <div className="card--content">
              <h1 className="scrollLink">
                Contact<br/>
                Me
              </h1>
            </div>
          </Link>

        </section>
      </div>
    </section>
  )

export default ScrollBar
