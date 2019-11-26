import React, { Fragment } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Bio.css'
import image from './photo.jpg'

  const Bio = () => (
    <Fragment>
        <div className='bio'>
          <Jumbotron className='jtronBio'>
            <h1 className='bioTitle'>Welcome</h1>
              <div className='bioContent'>
              <img src={image} alt='Fancy James' className='bioPhoto'/>
              <p className='bioDescription'>Thanks for visiting my page. I'm
              excited to share my story with you.
              <br/>
              <br/>
              I’m a Software Developer, Customer Advocate and Growth Marketer with
              a passion for storytelling. I'm working to acquire the right blend
              of skills to bridge the gap between 'one site fits most' and 'one
              site personizes for all'.
              <br/>
              <br/>
              My work in Customer Service and Marketing have shown me just how
              hard organizations work to get the word out about their business,
              and how quickly audiences lose interest when content isn't curated
              for them. That is why I aspire to blend my background with full-stack
              software development training to help personalize at scale.
              <br/>
              <br/>
              I believe in the power of great stories and beautiful experiences,
              and that those experiences should be built for all.</p>
              </div>
          </Jumbotron>
        </div>
    </Fragment>
  )

export default Bio
