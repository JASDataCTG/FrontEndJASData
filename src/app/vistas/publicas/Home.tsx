import imgBigData from "../../../assets/images/inicio/BigData.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="p-2">
      <section
        id="hero-animated"
        className="hero-animated d-flex align-items-center"
      >
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative aos-init aos-animate"
          data-aos="zoom-out"
        >
          <img src={imgBigData} className="img-fluid animated" />
          <h2>
            Bienvenido a <span>JASData</span>
          </h2>
          <p>
            Servicios en Ciencia de Datos para la gestión eficiente de
            organizacionesgestionadas por datos (Data Driven)
          </p>
          <p>
            Inteligencia de Negocios - Visualizaciones Interactivas - Machine
            Learning
          </p>
          <div className="d-flex">
            <Link to="/acerca" className="btn-get-started scrollto">
              Conócenos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
