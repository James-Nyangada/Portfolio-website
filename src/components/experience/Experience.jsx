import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3} from 'react-icons/bi'
import {DiJavascript1} from 'react-icons/di'
import {SiTailwindcss} from 'react-icons/si'
import {BiLogoReact} from 'react-icons/bi'
import {FaBootstrap} from 'react-icons/fa'
import {BiLogoPython} from 'react-icons/bi'
import {BiLogoMongodb} from 'react-icons/bi'
import {GrMysql} from 'react-icons/gr'
import {BiLogoPhp} from 'react-icons/bi'
import {DiNodejsSmall} from 'react-icons/di'

const Experience = () => {
  return (
   <section id='experience'>
      <h5 className='heading__one'>What Skills I have</h5>
      <h2 className='heading__two'>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BiLogoCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon'/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div>
                <h4>TAILWIND  CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BiLogoReact className='experience__details-icon'/>
              <div>
                <h4>REACT JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Back-End Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BiLogoPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>TBD</small>
              </div>

            </article>

            <article className='experience__details'>
              <BiLogoMongodb className='experience__details-icon'/>
              <div>
                <h4>Mongo DB</h4>
                <small className='text-light'>TBD</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <GrMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>TBD</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon'/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>TBD</small>
              </div>
             
            </article>

            <article className='experience__details'>
              <BiLogoPhp className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>TBD</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <DiNodejsSmall className='experience__details-icon'/>
              <div>
                <h4>NODE JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Experience