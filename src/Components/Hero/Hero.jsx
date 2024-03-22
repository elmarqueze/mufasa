import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Nos aseguramos que tu marca sea el rey de la selva</h1>
            <p>Trabajemos con tu marca logrando que venda todos los días sin pasar desapercibida, gracias a nuestra metodología de trabajo y trato personalizado con cada cada uno de nuestros clientes</p>
            {/* <button className='btn'>Conoce más <img src={dark_arrow} alt="" /> </button> */}
            <Link to='about' smooth={true} offset={-260} duration={500} className='btn'>Conoce más <img src={dark_arrow} alt="" /></Link>
        </div>
    </div>
  )
}

export default Hero