import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/thiago-ramos-1696a81ba/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={30}/></a>
        <a href="https://github.com/thiagoRN" target="_blank" rel="noopener noreferrer">< FaGithub size={30}/></a>
    </div>
  )
}

export default HeaderSocial