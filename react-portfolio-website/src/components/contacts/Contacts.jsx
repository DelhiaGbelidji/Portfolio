import React from 'react'
import "./contacts.css"
import {IoLogoLinkedin} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m1g9fht', 'template_fo09dls', form.current, '8hCh_BjZudzwv3EhP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (

    <section id='contacts'>
      <h5> Want To Get In Touch</h5>
      <h2>Contacts</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
            <IoLogoLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5> Delhia Gbelidji</h5>
            <a href="https://www.linkedin.com/in/delhia-gbelidji/" target='_blank' rel='noreferrer'>Let's Connect</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts