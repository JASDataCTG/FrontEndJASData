import { Link } from "react-router-dom";
import logoJASData from "../../../assets/images/logo3.png";

export const Cabecera = () => {
  return (
    <div className="bg-white">
        <header
          id="header"
          className="fixed-top mx-auto"
          data-scrollto-offset="0"
        >
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <Link
              to="/"
              className="logo d-flex align-items-center scrollto me-auto me-lg-0"
            >
              <h1>
                <img src={logoJASData} alt="Logo JASData" />
              </h1>
            </Link>

            <nav id="navbar" className="navbar bg-white rounded">
              <ul>
                <li>
                  <Link to="/" className="nav-link active scrollto">
                    Inicio
                  </Link>
                </li>

                {/* <li className="dropdown">
                <a href="/#">
                  <span>Inicio</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <a href="index.html" className="active">
                      Home 1 - index.html
                    </a>
                  </li>
                  <li>
                    <a href="index-2.html">Home 2 - index-2.html</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home 3 - index-3.html</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home 4 - index-4.html</a>
                  </li>
                </ul>
              </li> */}

                <li>
                  <Link to="/acerca" className="nav-link scrollto">
                    Acerca de...
                  </Link>
                </li>
                <li>
                  <Link to="/servicios" className="nav-link scrollto">
                    Servicios
                  </Link>
                </li>
                {/* <li>
                <a className="nav-link scrollto" href="index.html/#">
                  Portafolio
                </a>
              </li> */}
                <li>
                  <Link to="/team" className="nav-link scrollto">
                    Equipo
                  </Link>
                </li>
                {/* <li>
                <a href="/#">Blog</a>
              </li> */}
                {/* <li className="dropdown megamenu">
                <a href="/#">
                  <span>Mega Menu</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <a href="/#">Column 1 link 1</a>
                    <a href="/#">Column 1 link 2</a>
                    <a href="/#">Column 1 link 3</a>
                  </li>
                  <li>
                    <a href="/#">Column 2 link 1</a>
                    <a href="/#">Column 2 link 2</a>
                    <a href="/#">Column 3 link 3</a>
                  </li>
                  <li>
                    <a href="/#">Column 3 link 1</a>
                    <a href="/#">Column 3 link 2</a>
                    <a href="/#">Column 3 link 3</a>
                  </li>
                  <li>
                    <a href="/#">Column 4 link 1</a>
                    <a href="/#">Column 4 link 2</a>
                    <a href="/#">Column 4 link 3</a>
                  </li>
                </ul>
              </li> */}
                {/* <li className="dropdown">
                <a href="/#">
                  <span>Drop Down</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <a href="/#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="/#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-down dropdown-indicator"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="/#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="/#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="/#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="/#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="/#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="/#">Drop Down 4</a>
                  </li>
                </ul>
              </li> */}
                <li>
                  <Link to="/contacto" className="nav-link scrollto">
                    Contacto
                  </Link>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle d-none"></i>
            </nav>
            {/* <!-- .navbar --> */}

            <Link to="/sesion" className="btn-getstarted nav-link scrollto">
              Ingresar
            </Link>
          </div>
        </header>
    </div>
  );
};
