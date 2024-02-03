import React from 'react'
import "./about.css"
import ME from "../../assets/aboutPic.jpeg"
import {FaAward} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {GiMountainClimbing} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
     <h5> Get To Know</h5> 
     <h2> About me </h2>
     <div className="container about__container">
      <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="AboutImage"/>
      </div>

      </div>
      
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaUserAlt className='about__icon'/>
            <h5> In A Nutshell</h5>
            <small> Who Am I? </small>
          </article>
          <article className='about__card' >
            <FaAward className='about__icon'/>
            <h5> Experience</h5>
            <small> Before Reconversion </small>
          </article>
          <article className='about__card'>
            <GiMountainClimbing className='about__icon'/>
            <h5> What's Next? </h5>
            <small> Projects </small>
          </article>
        </div>

        <p> Hi, I am Delhia Gbelidji, 25 years old and former student in French Literature and Communication in which I have a Bachelor Degree. <br>
        </br>
        I am passionnate in poetry and literature. I started Web Developement two years ago in Ada Tech School. <br></br>
        For a year now, I've been an apprentice at Teamoty. <br></br></p>
        <a href='#contacts' className='btn btn-primary'> Want to know more? </a>

      </div>
    </div>
    </section>
  )
}

export default About
