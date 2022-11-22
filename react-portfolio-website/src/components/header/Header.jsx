import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/resumePic.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h4 className='font'> Hello I'm</h4>
        <h1 className='font'>Delhia Gbelidji</h1>
        <h5 className="text-light"> Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href="#contacts" className='scroll__down'> Scroll down</a>
      </div>
    </header>
  )
}

export default Header
