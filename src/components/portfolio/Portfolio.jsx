import React from 'react'

import './portfolio.css'

import IMG1 from '../../assets/room1.png'
import IMG2 from '../../assets/room2.png'
import IMG3 from '../../assets/room3.png'
import IMG4 from '../../assets/room4.png'
import IMG5 from '../../assets/room5.png'
import IMG6 from '../../assets/n1.png'

const data = [
  {
    id:1,
    image:IMG1,
    title:'LetMeAsk',
    github:'https://github.com/thiagoRN/LetMeAsk',
    demo:'https://letmeask-cb459.web.app'
  },
  {
    id:2,
    image:IMG2,
    title:'Finance app',
    github:'https://github.com/thiagoRN/FinanceApp',
    demo:'https://financs-app.web.app'
  },
  {
    id:3,
    image:IMG6,
    title:'Clone Netflix',
    github:'https://github.com/thiagoRN/cloneNetflix',
    demo:'https://netflix-clone-5af4a.web.app'
  },
  {
    id:4,
    image:IMG5,
    title:'Primeiro Portfolio',
    github:'https://github.com/thiagoRN/Portfolio-project',
    demo:'https://thiagoramos-portfolio.firebaseapp.com'
  },
  {
    id:5,
    image:IMG3,
    title:'Web Currículo',
    github:'https://github.com/thiagoRN',
    demo:'https://webcurriculo-74507.web.app'
  },
  {
    id:6,
    image:IMG4,
    title:'KyaraStore',
    github:'https://github.com/thiagoRN/KyaraStore',
    demo:'https://kyarastore-c605d.web.app'
  },
  
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus projetos recentes</h5>
      <h2>Portfolio</h2>

    <div className="container portfolio__container">

    {
      data.map(({id, image, title, github, demo}) => {
        return(


      <article key={id}className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={image} alt={title} />
          </div>
          
          <h3>{title}</h3>

          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>

      </article>


        )
      })
    }
     
      
    

    </div>
    </section>
  )
}

export default Portfolio