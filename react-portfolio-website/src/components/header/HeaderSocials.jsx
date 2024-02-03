import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'> 
    <a href='https://www.linkedin.com/in/delhia-gbelidji/' target="_blank" rel="noreferrer" ><BsLinkedin/></a>
    <a href='https://github.com/DelhiaGbelidji' target="_blank" rel="noreferrer" ><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials