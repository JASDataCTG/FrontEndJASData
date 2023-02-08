import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo3.png";

export const InicioSesion = () => {
  return (
    <div>
      <main>
        <div className="container-fluid p-5">
          <section className="section register d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <Link
                      to="/"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src={logo} alt="JASData" />
                      <span className="d-none d-lg-block">JASData</span>
                    </Link>
                  </div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Inicio de sesión
                        </h5>
                      </div>

                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Correo electrónico
                          </label>
                          <div className="input-group has-validation">
                            <span
                              className="input-group-text"
                              id="inputGroupPrepend"
                            >
                              @
                            </span>
                            <input
                              type="text"
                              name="username"
                              className="form-control"
                              id="yourUsername"
                              required
                            />
                            <div className="invalid-feedback">
                              Ingrese su correo
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Contraseña
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            required
                          />
                          <div className="invalid-feedback">
                            ¡Ingrese su Contraseña!
                          </div>
                        </div>

                        <div className="col-12">
                          <button style={{backgroundColor:"#3cb3ca"}}
                            className="btn btn-primary w-50 mx-auto d-block"
                            type="submit"
                          >
                            Ingresar
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            ¿No tienes cuenta?{" "}
                            <Link to="/registro">Crear una cuenta</Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
