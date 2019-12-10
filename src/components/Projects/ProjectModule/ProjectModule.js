import React, { Fragment, useState } from 'react'
import Emojis from '../../SoftwareEmojis/SoftwareEmojis'
import './ProjectModule.css'

const ProjectModule = ( projects ) => {

  const project = projects.components

  return (
    <Fragment>
      <div className='projectModule'>
        <p className='projectCounter'>Project {project.number} of {project.total}</p>
        <div className='projectTitle'>
          <h1 className='projectName'>{project.name}</h1>
          <p className='projectType'>{project.type}</p>
        </div>
        <div className='projectHeaders'>
        <img src={project.image} alt={project.imageDesc} className='projectImage'/>
        <div className='projectHeaderButtons'>
          <a href={project.gitHub} target='_blank' rel='noopener noreferrer'>
            <button><Emojis.GitHub /></button>
          </a>
          { project.demo ?
            ( <a href={project.demoUrl} target='_blank' rel='noopener noreferrer'>
                <button>
                  <span className='skillElement'>Demo</span></button>
              </a>) :
            null }
          { project.creds && project.demo ?
            <div className='creds'>
            <p>Demo Login:<br/> <strong>{project.creds.username}</strong> <br/>
            Demo Password:<br/> <strong>{project.creds.password}</strong></p>
            </div> :
            null }
        </div>
        </div>
        <div className='projectDescription'>
          <p>{project.description}</p>
        </div>
        <div className='projectStack'>
          {project.tech.map((x) => (
            <div className='techTag'>{x}<br/></div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default ProjectModule
