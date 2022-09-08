import React from 'react'

import'./services.css'

import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      
      <h2>Serviços</h2>

      <div className='container services__container'>

        
        <article className='service'>
            <div className='service__head'>
                <h3>UI/UX Design</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'></BiCheck>
                <p>Atualizações em breve.</p>
              </li>
                    
            </ul>
        </article>
        {/* END OF UI/UX */}


        <article className='service'>
            <div className='service__head'>
                <h3>Desenvolvimento Web</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'></BiCheck>
                <p>Atualizações em breve.</p>
              </li>
                       
            </ul>
        </article>


        {/* WEB DEVELOPMENT */}


        <article className='service'>
            <div className='service__head'>
                <h3>Content Creation</h3>
            </div>

            <ul className='service__list'>

              <li>
                <BiCheck className='service__list-icon'></BiCheck>
                <p>Atualizações em breve.</p>
              </li>
                        
            </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services