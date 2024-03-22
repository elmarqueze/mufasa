import React, { useRef } from "react";
import "./ContentCreation.css";
import creacion_contenido from "../../assets/creacion-contenido.png";
import { Link } from 'react-scroll'

const ContentCreation = ({ popupState2, setPopupState2 }) => {
  const popup2 = useRef(null);

  const closePopup = (e) => {
    if (e.target === popup2.current) {
      setPopupState2(false);
    }
  };

  const closePopup2 = () => {
    setPopupState2(false);
  }

  return (
    <div
      className={`content-creation ${popupState2 ? "" : "hide"}`}
      ref={popup2}
      onClick={closePopup}
    >
      <div className="content-creation-popup">
        <img src={creacion_contenido}></img>

        <div className="content-creation-text">
            <h3>Creación de Contenido</h3>
            <p>
            Edición de videos para canales de Youtube, Facebook y TikTok. Diseño
            gráfico para foto de perfil, foto portada, pantalla de inicio,
            pantalla en espera y pantalla de pronto empezamos.<br/><br/>
            Fotografía de productos.
            Grabación de videos para redes sociales.
            </p><br />
            <p>Contamos con paquetes que se adaptan a tu marca, solo debes ponerte en contacto con nosotros.</p>
            <Link to='contact' smooth={true} offset={-260} duration={500} className='content-creation-btn' onClick={closePopup2}>Escríbenos aquí</Link>
        </div>
      </div>
    </div>
  );
};

export default ContentCreation;
