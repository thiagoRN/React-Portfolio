import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Pagination } from 'swiper';

import './testimonials.css'
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const data = [
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit, dicta expedita aspernatur, numquam ratione minima minus placeat veritatis commodi voluptatibus ipsa, velit sapiente doloremque aliquid laudantium? Aspernatur, ullam eligendi.'
  },
  {
    avatar:AVTR2,
    name:'Roger P',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit, dicta expedita aspernatur, numquam ratione minima minus placeat veritatis commodi voluptatibus ipsa, velit sapiente doloremque aliquid laudantium? Aspernatur, ullam eligendi.'
  },
  {
    avatar:AVTR3,
    name:'Fernado A',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit, dicta expedita aspernatur, numquam ratione minima minus placeat veritatis commodi voluptatibus ipsa, velit sapiente doloremque aliquid laudantium? Aspernatur, ullam eligendi.'
  },
  {
    avatar:AVTR4,
    name:'ana C',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit, dicta expedita aspernatur, numquam ratione minima minus placeat veritatis commodi voluptatibus ipsa, velit sapiente doloremque aliquid laudantium? Aspernatur, ullam eligendi.'
  },
  
]

const Testimonials = () => {
  return (
  <section id='testimonials'>
      <h5>Review dos clientes</h5>
      <h2>Depoimentos</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
          {
            data.map(({ avatar, name, review }, index) => {
              return (
                <SwiperSlide  key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt='avatar'/> 
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className="client__review">{review}</small>
              </SwiperSlide>
              )
            })
          }
      </Swiper>
  </section>
  )
}

export default Testimonials