import { useState } from "react";
import "./Proyectos.css";
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'
import project6 from '../../assets/project6.png'
import project7 from '../../assets/project7.png'
import project8 from '../../assets/project8.png'
import white_arrow from "../../assets/white-arrow.png";

const Proyectos = () => {
  const [rolldown, setRolldown] = useState(false);

  const closeRoller = () => {
    if (!rolldown) {
      setRolldown(true);
    } else {
      setRolldown(false);
    }
  };

  return (
    <div className="proyectos">
      <div className="gallery">
        <img src={project1} alt="" />
        <img src={project2} alt="" />
        <img src={project3} alt="" />
        <img src={project4} alt="" />
      </div>
      <div className={`gallery ${rolldown ? "" : "hide"}`}>
        <img src={project5} alt="" />
        <img src={project6} alt="" />
        <img src={project7} alt="" />
        <img src={project8} alt="" />
      </div>
      <button className="btn dark-btn" onClick={closeRoller}>
        {rolldown ? "Ver menos" : "Ver más aquí"}
        <img src={white_arrow} />
      </button>
    </div>
  );
};

export default Proyectos;
