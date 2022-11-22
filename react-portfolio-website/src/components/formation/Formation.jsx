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
            <li> <BiCheck className='formation__list__icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
               </li>
               <li> <BiCheck className='formation__list__icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
               </li>
               <li> <BiCheck className='formation__list__icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
               </li>
               <li> <BiCheck className='formation__list__icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
               </li>
               <li> <BiCheck className='formation__list__icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
               </li>
          </ul>
        </article>

        <article className='formation'>
          <div className="formation__head">

            <h3> University of Paris Sorbonne-Nouvelle</h3>
          </div>
          <ul className='formation__list'>
            <li> <BiCheck className='formation__list__icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
               </li>
               <li> <BiCheck className='formation__list__icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
               </li>
               <li> <BiCheck className='formation__list__icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
               </li>
               <li> <BiCheck className='formation__list__icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
               </li>
               <li> <BiCheck className='formation__list__icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
               </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Formation