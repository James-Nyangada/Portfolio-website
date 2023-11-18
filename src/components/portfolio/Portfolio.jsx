import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'

const Portflio = () => {
  return (
    <section id='portfolio'>
      <h5 className='heading__one'>My Recent Work</h5>
      <h2 className='heading__two'>Portfolio</h2>

      <div className="portfolio__container">
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>

          <h3>CoinSafari</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/James-Nyangada/CoinSafari" className='btn' target='_blank'>Github</a>
            <a href="https://coinsafari.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>

          <h3>Gym Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/James-Nyangada/natty-gym" className='btn' target='_blank'>Github</a>
            <a href="https://natty-gym.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>

          <h3>Photographer Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/James-Nyangada/photographer-portfolio" className='btn' target='_blank'>Github</a>
            <a href="https://photographer-jj.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>

          <h3>Church Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/James-Nyangada" className='btn' target='_blank'>Github</a>
            <a href="https://orafolio.framer.website/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>

          <h3>E-commerce website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/James-Nyangada" className='btn' target='_blank'>Github</a>
            <a href="https://orafolio.framer.website/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>

          <h3>Car dealership website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/James-Nyangada" className='btn' target='_blank'>Github</a>
            <a href="https://orafolio.framer.website/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>
        
      
      </div>
    </section>
  )
}

export default Portflio