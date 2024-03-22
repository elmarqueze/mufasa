import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>
        &copy;{currentYear}, Mufasa - Boutique Creativa. All rights reserved.
      </p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
      <div className="media">
        <a href="https://www.facebook.com/Mufasa.Boutique" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/mufasa.bc/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="wa.link/ro1jgs" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
      </div>
    </div>
  );
};

export default Footer;
