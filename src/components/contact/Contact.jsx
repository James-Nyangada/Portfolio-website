import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eb6n7nc', 'template_emkhia5', form.current, 'WKQI1AZALcoUj2hiX')

    e.target.reset()
    
  };

  return (
    <section id='contact'>
      <h5 className='heading__one'>Get In Touch</h5>
      <h2 className='heading__two'>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <a href="mailto:jamesedwin03@gmail.com" target='_blank'>
              <MdOutlineMailOutline className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>jamesedwin03@gmail.com</h5>
              <a href="mailto:jamesedwin03@gmail.com" target='_blank'>Send an Email</a>
            </a>
            
          </article>
          

          <article className="contact__option">
            <a href="https://www.linkedin.com/in/james-nyangada-218399272/" target='_blank'>
              <FaLinkedin className='contact__option-icon'/>
              <h4>LinkedIn</h4>  
              <h5>JAM3S_XIV</h5>  
              <a href="https://www.linkedin.com/in/james-nyangada-218399272/"   target='_blank'>View Profile and connect</a>
            </a>
            
          </article>

          <article className="contact__option">
            <a href="https:////wa.me/254791433046" target='_blank'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+254 791 433 046</h5>
              <a href="https:////wa.me/254791433046" target='_blank'>Send a message</a>
            </a>
            
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='Emal' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact