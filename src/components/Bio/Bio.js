import React, { Fragment } from 'react'
import './Bio.css'
import Article1Photo from './Article1Photo.jpg'
import Article2Photo from './Article2.jpg'
import Article3Photo from './Article1.png'

  const Bio = () => (
    <Fragment>
        <div className='bioWrapper'>
          <div className='bioContainer'>
          <h1 className='bioTitle'>About Me!</h1>

        <div className='bioArticle'>
          <div className='bioArticleCopy'>
            <h1 className='bioArticleTitle'>Life as a Marketer
            | August, '19 - Now</h1>

            <img src={Article3Photo} alt='Fancy James' className='bioPhoto'/>
            <hr/>
            <p className='bioDescription'>I was extremely lucky to find myself at
            an incredible organization after my college studies. I worked 5 years at
            EF Educational Tours in both Customer Service as well as Marketing. It is
            one of those organizations that weather outside looking in or inside looking
            around, both would agree it runs on incredibly talented and passionate people.
            <br/>
            <br/>
            When working in the Marketing team, I found a strong affinity to all things
            technology. In fact, my role was as Marketing Technology Coordinator. I
            built a love of making incredible digital experiences and a continuous drive
            to push them even further. With incredible leadership and phenominal colleagues
            we found ourselves pushing for extremely exctiting and ambitions content!
            <br/>
            <br/>
            My role in this process was primarily in implimentation. I worked primarily
            via a CMS platform, Ion, quickly found myself to be a master of it. But eventually,
            we hit a point where what we wanted to build was more than what our CMS could
            provide. I eventually left EF in pursuit of the software knowledge that
            will allow me to continue to develop and deliver beautiful experiences
            online.
            </p>
            <hr />
          </div>
        </div>

        <div className='bioArticle'>
          <div className='bioArticleCopy'>
            <h1 className='bioArticleTitle'>Learning Software Literacy
            | June, '19 - Septermber, '19'</h1>
            <img src={Article2Photo} alt='Fancy James' className='bioPhotoL'/>
            <hr/>
            <p className='bioDescription'>I was extremely fortunate to find the
            phenominal folks at General Assembly when I started to get serious
            about getting into software. I know there are alot of opinions about
            the software bootcamp idea and General Assembly as one of it's players,
            but all I can speak to was my expreince, and it was an outstanding one.
            <br/>
            <br/>
            I joined the 'Software Engineering Immersive' 3 cohort in Boston, and it
            is a deep regret of mine that I don't have a photo to commemorate our
            group. In just 12 weeks, I went from knowing just enough about software
            to be dangerous on accident, to being knowledgable enough to be dangerous
            on purpose.
            <br/>
            <br/>
            I get asked alot what the most important take-away was that I have from
            my time with GA. I think there are 2 major ones really. First, they tought
            me to find, read, and <em>understand</em> the documentation. (Equally, they
            showed the importance of commenting your code and how difficutl it is to
            collaborate without communicating!). Second, alot of being successful in
            software is diving in, probably failing a few times, and persisting until
            you succeed. I'm extremely greatful to the GA team and my classmates fort
            my education there.
            </p>
            <hr />
          </div>
        </div>

        <div className='bioArticle'>
        <div className='bioArticleCopy'>
        <h1 className='bioArticleTitle'>Finding Seattle
        | August, '19 - Now</h1>
        <img src={Article1Photo} alt='Fancy James' className='bioPhoto'/>
        <hr/>
        <p className='bioDescription'>I got to Seattle the same way that
        one of the greatest fictional movie characters of all time (seriously,
          don't test me on this...) closed one of the greatest movies to ever
          be filmed... <em>'I went to see about a girl'</em>.
          <br/>
          <br/>
          That's right. My incredible partner, Meagan, is attending the University
          of Washington to pursue her masters in Public Health and Social Work. We
          packed up the Mazda (that's right, read it and weap, car-lovers) and made
          an 11 day voyage from the Atlantic coast to the Paci... Actually we only
          have made it as far as the Pugent Sound... But still. We pretty much did it!
          <br/>
          <br/>
          As I'm sure you can imagine, we have alot of opinions about traveling
          across the country! Meagan and I would love to help give some tips to
          any would-be road-trippers. Perhaps over a pint?
          </p>
          <hr />
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  )

export default Bio
