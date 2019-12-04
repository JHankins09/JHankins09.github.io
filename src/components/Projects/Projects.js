import React, { Fragment } from 'react'
import './Projects.css'

import ChickenPix from './Photos/ChickenPix.png'
import Groups from './Photos/Groups.png'
import TicTacToe from './Photos/Tic-Tac-Toe.png'
import Trips from './Photos/Trips.png'

const Projects = () => (
  <Fragment>
    <div className='projectContainer'>
      <div className='projectWrapper projectOdd'>
        <div className='imageWrapper'>
          <img className='projectsImage' src={Trips} alt='T.R.I.P.S. application' />
          <hr width='55%' className='skillsDivider'/>
          <div className='projectModule'>
            <h1 className='projectSubTitle'>
              Details
            </h1>
            <p className='projectsDescription'>
              Capstone coding bootcamp project.<br/>
              First React.js exprience.
            </p>
          </div>
        </div>
        <div className='copyWrapper'>
          <h1 className='projectTitle'>
            T.R.I.P.S.
          </h1>
          <p className='projectType'>
            Full Stack
          </p>
          <div className='projectModule'>
            <h1 className='projectSubTitle'>
              Tech
            </h1>
            <p className='projectsDescription'>
              <span className='highlight'>
                React.js <i className="devicon-react-original"></i>
              </span><br/>
              Express.js <i className="devicon-express-original"></i>
              <br/>
              <span className='highlight'>
              Node.js <i className="devicon-nodejs-plain"></i>
              </span><br/>
              MongoDB <i className="devicon-mongodb-plain"></i>
            </p>
          </div>
          <hr width='55%' className='skillsDivider'/>
          <div className='projectModule'>
            <button className='projectLink'>
              Demo
            </button>
            <p className='projectsDescription'>
              Username: Welcome@guest.com<br/>
              Password: guest
            </p>
          </div>
          <hr width='55%' className='skillsDivider'/>
          <div className='projectModule'>
            <button className='projectLink'>GitHub</button>
          </div>
        </div>
      </div>

      <hr width='55%' className='skillsDivider'/>

      <div className='projectWrapper projectEven'>
        <div className='imageWrapper'>
          <img className='projectsImage' src={ChickenPix} alt='T.R.I.P.S. application' />
          <hr width='55%' className='skillsDivider'/>
          <div className='projectModule'>
            <h1 className='projectSubTitle'>
              Details
            </h1>
            <p className='projectsDescription'>
              4 person team build.<br/>
              Primary role - Front-End Lead.
            </p>
          </div>
        </div>
        <div className='copyWrapper'>
          <h1 className='projectTitle'>
            ChickenPix
          </h1>
          <p className='projectType'>
            Full Stack
          </p>
          <div className='projectModule'>
            <h1 className='projectSubTitle'>
              Tech
            </h1>
            <p className='projectsDescription'>
              <span className='highlight'>
                React.js <i className="devicon-react-original"></i>
              </span><br/>
              Express.js <i className="devicon-express-original"></i>
              <br/>
              MongoDB <i className="devicon-mongodb-plain"></i>
            </p>
          </div>
          <hr width='55%' className='skillsDivider'/>
          <div className='projectModule'>
            <button className='projectLink'>
              Demo
            </button>
            <p className='projectsDescription'>
              Username: Welcome@guest.com<br/>
              Password: guest
            </p>
          </div>
          <hr width='55%' className='skillsDivider'/>
          <div className='projectModule'>
            <button className='projectLink'>GitHub</button>
          </div>
        </div>
      </div>


    </div>
  </Fragment>
)

export default Projects
