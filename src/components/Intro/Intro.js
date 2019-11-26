import React, { Fragment } from 'react'
import ReactEmoji from 'react-emoji'
import Me from './photo.jpg'
import './Intro.css'

const text = '♫B)🎶♬'

const Intro = () => (
  <Fragment>
    <div className='introSection'>
      <img className='introPhoto' src={Me} alt='James B. Hankins' />
      <h1 className='introTitle'>Hi, I'm James!</h1>
      <p className='introDescription'>Thank's for visiting. Please enjoy some of my
      favorite tunes while you learn more about me!<br/>{ReactEmoji.emojify(text)}</p>
    </div>
  </Fragment>
)

export default Intro
