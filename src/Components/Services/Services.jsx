import React from 'react'
import './Services.css'
import social_media from '../../assets/social-media.png'
import creacion_contenido from '../../assets/creacion-contenido.png'
import desarrollo_web from '../../assets/desarrollo-web.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Services = ({setPopupState1, setPopupState2, setPopupState3}) => {
  return (
    <div className='services'>
        <div className="service" onClick={()=> {setPopupState1(true)}}>
            <img src={social_media} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Social Media</p>
            </div>
        </div>
        <div className="service" onClick={()=> {setPopupState2(true)}}>
            <img src={creacion_contenido} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Creación de Contenido</p>
            </div>
        </div>
        <div className="service" onClick={()=> {setPopupState3(true)}}>
            <img src={desarrollo_web} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Desarrollod Web</p>
            </div>
        </div>
    </div>
  )
}

export default Services