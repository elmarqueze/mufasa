import React, { useRef } from "react";
import "./WebDevelopment.css";
import desarrollo_web from "../../assets/desarrollo-web.png";
import { Link } from "react-scroll";

function WebDevelopment({ popupState3, setPopupState3 }) {
  const popup3 = useRef(null);

  const closePopup = (e) => {
    if (e.target === popup3.current) {
      setPopupState3(false);
    }
  };

  const closePopup2 = () => {
    setPopupState3(false);
  };

  return (
    <div
      className={`web-development ${popupState3 ? "" : "hide"}`}
      ref={popup3}
      onClick={closePopup}
    >
      <div className="web-development-popup">
        <img src={desarrollo_web}></img>

        <div className="web-development-text">
          <h3>Desarrollo Web</h3>
          <p>
            Portafolio web personal, Página web empresa con información,
            servicios, acerca de y formulario de contacto, Tienda virtual
            con secciones de inicio, productos, categorias(máximo 4),
            productos(máximo de 50 productos) y sección de métodos de pago con
            carrito de compras.
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
            className="web-development-btn"
            onClick={closePopup2}
          >
            Escríbenos aquí
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WebDevelopment;
