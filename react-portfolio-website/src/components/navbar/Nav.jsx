import React from 'react'
import "./nav.css"
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {FaTools} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {RiMessage2Fill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav> 
      <a href='#home' onClick={() => setActiveNav('#home')}className={activeNav === '#home' ? 'active' : ''} ><AiTwotoneHome/></a>
      <a href='#about'  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
      <a href='#portfolio'onClick={() => setActiveNav('#portfolio')}className={activeNav === '#portfolio' ? 'active' : ''}><FaTools/></a>
      <a href='#formation' onClick={() => setActiveNav('#formation')}className={activeNav === '#formation' ? 'active' : ''}><FaGraduationCap/></a>
      <a href='#contacts' onClick={() => setActiveNav('#contacts')}className={activeNav === '#contacts' ? 'active' : ''}><RiMessage2Fill/></a>

   </nav>
  )
}

export default Nav