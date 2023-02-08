import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../../assets/images/logo3.png";
import { useState } from "react";
import CrearUsuario from "../../modelos/CrearUsuario";
import { useFormulario } from "../../utils/misHooks/useFormulario";
import ServicioPublico from "../../servicios/ServicioPublico";

export const RegistroSesion = () => {
  type formularioHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  let {
    nombreUsuario,
    apellidoUsuario,
    nuipUsuario,
    direccionUsuario,
    correoUsuario,
    telFijoUsuario,
    celUsuario,
    claveUsuario,
    dobleEnlace,
    objeto,
  } = useFormulario<CrearUsuario>(
    new CrearUsuario("", "", "", "", "", "", "", "")
  );
  const verificarFormulario = async (fh: formularioHtml) => {
    fh.preventDefault();
    setEnProceso(true);
    const formularioActual = fh.currentTarget;

    formularioActual.classList.add("was-validated");
    if (formularioActual.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      console.log("Conexión al BackEnd");
      const recibidoBackend=await ServicioPublico.crearUsu(objeto);
      console.log(recibidoBackend);
    }
  };
  return (
    <div>
      <main>
        <div className="container p-5">
          <section className="section register d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
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
                          Crear cuenta
                        </h5>
                        <p className="text-center small">
                          Complete la siguiente información personal
                        </p>
                      </div>

                      <Form noValidate className="row g-3" validated={enProceso} onSubmit={verificarFormulario}>
                        <div className="col-12">
                          <Form.Group controlId="nombreUsuario">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              name="nombreUsuario"
                              className="form-control"
                              value={nombreUsuario}
                              onChange={dobleEnlace}
                            />
                            <Form.Control.Feedback type="invalid">
                              El nombre es obligatorio
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="apellidoUsuario">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              name="apellidoUsuario"
                              className="form-control"
                              value={apellidoUsuario}
                              onChange={dobleEnlace}
                            />
                            <Form.Control.Feedback type="invalid">
                              El apellido es obligatorio
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="nuipUsuario">
                            <Form.Label>
                              Número del documento de identidad
                            </Form.Label>
                            <Form.Control
                              required
                              type="text"
                              name="nuipUsuario"
                              className="form-control"
                              value={nuipUsuario}
                              onChange={dobleEnlace}
                            />
                            <Form.Control.Feedback type="invalid">
                              El campo es obligatorio
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="direccionUsuario">
                            <Form.Label>
                              Dirección de correspondencia
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="direccionUsuario"
                              className="form-control"
                              value={direccionUsuario}
                              onChange={dobleEnlace}
                            />
                            <Form.Control.Feedback type="invalid">
                              La dirección es obligatoria
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="correoUsuario">
                            <Form.Label>Correo electrónico</Form.Label>
                            <div className="input-group has-validation">
                              <span className="input-group-text">@</span>
                              <Form.Control
                                required
                                type="email"
                                name="correoUsuario"
                                className="form-control"
                                value={correoUsuario}
                                onChange={dobleEnlace}
                              />
                              <Form.Control.Feedback type="invalid">
                                El correo electrónico es obligatorio
                              </Form.Control.Feedback>
                            </div>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="telFijoUsuario">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                              type="tel"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              name="telFijoUsuario"
                              className="form-control"
                              value={telFijoUsuario}
                              onChange={dobleEnlace}
                            />
                            <Form.Control.Feedback type="invalid">
                              No es un formato valido
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="celUsuario">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control
                              type="tel"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              name="celUsuario"
                              className="form-control"
                              value={celUsuario}
                              onChange={dobleEnlace}
                            />
                            <Form.Control.Feedback type="invalid">
                              No es un formato valido
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="claveUsuario">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="claveUsuario"
                              className="form-control"
                              minLength={4}
                              value={claveUsuario}
                              onChange={dobleEnlace}
                            />
                            <Form.Control.Feedback type="invalid">
                              Mínimo 4 caracteres
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="reClaveUsuario">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="reClaveUsuario"
                              className="form-control"
                              pattern={claveUsuario}
                            />
                            <Form.Control.Feedback type="invalid">
                              Las contraseñas no coindicen
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <button
                            style={{ backgroundColor: "#3cb3ca" }}
                            className="btn btn-primary w-50 mx-auto d-block"
                            type="submit"
                          >
                            Crear cuenta
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            ¿Ya tienes una cuenta?{" "}
                            <Link to="/sesion">Clic aquí</Link>
                          </p>
                        </div>
                      </Form>
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
