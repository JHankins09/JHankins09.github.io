import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'


  const Header = () => (
    <div className='subHeader'>
    <h1 className='title'>
      <Link to='/'>
          JamesHankins.Dev<br/>
          <span className='description'>
            Software Developer / Marketer
          </span>
        </Link>
      </h1>
    </div>
  )

export default Header
