import React from 'react'

import './about.css'
import ME from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'

import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    
      <section id='about'>
          <h5>O que você precisa saber</h5>
          <h2>Sobre</h2>
      

      <div className='container about__container'>
          <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="" />
              </div>
          </div>

          <div className="about__content">
              <div className="about__cards">


                <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experiências</h5>
                  <small>Em busca da primeira experiencia profissional</small>
                </article>


                


                <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projetos</h5>
                  <small>5+ completos</small>
                </article>
              </div>

              <p>Me chamo Thiago Ramos tenho 28 anos, formado em Ciência da computação no ano de 2023, Inglês instrumental, Minhas especialidades incluem HTML, CSS3,
              JavaScript (ES6), React.</p>
                  
              <p>Já trabalhei como técnico de informática, exercendo montagem e manutenção de computadores.
                Atualmente, após a conclusão da minha graduação em Ciência da Computação, estou fazendo uma
                transição de carreira para desenvolvedor.</p>
                  
                  <p>Procuro estar em constante desenvolvimento das minhas habilidades e competências, 
                  No presente momento estou estudando e aprendendo sobre  React.js, Next.JS e
                  Node.JS. Me identifico tanto na área de Front-End, quanto na área de Mobile. Me
                  considero um profissional extremamente dedicado com o que me comprometo a fazer
                  e busco realizar da melhor maneira possível.
              </p>

              <a href="#contact" className='btn btn-primary'>Entre em Contato</a>
          </div>

      </div>
      </section>
  
  )
}

export default About