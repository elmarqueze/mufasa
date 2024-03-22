import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c8ffd7ca-17f2-4810-b814-fde791ac6a40");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Envíanos un mensaje <img src={msg_icon} alt="" />
        </h3>
        <p>
          No dudes en comunicarte a través del formulario de contacto o busque nuestra información de contacto aquí abajo. Sus comentarios, preguntas y sugerencias son importantes para nosotros mientras nos esforzamos por brindar un servicio excepcional a nuestros clientes.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            info@mufasa.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 801 441 8679
          </li>
          <li>
            <img src={location_icon} alt="" />
            Lima, Perú
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Tu nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            required
          />

          <label htmlFor="phone">Tu número</label>
          <input
            type="tel"
            name="phone"
            placeholder="Ingresa tu número de celular"
            required
          />

          <label htmlFor="message">Escribe tu mensaje</label>
          <textarea
            type="text"
            name="message"
            rows="6"
            placeholder="Ingresa el mensaje"
          />

          <button type="submit" className="btn dark-btn">
            Enviar<img src={white_arrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
