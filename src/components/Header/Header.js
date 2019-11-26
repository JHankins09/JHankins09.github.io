import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'


  const Header = () => (
    <div className='header'>
      <h1 className='title'><Link to='/'>JBH.Dev</Link></h1>
      <h1 className='description'><Link to='/skills/'>Developer</Link> | <Link to='/resume/'>Marketer</Link> | Pun-maker</h1>
    </div>
  )

export default Header
