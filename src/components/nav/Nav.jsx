import React from 'react';
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiCodeAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import { useEffect } from 'react';

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  useEffect(() => {
    // Function to handle scroll changes
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Define the sections and their corresponding IDs
      const sections = {
        '#': 0,
        '#about': document.getElementById('about').offsetTop,
        '#experience': document.getElementById('experience').offsetTop,
        '#services': document.getElementById('services').offsetTop,
        '#contact': document.getElementById('contact').offsetTop,
      };

      // Find the active section by comparing scroll position to section offsets
      let activeSection = '#';
      for (const section in sections) {
        if (scrollPosition >= sections[section]) {
          activeSection = section;
        }
      }

      setActiveNav(activeSection);
    };

    // Add a scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''} ><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiCodeAlt/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav