import React, { useRef } from "react";
import "./SocialMedia.css";
import social_media from "../../assets/social-media.png";
import { Link } from "react-scroll";

const SocialMedia = ({ popupState1, setPopupState1 }) => {
  const popup1 = useRef(null);

  const closePopup = (e) => {
    if (e.target === popup1.current) {
      setPopupState1(false);
    }
  };

  const closePopup2 = () => {
    setPopupState1(false);
  };

  return (
    <div
      className={`social-media ${popupState1 ? "" : "hide"}`}
      ref={popup1}
      onClick={closePopup}
    >
      <div className="social-media-popup">
        <img src={social_media}></img>

        <div className="social-media-text">
          <h3>Social Media</h3>
          <p>
            Community Management. Creación de grillas de contenido. Estrategia de
            contenido. Programación y manejo de pauta publicitaria.<br/><br/> Reporte de
            performance y rendimiento. Diseño gráfico para cada red social.
            </p><br />
          <p>
            Contamos con paquetes que se adaptan a tu marca, solo debes ponerte
            en contacto con nosotros.
          </p>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="social-media-btn"
            onClick={closePopup2}
          >
            Escríbenos aquí
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
