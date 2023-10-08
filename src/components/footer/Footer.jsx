import React from 'react'

import './footer.css'

import {BsGithub} from "react-icons/bs";
import {FiInstagram} from "react-icons/fi"
import {FaFacebookF} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <a href="#_" className='footer__logo'>Thiago Ramos</a>

      <ul className="permalinks">
        <li><a href="#_">Home</a></li>
        <li><a href="about">Sobre</a></li>
        <li><a href="experience">Experiencia</a></li>
        <li><a href="services">Serviços</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        {/* <li><a href="testimonials">Depoimentos</a></li> */}
        <li><a href="contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://m.me/thiago.ramos.5686" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
      <a href="https://www.instagram.com/thiago_rdn/" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
      <a href="https://github.com/thiagoRN" target="_blank" rel="noopener noreferrer"><BsGithub/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer