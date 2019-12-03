import React, { Fragment } from 'react'

import './Skills.css'
import CodeActivity from './../CodeActivity/CodeActivity'

const Skills = () => (
  <Fragment>
    <div className='skillsContainer'>
      <div className='skillsWrapper'>

        <div className='languages skillSection'>
          <div className='skillsTitle'>
            <h1 className='skillsSectionTitle'>Languages</h1>
          </div>
          <div className='skillsDescription'>
            <p>
              <span className='skillElement'>HTML5 <i className="devicon-html5-plain"></i></span>
              <span className='skillElement'>CSS3 <i className="devicon-css3-plain"></i></span>
              <span className='skillElement'>JavaScript <i className="devicon-javascript-plain"></i> </span>
              <span className='skillElement'>Ruby <i className="devicon-ruby-plain"></i></span>
            </p>
          </div>
        </div>

        <hr width='55%' className='skillsDivider'/>

        <div className='frameWorks skillSection'>
          <div className='skillsTitle'>
            <h1 className='skillsSectionTitle'>Frame Works</h1>
          </div>
          <div className='skillsDescription'>
            <p>
              <span className='skillElement'>React.JS <i className="devicon-react-original"></i></span>
              <span className='skillElement'>Boostrap <i className="devicon-bootstrap-plain"></i></span>
              <span className='skillElement'>Rails <i className="devicon-rails-plain"></i></span>
              <span className='skillElement'>Express.JS <i className="devicon-express-original"></i></span>
              <span className='skillElement'>PostgresQL <i className="devicon-postgresql-plain"></i></span>
              <span className='skillElement'>node.JS <i className="devicon-nodejs-plain"></i></span>
            </p>
          </div>
        </div>

        <hr width='55%' className='skillsDivider'/>

        <div className='technologies skillSection'>
          <div className='skillsTitle'>
            <h1 className='skillsSectionTitle'>Technologies</h1>
          </div>
          <div className='skillsDescription'>
            <p>
              <span className='skillElement'>Mongo.DB <i className="devicon-mongodb-plain"></i></span>
              <span className='skillElement'>Atom <i className="devicon-atom-original"></i></span>
              <span className='skillElement'>Git <i className="devicon-git-plain"></i></span>
              <span className='skillElement'>GitHub <i className="devicon-github-plain"></i></span>
            </p>
          </div>
        </div>

        <hr width='55%' className='skillsDivider'/>

        <div className='busMarTech skillSection'>
          <div className='skillsTitle'>
            <h1 className='skillsSectionTitle'>Business & Marketing<br/>Technologies</h1>
          </div>
          <div className='skillsDescription'>
            <p>
              <span className='skillElement'>Microsoft Excel</span>
              <span className='skillElement'>Ion Interactive</span>
              <span className='skillElement'>FB Ads Manager <i className="devicon-facebook-plain"></i></span>
              <span className='skillElement'>Google Ads Manager <i className="devicon-google-plain"></i></span>
            </p>
          </div>
        </div>

        <hr width='55%' className='skillsDivider'/>

        <div className='comingsoon skillSection'>
          <div className='skillsTitle'>
            <h1 className='skillsSectionTitle'>In Beta</h1>
          </div>
          <div className='skillsDescription'>
            <p>
              <span className='skillElement'>Python <i className="devicon-python-plain"></i></span>
              <span className='skillElement'>PHP <i className="devicon-php-plain"></i><br/></span>
              <span className='skillElement'>Angular <i className="devicon-angularjs-plain"></i></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
)

export default Skills
