import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='#home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>James Nyangada</h1>
        <h5 className="text-light">Frontend UI/UX Web developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#about" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header