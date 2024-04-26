import React, { useRef } from "react";
import "./ServicesIntegrated.css";
import services_integrated from "../../assets/services-integrated.jpeg";
import { Link } from "react-scroll";

function ServicesIntegrated({ popupState4, setPopupState4 }) {
  const popup4 = useRef(null);

  const closePopup = (e) => {
    if (e.target === popup4.current) {
      setPopupState4(false);
    }
  };

  const closePopup4 = () => {
    setPopupState4(false);
  };

  return (
    <div
      className={`services-integrated ${popupState4 ? "" : "hide"}`}
      ref={popup4}
      onClick={closePopup}
    >
      <div className="services-integrated-popup">
        <img src={services_integrated}></img>

        <div className="services-integrated-text">
          <h3>Servicios Integrales</h3>
          <p>
            Brindamos los servicios de mantenimiento, limpieza y reparaciones a empresas que buscan tener a un aliado en quien reposar 
            estas tareas que forman parte de toda una logística detrás. Gracias a nuestros más de 5 años de experiencia podemos dar fé que
            dedicamos cada minuto del día para brindar un servicio de calidad y persanalizado.
          </p>
          <br />
          <p>
            Contamos con paquetes que se adaptan a tu marca, solo debes ponerte
            en contacto con nosotros.
          </p>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="services-integrated-btn"
            onClick={closePopup4}
          >
            Escríbenos aquí
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesIntegrated;
