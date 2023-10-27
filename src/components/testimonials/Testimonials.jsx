import React from 'react'
import './testimonials.css'
import  AVTR1 from '../../assests/avatar1.jpg'
import  AVTR2 from '../../assests/avatar2.jpg'
import  AVTR3 from '../../assests/avatar3.jpg'
import  AVTR4 from '../../assests/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5 className='heading__one'>Review from Clients</h5>
      <h2 className='heading__two'>Testimonials</h2>

      <Swiper className="container testimonials__container"
         // install Swiper modules
         modules={[Pagination, Navigation]}
         spaceBetween={40}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}

      >
        
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={AVTR2} alt="Avatar one" />
            
          </div>
          <h5 className='client__name'>Mark Nyangada</h5>
          <small className="client__review">
            “Our school website is a masterpiece, thanks to your exceptional skills. The UI/UX design is top-notch, making information easy to find and engage with. Your work was worth every percentage. We're thrilled with the result”
          </small>
        </SwiperSlide>
        
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={AVTR4} alt="Avatar two" />
            
          </div>
          <h5 className='client__name'>Mary Ojwang</h5>
          <small className="client__review">
            “Our church's new website is a blessing! Your design transformed the way we connect with our community making us able to connect with the memmbers more effectively.”
          </small>
        </SwiperSlide>
        
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={AVTR3} alt="Avatar three" />
            
          </div>
          <h5 className='client__name'>Godfrey Evans</h5>
          <small className="client__review">
            “My business portfolio shines online thanks to your incredible work.Got me hired and people have been crazy about the design”
          </small>
        </SwiperSlide>
        
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={AVTR2} alt="Avatar four" />
            
          </div>
          <h5 className='client__name'>Peter John</h5>
          <small className="client__review">
            “My photography portfolio is a work of art, thanks to your talents. Your work was worth every percentage, and I couldn't be happier with the result. You've given my photos a new dimension.”
          </small>
        </SwiperSlide>
        
        
      </Swiper>
    </section>
  )
}

export default Testimonials