import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b17dhuh', 'template_z7xku2d', form.current, 'y0j9TVj9fVAmcn2Ta')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Entrar em contato</h5>
      <h2>Contato</h2>

      <div className='container contact__container'>
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='.contact__option-icon'/>
            <h4>Email</h4>
            <h5>thiago_RN@hotmail.com</h5>
            <a href="mailto:thiago_RN@hotmail.com" target="_blank" rel="noopener noreferrer">Enviar Mensagem</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='.contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Thiago Ramos</h5>
            <a href="https://m.me/thiago.ramos.5686" target="_blank" rel="noopener noreferrer">Enviar Mensagem</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='.contact__option-icon'/>
            <h4>WhatsApp</h4>
            {/* <h5>+123456789</h5> */}
            <a href="https://api.whatsapp.com/send?phone=5521994086168" target="_blank" rel="noopener noreferrer">Enviar Mensagem</a>
          </article>
          
        </div>

     {/* END OF CONTACT    */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome Completo' required/>
          <input type="email" name='email' placeholder='Seu Email' required/>
          <textarea name="message"  rows="7" placeholder='Sua mensagem' required ></textarea>
        <button type='submit' className='btn btn-primary'>Enviar</button>
        
        </form>
      </div>
    </section>
  )
}

export default Contact