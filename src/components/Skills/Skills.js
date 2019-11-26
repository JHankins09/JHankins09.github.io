import React, { Fragment } from 'react'

import './Skills.css'
import CodeActivity from './../CodeActivity/CodeActivity'


const Skills = () => (
  <Fragment>
    <div className='skillsContainer'>
    <div className='skillsWrapper'>
      <div className='languages'>
        <h1>Languages</h1>
        <hr/>
        <p>HTML5<i class="devicon-html5-plain"></i> &nbsp;&nbsp; | &nbsp;&nbsp;
           CSS3<i class="devicon-css3-plain"></i> &nbsp;&nbsp;<br/>
           JavaScript<i class="devicon-javascript-plain"></i> &nbsp;&nbsp; | &nbsp;&nbsp;
           Ruby<i class="devicon-ruby-plain"></i>
        </p>
      </div>
      <div className='frameWorks'>
        <h1>Frame Works</h1>
        <hr/>
        <p>React.JS<i class="devicon-react-original"></i> &nbsp;&nbsp;| &nbsp;&nbsp;
           Boostrap<i class="devicon-bootstrap-plain"></i> <br/>
           Rails<i class="devicon-rails-plain"></i> &nbsp;&nbsp; | &nbsp;&nbsp;
           Express.JS<i class="devicon-express-original"></i> <br/>
           PostgresQL<i class="devicon-postgresql-plain"></i> &nbsp;&nbsp; | &nbsp;&nbsp;
           node.JS<i class="fab fa-node-js"></i>
            </p>
      </div>
      <div className='technologies'>
      <h1>Technologies</h1>
      <hr/>
      <p>Mongo.DB<i class="devicon-mongodb-plain"></i> &nbsp;&nbsp; | &nbsp;&nbsp;
         Atom<i class="devicon-atom-original"></i> <br/>
         Git<i class="devicon-git-plain"></i> &nbsp;&nbsp; | &nbsp;&nbsp;
         GitHub<i class="devicon-github-plain"></i>
         </p>
      </div>
      <div className='busMarTech'>
      <h1>Business/Marketing<br/>Technologies</h1>
      <hr/>
      <p>Microsoft Excel &nbsp;&nbsp; | &nbsp;&nbsp;
         Ion Interactive<br/>
         FB Ads Manager<i class="devicon-facebook-plain"></i>&nbsp;&nbsp; | &nbsp;&nbsp;
         Google Ads Manager<i class="devicon-google-plain"></i>
         </p>
      </div>
      <div className='comingsoon'>
      <h1>In Beta</h1>
      <hr/>
      <p>Python <i class="devicon-python-plain"></i>&nbsp;&nbsp; | &nbsp;&nbsp;
         PHP <i class="devicon-php-plain"></i><br/>
         Angular <i class="devicon-angularjs-plain"></i>
      </p>
      <h1>Take a look at where I spend my time behind the keyboard!</h1>
      <CodeActivity/>
      </div>
    </div>
    </div>
  </Fragment>
)

export default Skills
