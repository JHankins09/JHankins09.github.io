import React, { Fragment, useState } from 'react'
import ReactEmoji from 'react-emoji'
import './Contact.css'
import Facebook from './Facebook.png'
// import Email from './email.png'
import GitHub from './gitHub.png'
import LinkedIn from './LinkedIn.png'
import Resume from './Resume.png'
import Download from './Resume_J-Hankins.pdf'
import sendMessage from './api'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sender, setSender] = useState('')

  const onSubmit = (x) => {
    x.preventDefault()
    sendMessage(name, email, message)
      .then((response) => {
        setName('')
        setEmail('')
        setMessage('')
        setSender(response.data)
        console.log('response', response)
      })
      .catch(console.error)
  }

return (
  <Fragment>
    <div className='contactWrapper'>
      <div className='contactMain'>
        <h1 className='formTitle'>
          Send me a
          message {ReactEmoji.emojify('📧')}
        </h1>
        { sender == '' ?
        (
        <form className='contactMeForm' method="post" name="portfolioEmailForm">
          <div className='formCaptureElements'>
            <div className='formContainer1'>
              <input type="text" value={name} name="name" placeholder="Your Name" maxLength="100" onChange={(event) => setName(event.target.value)} required />
              <input type="email" value={email} name="email" placeholder="Your Email"maxLength="100" onChange={(event) => setEmail(event.target.value)} required />
            </div>
            <div className='formContainer2'>
              <textarea name="message" value={message} placeholder="Shoot me a message!" onChange={(event) => setMessage(event.target.value)} required ></textarea>
            </div>
          </div>
            <button className='formSubmit' type="submit" value="Send This" onClick={event => onSubmit(event)}>Submit</button>
        </form>
      ) : (
        <h1 className='responseText'>Thank for reaching out, <span className='highlight'>{sender}</span>.
        <hr width="30%" />
        I'll get back to you shortly!</h1>
      )}
      </div>

      <div className='socialWrapper'>
        <h1 className='socialTitle notOnMob'>
          -or-<br/>
          Connect with me on social
        </h1>

        <div className='contactFooter'>

        <a href="https://www.facebook.com/jameshankins36" target='_blank'>
          <div className='socialModule'>
            <img src={Facebook} alt='Facebook' className='socialIcon'/>
            <p className='socialDescription notOnMob'>Facebook</p>
          </div>
        </a>

        <a href='https://www.linkedin.com/in/james-hankins/' target='_blank'>
          <div className='socialModule'>
            <img src={LinkedIn} alt='LinkedIn' className='socialIcon'/>
            <p className='socialDescription notOnMob'>LinkedIn</p>
          </div>
        </a>

        <a href='https://github.com/JamesHankinsDev' target='_blank'>
          <div className='socialModule'>
            <img src={GitHub} alt='GitHub' className='socialIcon'/>
            <p className='socialDescription notOnMob'>GitHub</p>
          </div>
        </a>

        <a href={Download} download target='_blank'>
          <div className='socialModule'>
            <img src={Resume} alt='Resume' className='socialIcon'/>
            <p className='socialDescription notOnMob'>Download<br/>Resume</p>
          </div>
        </a>

        </div>
        <div className='iconCredits'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>

    </div>
  </Fragment>
)}

export default Contact
