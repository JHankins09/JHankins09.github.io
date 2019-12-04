import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'


  const Header = () => (
    <div className='header'>
      <h1 className='title'><Link to='/'>JamesHankins.Dev</Link><br/>
      <span className='description'><Link to='/skills/'>Software Developer</Link> / <Link to='/resume/'>Marketer</Link></span></h1>
    </div>
  )

export default Header
