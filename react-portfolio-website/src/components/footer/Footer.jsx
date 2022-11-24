import React from 'react'
import "./footer.css"
import {IoLogoTwitter} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import LOGO from '../../assets/logo.png'


const Footer = () => {

  return (
    <footer>
      
      <a href='#home' className='footer__logo'><img src={LOGO} alt='logo'/></a>

      <ul className='permalinks'>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Experience</a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li> <a href="#formation">Formation</a></li>
        <li> <a href="#contacts">Contacts</a></li>
        </ul>
        <div className="footer__socials">
          <a href='https://twitter.com/DGbelidji' target='_blank' rel='noreferrer'><IoLogoTwitter/></a>
          <a href='https://www.instagram.com/delhiagbe/' target='_blank' rel='noreferrer'><AiFillInstagram/></a>
          <a href='https://www.tiktok.com/@dedeleretour?_t=8XZrczBgJ41&_r=1/' target='_blank' rel='noreferrer'><FaTiktok/></a>
          <a href='https://www.linkedin.com/in/delhia-gbelidji/' target='_blank' rel='noreferrer'><AiFillLinkedin/></a>
        </div>
        <div className="footer__copyright">
          <small> &copy; DEGE Pro. All rights reserved. </small>
        </div>
    </footer>
  )
}

export default Footer
