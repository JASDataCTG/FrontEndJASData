import imgBD from "../../../../src/assets/images/acerca/bdia.jpg";
import {Link} from "react-router-dom";

export const AcercaDe = () => {
  function translate3d(
    arg0: number,
    px: any,
    arg2: number,
    px1: any,
    arg4: number,
    px2: any
  ): import("csstype").Property.Transform | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="p-5">
      <section id="about" className="about">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-header">
            <h2>Acerca de...</h2>
            <p>
              JASData es una empresa domiciliada en la ciudad de Cartagena que
              se dedica principalmente a prestar servicios de asesoría
              empresarial en el área de la Ciencia de Datos. Contámos con 12
              años de experiencia en procesos de Analítica de Datos en todas las
              áreas y en el desarrollo procesos previos de investigación
              estrictas para generar conocimientos de los datos históricos de
              nuestros clientes
            </p>
          </div>

          <div
            className="row g-4 g-lg-5 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-5">
              <div className="about-img">
                <img src={imgBD} className="img-fluid" alt="Logo grande" />
              </div>
            </div>

            <div className="col-lg-7">
              <h3 className="pt-0 pt-lg-5">
                Conozca nuestro horizonte estratégico
              </h3>

              {/* Tabs */}
              <ul className="nav nav-pills mb-3" role="tablist">
                <li>
                  <a
                    className="nav-link active"
                    data-bs-toggle="pill"
                    href="#tab1"
                    aria-selected="true"
                    role="tab"
                  >
                    Misión
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-bs-toggle="pill"
                    href="#tab2"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                  >
                    Visión
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-bs-toggle="pill"
                    href="#tab3"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                  >
                    Valores
                  </a>
                </li>
              </ul>
              {/* End Tabs */}

              {/* Tab Content */}
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tab1"
                  role="tabpanel"
                >
                  <p className="d-flex align-items-center mt-4">
                    Generar valor en las organizaciones a través del análisis de
                    datos con el objetivo de mejorar los procesos, haciendo uso
                    de las mejores herramientas disponibles para el proceso de
                    captura, almacenamiento, análisis y visualización de datos;
                    con el fin de generar y mejorar la base de conocimientos y
                    la toma de decisiones estratégicas.
                  </p>
                </div>
                {/* End Tab 1 Content */}

                <div className="tab-pane fade show" id="tab2" role="tabpanel">
                  <p className="d-flex align-items-center mt-4">
                    Ser referentes regionales en el descubrimiento de
                    conocimiento en bases de datos empresariales, con proyección
                    nacional e internacional, manteniendo posturas éticas en
                    cuanto a la privacidad de la información, y desarrollo de
                    servicios que contribuyan al crecimiento continuo de
                    nuestros clientes.
                  </p>
                </div>
                {/* End Tab 2 Content */}

                <div className="tab-pane fade show" id="tab3" role="tabpanel">
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <span>Enfoque a las necesidades del cliente</span>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <span>
                      Acciones enfocadas a la creación de valor compartido
                    </span>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <span>Trabajo en equipo</span>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <span>
                      Actualización contínua de nuestras capacidades de
                      respuesta
                    </span>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <span>Integridad en la toma de decisiones</span>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <span>Gestión responsable del conocimiento</span>
                  </div>
                </div>
                {/* End Tab 3 Content */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
