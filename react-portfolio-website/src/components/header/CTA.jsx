import React from 'react'
import CV from '../../assets/RESUME.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {CV} target="_blank" rel="noreferrer" className='btn'> Download CV</a>
        <a href="#contacts" className='btn btn-primary'> Contact me</a>
    </div>
  )
}

export default CTA 