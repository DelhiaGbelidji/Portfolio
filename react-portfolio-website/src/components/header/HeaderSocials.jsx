import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiNotion} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'> 
    <a href='https://www.linkedin.com/in/delhia-gbelidji/' target="_blank" rel="noreferrer" ><BsLinkedin/></a>
    <a href='https://github.com/DelhiaGbelidji' target="_blank" rel="noreferrer" ><AiFillGithub/></a>
    <a href='https://jfklq.notion.site/Delhia-Gbelidji-846458cbd63b4b42b94de2e61feceb1f' target="_blank" rel="noreferrer" ><SiNotion/></a>
    </div>
  )
}

export default HeaderSocials