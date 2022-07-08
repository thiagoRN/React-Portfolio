import React from 'react'

import './experience.css'

import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
     
      <h2>Minha Experiência</h2>

      <div className='container experience__container'> 
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Avançado</small>
                  </div>
                </article>


                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediário</small>
                  </div>
                </article>



                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediário</small>
                  </div>
                </article>


                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediário</small>
                  </div>
                </article>
              </div>
          </div>

              {/* END OF FRONTEND */}

          <div className="experience__backend">
          <h3>Backend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Básico</small>
                  </div>
                </article>

              </div>
          </div>
      </div>
    </section>
  )
}

export default Experience