import React, { Fragment } from 'react'
import ReactEmoji from 'react-emoji'
import Me from './photo.jpg'
import './Intro.css'

// <div className='textWrapper'>
// <p className='introDescription'>
// <strong>Please enjoy some of my favorite <span className="highlight">music </span>
// while you explore my site.</strong>
// </p>
// <hr width="20%" />
// <p className='introDescription'>
// I'm a Cleveland sports fan, Boston transplant, and Seattle beer league hockey rookie. I love a
// good pun and hate a warm beer. Rarely will I turn down an oyster, and
// never will I say no to a good brussel sprout.
// </p>
// <hr width="20%" />
// <p className='introDescription'>
// More importantly, I’m a Seattle based Developer <span className="highlight">passionate
// about building better digital experiences</span>. Mobile compatibility,
// stronger navigation, better user flows, maybe even music ({ReactEmoji.emojify('♫;)🎶♬')}) - these are the elements of the
// digital experience that I hope to make the cornerstone of my career.
// </p>
// </div>

const Intro = () => (
  <Fragment>
    <div className='introWrapper'>
      <div className='imageWrapper'>
        <img className='introPhoto' src={Me} alt='James B. Hankins' />
        <h1 className='introTitle'>Hi, I'm James {ReactEmoji.emojify('👋')}
        <hr width='35%'/>
        <span className='introTitle2'>I'm a <span className="highlight">Seattle</span> based <br/><span className="highlight">Developer / Marketer</span>.
        </span></h1>
      </div>
    </div>
  </Fragment>
)

export default Intro
