import React, { Fragment } from 'react'

import './Skills.css'
import Emojis from './../SoftwareEmojis/SoftwareEmojis'

const Skills = () => (
  <Fragment>
    <div className='skillsContainer'>
      <div className='skillsWrapper'>

        <div className='languages skillSection'>
          <div className='skillsTitle'>
            <h1 className='skillsSectionTitle'>Languages</h1>
          </div>
          <p className='skillsDescription'>
            <Emojis.Html />
            <Emojis.Css /><br/>
            <Emojis.JavaScript />
            <Emojis.Ruby />
          </p>
        </div>

        <hr width='55%' className='skillsDivider'/>

        <div className='frameWorks skillSection'>
          <div className='skillsTitle'>
            <h1 className='skillsSectionTitle'>FrameWorks</h1>
          </div>
          <p className='skillsDescription'>
              <Emojis.ReactJS />
              <Emojis.Bootstrap /><br/>
              <Emojis.Rails />
              <Emojis.Express /><br/>
              <Emojis.PostGresQL />
              <Emojis.Node />
          </p>
        </div>

        <hr width='55%' className='skillsDivider'/>

        <div className='technologies skillSection'>
          <div className='skillsTitle'>
            <h1 className='skillsSectionTitle'>Technologies</h1>
          </div>
          <p className='skillsDescription'>
              <Emojis.Mongo />
              <Emojis.Atom /><br/>
              <Emojis.Git />
              <Emojis.GitHub />
          </p>
        </div>

        <hr width='55%' className='skillsDivider'/>

        <div className='busMarTech skillSection'>
          <div className='skillsTitle'>
            <h1 className='skillsSectionTitle'>Business & Marketing<br/>Technologies</h1>
          </div>
          <p className='skillsDescription'>
              <Emojis.Excel /><br/>
              <Emojis.Ion /><br/>
              <Emojis.FaceBook /><br/>
              <Emojis.Google />
          </p>
        </div>

        <hr width='55%' className='skillsDivider'/>

        <div className='comingsoon skillSection'>
          <div className='skillsTitle'>
            <h1 className='skillsSectionTitle'>In Beta</h1>
          </div>
          <p className='skillsDescription'>
              <Emojis.Python />
              <Emojis.Php /><br/>
              <Emojis.Angular />
          </p>
        </div>
      </div>
    </div>
  </Fragment>
)

export default Skills
