import React, { Fragment } from 'react'
import ReactEmoji from 'react-emoji'
import Me from './Photos/photo.jpg'
import './Intro.css'

const Intro = () => (
  <Fragment>
    <div className='introWrapper'>
    <img className='introPhoto' src={Me} alt='James B. Hankins' />
    <div className='textWrapper'>
      <h1 className='introTitle'>
        James<br/>
        Hankins
      </h1>
      <hr className='introBreak' width='45%'/>
      <p className='introDescription'>
        <span className="highlight">
          Seattle based<br/>
          Developer &<br/>
          Marketer.</span>
      </p>
    </div>
    </div>
  </Fragment>
)

export default Intro
