import React, { Fragment } from 'react'
import ReactEmoji from 'react-emoji'
import './AboutMe.css'
import AboutMe from './Photos/AboutMe.jpg'

  const Bio = () => (
    <Fragment>
        <div className='bioWrapper'>
          <div className='bioContainer'>
            <div className='bioArticle'>
              <div className='bioArticleCopy'>
              <img src={AboutMe} alt='EF Center Boston' className='bioPhoto'/>
                <h1 className='bioArticleTitle'>
                  About Me</h1>
                <p className='bioSubHead'>
                  <strong className="highlight">Welcome!</strong><br/>
                  <br/>
                  Thanks for visiting my page. I'm excited to share my story <span
                  className="highlight">(and maybe a little music)</span> with you.
                </p>
                <hr width='35%' className='bioDivider'/>
                <p className='bioDescription'>
                  I’m a Software Developer, Customer Advocate and Growth
                  Marketer with a passion for storytelling. I'm working to
                  acquire the right blend of skills to bridge the gap between
                  'one site fits most' and 'one site personalizes for all'.
                </p>
                <hr width='35%' className='bioDivider'/>
                <p className='bioDescription'>
                  My work in Customer Service and Marketing have shown me just
                  how hard organizations work to get the word out about their
                  business, and how quickly audiences lose interest when content
                  isn't curated for them. That is why I aspire to blend my
                  background with full-stack software development training to
                  help personalize at scale.
                </p>
                <hr width='35%' className='bioDivider'/>
                <p className='bioDescription highlight'>
                  I believe in the power of great stories and beautiful
                  experiences, and that those experiences should be built for
                  all.
                </p>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  )

export default Bio
