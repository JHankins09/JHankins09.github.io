import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'


  const Header = () => (
    <div className='header'>
      <h1 className='title'><Link to='/' onClick={event => event.preventDefault()}>JBH.Dev</Link></h1>
      <h1 className='description'><Link to='/skills/' onClick={event => event.preventDefault()}>Developer</Link> | <Link to='/resume/' onClick={event => event.preventDefault()}>Marketer</Link> | Pun-maker</h1>
    </div>
  )

export default Header
