import React from 'react'
import "./portfolio.css"
import PICO from '../../assets/pico8.gif'
import DATAVIZ from '../../assets/dataviz.gif'
import TURFU from '../../assets/turfu.gif'
import EXT from '../../assets/extensionTurfu.zip'
import ECOMMERCE from '../../assets/ecommerce.gif'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My last projects</h5>
      <h2> Portfolio </h2>
      <div className="container portfolio__container">

        <article className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={PICO} alt="pico_project" />
          </div>
            <h3> Michonne's Zombalad</h3>
            <p> Coded in a simplified version of the langage LUA, in the vintage style game console, PICO-8. <br />
            You are Michonne in a post-apocalyptic world and you have to eliminate all the zombies (that look a lot like Zemmour but it's open to interpretation). <br /></p>
            <div className="portfolio__item-cta">
            <a href='https://github.com/DelhiaGbelidji/Pico8' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href='https://www.lexaloffle.com/bbs/?tid=50312' className='btn btn-primary' target='_blank' rel="noreferrer">Play</a>
            </div>
        </article>

        <article className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={DATAVIZ} alt="dataviz_project" />
          </div>
            <h3> Welcome to Space</h3>
            <p> Welcome to this data-visualisation site. You can follow the ISS path around Earth. There is also a feature "APOD" where you can find what picture the NASA posted according to the date you choose. <br/>
            Several NASA's API where used for this project.  </p>
            <div className="portfolio__item-cta">
            <a href='https://github.com/DelhiaGbelidji/DatavizAPI' className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href='https://welcome-to-space-dataviz.netlify.app/' className='btn btn-primary' target='_blank' rel="noreferrer">Go to Space</a>
            </div>
        </article>

        <article className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={TURFU} alt="turfu_project" />
          </div>
            <h3> Turfu</h3>
            <p> Turfu is a Google Chrome extension created to simplified your WEB surfing: a notepad, a bookmark and a dictionnary. Very useful if you're a student written a thesis (just an example of the many uses!). </p>
            <div className="portfolio__item-cta">
            <a href='https://github.com/DelhiaGbelidji/projet_collectif_extension_naviateur-ada_extension' className='btn' target='_blank'rel="noreferrer">Github</a>
            <a href={EXT} className='btn btn-primary' target='_blank' rel="noreferrer"> Download Turfu</a>
            </div>
        </article>

        <article className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={ECOMMERCE} alt="ecommerce_project" />
          </div>
            <h3> AMPUNV</h3>      
            <p> Anciens Meubles Pour Une Nouvelle Vie : Old Furnitures For A New Life ! In this E-commerce site, you can purchase or sale vintage furnitures. <br/> 
            Coded in React, Express, MongoDB and Node.js. </p>
            <div className="portfolio__item-cta">
            <a href='https://github.com/DelhiaGbelidji/Ecommerce-front' className='btn' target='_blank' rel="noreferrer">Front</a>
            <a href='https://github.com/DelhiaGbelidji/Ecommerce-back' className='btn btn-primary' target='_blank' rel="noreferrer">Back</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio