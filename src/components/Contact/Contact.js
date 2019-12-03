import React, { Fragment } from 'react'
import ReactEmoji from 'react-emoji'
import './Contact.css'
import Facebook from './Facebook.png'
import Email from './email.png'
import GitHub from './gitHub.png'
import LinkedIn from './LinkedIn.png'
import Resume from './Resume.png'
import Download from './Resume_J-Hankins.pdf'

const adjust_textarea = function(h) {
    h.style.height = "20px"
    h.style.height = (h.scrollHeight)+"px"
}

const writeThis = function(x) {
  console.log(x)
}

const Contact = () => (
  <Fragment>
    <div className='contactWrapper'>
      <div className='contactMain'>
        <h1 className='formTitle'>Send me a message {ReactEmoji.emojify('📧')}</h1>
        <form className='contactMeForm' method="post" name="portfolioEmailForm" action="form-to-email.php">
          <label for="name">Your Name</label>
          <input type="text" name="name" maxlength="100" required />
          <label for="email">Email</label>
          <input type="email" name="email" maxlength="100" required />
          <label for="message">About You</label>
          <textarea name="message" required ></textarea>
          <button type="submit" value="Send This" >Submit</button>
        </form>
      </div>

      <div className='socialWrapper'>
        <h1 className='socialTitle'>Connect with me on Social!</h1>
        <div className='contactFooter'>

        <div className='socialModule'>
          <img src={Facebook} alt='Facebook' className='socialIcon'/>
          <p className='socialDescription'>Facebook</p>
        </div>

        <div className='socialModule'>
          <img src={LinkedIn} alt='LinkedIn' className='socialIcon'/>
          <p className='socialDescription'>LinkedIn</p>
        </div>

        <div className='socialModule'>
          <img src={GitHub} alt='GitHub' className='socialIcon'/>
          <p className='socialDescription'>GitHub</p>
        </div>

        <div className='socialModule'>
          <img src={Email} alt='Email' className='socialIcon'/>
          <p className='socialDescription'>Email</p>
        </div>

        <a href={Download} Download target='_blank'>
        <div className='socialModule'>
          <img src={Resume} alt='Resume' className='socialIcon'/>
          <p className='socialDescription'>Download<br/>Resume</p>
        </div>
        </a>
        </div>
        <div className='iconCredits'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>

    </div>
  </Fragment>
)

export default Contact
