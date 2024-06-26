import React from 'react'
import CV from '../../assets/Desenvolvedor Frontend - thiago ramos.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Entre em Contato</a>
    </div>
  )
}

export default CTA