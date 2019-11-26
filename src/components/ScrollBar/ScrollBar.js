import React from 'react'
import { Link } from 'react-router-dom'
import './ScrollBar.css'

  const ScrollBar = () => (
    <section>
      <div className="scrollBar">
        <section className="card">
          <Link className="bioLink" to={'/bio/'}>
            <div className="card--content">
              <h1 className="scrollLink">
                About Me
              </h1>
            </div>
          </Link>
          <Link className="skillsLink" to={'/skills/'}>
            <div className="card--content">
              <h1 className="scrollLink">
                Dev-Skills
              </h1>
            </div>
          </Link>
          <Link className="resume" to={'/resume/'}>
            <div className="card--content">
              <h1 className="scrollLink">
                Resume
              </h1>
            </div>
          </Link>
          <Link className="personal" to={'/personal/'}>
            <div className="card--content">
              <h1 className="scrollLink">
                Catch Up
              </h1>
            </div>
          </Link>
        </section>
      </div>
    </section>
  )

export default ScrollBar
