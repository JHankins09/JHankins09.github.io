import React from 'react'
import './Resume.css'

const Resume = () => (
  <div className='resumeContainer'>
    <div className='resumeWrapper'>
    <div className='resumeSpacer'>
      <hr />
      <h1 className='resumeTitle'>Work Experience</h1>
      <hr />
      <h1 className='resumeSecondTitle'>General Assembly | Boston, MA</h1>
      <p className='resumeDescription'>Software Engineering Immersive Fellow<br/>
      <span className='resumeTimeFrame'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;June, 2019 - August, 2019</span></p>
      <br/>
      <h1>EF Education First | Cambridge, MA</h1>
      <p>Marketing Technologies Coordinator<br/>
      <span className='resumeTimeFrame'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;August, 2016 - August, 2019</span><br/>
      Traveler Support Specialist<br/>
      <span className='resumeTimeFrame'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;April, 2014 - August, 2016</span></p>
      <br/>
      <h1>L.L. Bean | Freeport, ME</h1>
      <p>Customer Impact Representative<br/>
      <span className='resumeTimeFrame'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;November, 2013 - April, 2014</span><br/>
      Administrative Assistant<br/>
      <span className='resumeTimeFrame'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;August, 2013 - November, 2013</span><br/>
      HR Talent and Development Intern<br/>
      <span className='resumeTimeFrame'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;June, 2013 - August, 2013</span></p>
      <hr />
      <h1 className='resumeTitle'>Education</h1>
      <hr />
      <h1 className='resumeSecondTitle'>The University of New England</h1>
      <p className='resumeDescription'>B.S. | Business Administration<br/>
         B.A. | Communications</p>

    </div>
    </div>
  </div>
)

export default Resume
