import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Proyectos from './Components/Campus/Proyectos'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import SocialMedia from './Components/SocialMedia/SocialMedia'
import ContentCreation from './Components/ContentCreation/ContentCreation'
import WebDevelopment from './Components/WebDevelopment/WebDevelopment'
import ServicesIntegrated from './Components/ServicesIntegrated/ServicesIntegrated'

const App = () => {

  const [playState, setPlayState] = useState(false);
  const [popupState1, setPopupState1] = useState(false);
  const [popupState2, setPopupState2] = useState(false);
  const [popupState3, setPopupState3] = useState(false);
  const [popupState4, setPopupState4] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Nuestros Servicios' title='QUE OFRECEMOS' />
        <Services setPopupState1={setPopupState1} setPopupState2={setPopupState2} setPopupState3={setPopupState3} setPopupState4={setPopupState4} />
        <About setPlayState={setPlayState} />
        <Title subTitle='Nuestros' title='Proyectos' />
        <Proyectos />
        <Title subTitle='TESTIMONIOS' title='Qué dicen nuestros clientes' />
        <Testimonials />
        <Title subTitle='escríbenos' title='Contáctanos' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <SocialMedia popupState1={popupState1} setPopupState1={setPopupState1} />
      <ContentCreation popupState2={popupState2} setPopupState2={setPopupState2} />
      <WebDevelopment popupState3={popupState3} setPopupState3={setPopupState3} />
      <ServicesIntegrated popupState4={popupState4} setPopupState4={setPopupState4} />
    </div>
  )
}

export default App