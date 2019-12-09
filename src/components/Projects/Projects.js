import React, { Fragment } from 'react'
import './Projects.css'
import ProjectModule from './ProjectModule/ProjectModule'
import ProjectData from './Data/ProjectData.js'

const Projects = () => {

  const projectArray = [ProjectData.portfolio,
    ProjectData.webchat,
    ProjectData.dadjokes,
    ProjectData.trips,
    ProjectData.chickenpix,
    ProjectData.groups,
    ProjectData.tictactoe
  ]

  return (
    <Fragment>
      <div className='projectWrapper'>
        <div className='projectContainer'>

        {projectArray.map((proj) => (
          <div className='moduleWrapper'>
            <ProjectModule components={proj} />
          </div>
        ))}

        </div>
      </div>
    </Fragment>
  )
}

export default Projects
