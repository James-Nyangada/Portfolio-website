import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {LuFolderGit2} from 'react-icons/lu'

const About = () => {
  return (
    <section id='about'>
      <h5 className='heading__one'>Get to Know</h5>
      <h2 className='heading__two'>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article   className='about__card'>
              <FaAward className='about__icon'/>
               <h5>Experience</h5>
               <small>1 Year coding</small>
            </article>

            <article   className='about__card'>
              <FiUsers className='about__icon'/>
               <h5>Clients</h5>
               <small>10+ Nation-wide</small>
            </article>

            <article   className='about__card'>
              <LuFolderGit2 className='about__icon'/>
               <h5>Projects</h5>
               <small>20+ projects completed  </small>
            </article>
          </div>

          <p>
          Greetings! I am a dedicated frontend web designer with a deep-seated passion for crafting creative web experiences. When I'm not engrossed in code, you can often find me pursuing my other passions: photography 📷 and immersive gaming 🎮. Additionally, I hold a fervent love for automobiles 🚗.
          My specialization lies in the art of creating captivating and artistically driven web designs that breathe life into the digital realm. My commitment is to transform your vision into a tangible reality, and together, we can cultivate innovation that consistently exceeds your expectations.
          <br />
          Let's embark on a collaborative journey to bring your ideas to fruition, one web project at a time. Your digital presence deserves nothing less than the very best.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About