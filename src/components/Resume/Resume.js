import React from 'react'
import './Resume.css'

const Resume = () => (
  <div className='resumeContainer'>
    <div className='resumeHeader'>
      <div className='resumeName'>
        <h1 className='resumePrimaryName'>
          James Hankins
        </h1>
        <p className='resumePriaryNameTwo'>
          Software Developer / Marketer
        </p>
      </div>
      <div className='resumeContact'>
        <div className='resumeContactTitle'>
          <p className='resumeContactTtitleElement'>Location</p>
          <p className='resumeContactTtitleElement'>Email</p>
          <p className='resumeContactTtitleElement'>Phone</p>
          <p className='resumeContactTtitleElement'>LinkedIn</p>
          <p className='resumeContactTtitleElement'>Portfolio</p>
        </div>
        <div className='resumeContactDetail'>
          <p className='resumeContactDetailElement'>Seattle, WA</p>
          <p className='resumeContactDetailElement'>Hankins.JamesB@gmail</p>
          <p className='resumeContactDetailElement'>330-575-4717</p>
          <p className='resumeContactDetailElement'>linkedin/james-hankins/</p>
          <p className='resumeContactDetailElement'>jhankins09.github.io/</p>
        </div>
      </div>
    </div>
    <div className='resumeBody'>
      <div className='resumeHistory'>
        <div className='resumeHistoryModule'>
          <div className='resumeHistoryTitleContainer'>
            <h1 className='resumeHistoryTitle'>General Assembly<br/>Boston, MA</h1>
            <p className='resumeHistorySubTitle'>Software Engineering Immersive Fellow<br/>
            June, ’19 - current
            </p>
          </div>
          <div>
            <p className='resumeHistoryDescription'>
              • Excelled in 12 week, 500+ hour immersive software engineering program.
              • Developed multiple web applications under highly restrictive time-lines.
            </p>
          </div>
        </div>
      </div>
      <div className='resumeEducation'>
      </div>
    </div>
  </div>
)

export default Resume
