import React from 'react'
import  './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5 className='heading__one'>What I Offer</h5>
      <h2 className='heading__two'>Serivices</h2>

      <div className="container services__container">
        <article className='service'>

          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>One page Websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Landing pages</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Portfolio design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Business Cards design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interactive webpages</p>
            </li>

           
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>

          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Educational Websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Desinger Websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-commerce websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Re-Designing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Portfolio websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Institutional/Company Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Flipping</p>
            </li>

           
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT*/}

        
      </div>
    </section>
  )
}

export default Services