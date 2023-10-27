import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JAM3S.DEV</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#services">Serivces</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonails">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/james-nyangada-218399272/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/James-Nyangada" target='_blank'><FaGithub/></a>
        <a href="https://dribbble.com/jam3sxiv" target='_blank'><FiDribbble/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jam3sXIV. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer