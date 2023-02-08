import Serv1 from "../../../assets/images/servicios/services-1.jpg";
import Serv2 from "../../../assets/images/servicios/services-2.jpg";
import Serv3 from "../../../assets/images/servicios/services-3.jpg";
import Serv4 from "../../../assets/images/servicios/services-4.jpg";
/* import Serv5 from "../../assets/images/servicios/services-5.jpg";
import Serv6 from "../../assets/images/servicios/services-6.jpg"; */

// eslint-disable-next-line

export const Servicios = () => {
  return (
    <div className="p-5">
      <section id="services" className="services">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-header">
            <h2>Nuestros servicios</h2>
            <p>
              Siempre estamos innovando e integrando nuevas capacidades para nuestros clientes, revise nuestro portafolio de servicios.
            </p>
          </div>

          <div className="row gy-5">
            <div
              className="col-xl-3 col-md-6 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={Serv1}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-bar-chart-steps"></i>
                  </div>
                  <a href="/#" className="stretched-link">
                    <h3>Inteligencia de Negocios</h3>
                  </a>
                  <p>
                    Asesoramos la creación,implementación y gestión de procesos de Business Intelligence.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}

            <div
              className="col-xl-3 col-md-6 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={Serv2}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-cpu"></i>
                  </div>
                  <a href="/#" className="stretched-link">
                    <h3>Modelos de Machine Learning</h3>
                  </a>
                  <p>
                    Minería de datos con la metodología CRISP-DM para obtener mejores resultados. 
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}

            <div
              className="col-xl-3 col-md-6 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={Serv3}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <a href="/#" className="stretched-link">
                    <h3>Visualización de Datos - DataViz</h3>
                  </a>
                  <p>
                    Facilitamos el análisis y descubrimiento de datos a través del desarrollo de visualizaciones interactivas.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}

            <div
              className="col-xl-3 col-md-6 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={Serv4}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-book"></i>
                  </div>
                  <a href="/#" className="stretched-link">
                    <h3>Capacitaciones</h3>
                  </a>
                  <p>
                    Generamos las competencias necesarias para la gestión de datos por parte de su personal para mejorar su aprovechamiento.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}

          </div>
        </div>
      </section>
    </div>
  );
};
