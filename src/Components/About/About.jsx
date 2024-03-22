import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=> {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ACERCA DE MUFASA</h3>
            <h2>Boutique Creativa</h2>
            <p>Mufasa nace gracias a la necesidad de muchos clientes que fueron confiando en sus fundadores cuando trabajan de manera independiente, esto hizo crecer la confianza mutua y que se consolide una <strong>#BoutiqueCreativa.</strong></p>
            <p>Los principales servicios que se ofrecen están enfocados en el desarrollo web, manejo de marca, indentidad y creación de campańas creativas, dando como resultado una excelente combinación de tecnología y markting digital.</p>
            <p>Sabíamos que no bastaba con solo tener los servicios de Social Media, es por eso que incursionamos en la creación de contenido gracias al apalcamiento de nuestras dos modelos creadas 100% con <strong>#IA</strong>, ofreciendo no solo contenido sino la visibilidad que las marcas necesitan.</p>
        </div>
    </div>
  )
}

export default About