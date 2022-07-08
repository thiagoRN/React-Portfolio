import React from 'react'

import './header.css'

import CTA from './CTA'
import ME from '../../assets/1.jpg'
import HeaderSocial  from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, meu nome é</h5>
        <h1>Thiago Ramos</h1>
        <h5 className='text-light'>Desenvolvedor Front-end</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header