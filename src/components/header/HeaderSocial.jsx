import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/thiago-ramos-1696a81ba/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/thiagoRN" target="_blank" rel="noopener noreferrer">< FaGithub/></a>
    </div>
  )
}

export default HeaderSocial