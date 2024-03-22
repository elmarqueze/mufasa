import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'


const Navbar = () => {
  
  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <Link to='hero' smooth={true} offset={0} duration={500}><img src={logo} alt="" className='logo'/></Link>
      <ul className={mobileMenu? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Inicio</Link></li>
        <li><Link to='services' smooth={true} offset={-260} duration={500}>Servicios</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>Acerca</Link></li>
        <li><Link to='proyectos' smooth={true} offset={-260} duration={500}>Proyectos</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Clientes</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn btn-nav'>Contáctanos</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar