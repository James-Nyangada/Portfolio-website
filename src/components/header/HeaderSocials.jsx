import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/james-nyangada-218399272/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/James-Nyangada" target='_blank'><FaGithub/></a>
        <a href="https://dribbble.com/jam3sxiv" target='_blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials