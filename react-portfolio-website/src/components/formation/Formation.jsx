import React from 'react'
import "./formation.css"
import {BiCheck} from 'react-icons/bi'

const Formation = () => {
  return (

    <section id='formation'>
      <h5> What I Studied </h5>
      <h2> Degrees </h2>

      <div className="container formation__container">
        
        <article className='formation'>
          <div className="formation__head">
            <h3> Ada Tech School</h3>
          </div>
          <ul className='formation__list'>
            <li> 
            <p><BiCheck className='formation__list__icon'/>
              Software Developer training in 9 months + 12 months of apprenticeship <br></br>
              Started In May 2022
            </p>
               </li>

               <li> 
            <p><BiCheck className='formation__list__icon'/>
              Ada Tech School is an inclusive and feminist school. Its goal is to open the Tech World to the diversity. 
              </p>
               </li>

               <li> 
            <p><BiCheck className='formation__list__icon'/>
              Groups projects in which I learned AGILE methods that are used in companies.  
              </p>
               </li>

               <li> 
            <p><BiCheck className='formation__list__icon'/>
              We are also trained to learn different langages and technologies: from web development to mobile development. It allow us to be versatile and constantly challenged in our learning.              </p>
               </li>
          </ul>
        </article>


        <article className='formation'>
          <div className="formation__head">
            <h3> University of Paris Sorbonne-Nouvelle</h3>
          </div>
          <ul className='formation__list'>
            <li> 
            <p><BiCheck className='formation__list__icon'/>
              Bachelor Degree in Modern Literature and Communication <br />
              From September 2018 to May 2022 
              </p>
               </li>

               <li> 
              <p><BiCheck className='formation__list__icon'/>
              What I liked during my Bachelor Degree was the diversity of courses : from learning medieval French to studying Lars Von Trier movie "Dogville" in comparative literature.
              </p>
               </li>

               <li>
              <p><BiCheck className='formation__list__icon'/>
              It allowed me to open my curiosity in fields i didn't even knew I could be interested in.
              </p>
               </li>

               <li> 
              <p><BiCheck className='formation__list__icon'/>
              The Communication part was oriented towards Sociology and psychology of the groups and group's behavior.
              </p>
               </li>

               <li> 
              <p><BiCheck className='formation__list__icon'/>
              I also studied a lot of post-colonialist literature. 
              </p>
               </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Formation