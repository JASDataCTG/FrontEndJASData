import { useNavigate } from "react-router-dom";

import imagenNoEncontrado from "../../../assets/images/erro404.png";

export const NoEncontrado = () => {
  const regresar = useNavigate();
  return (
    <div className="p-5">
      <main>
        <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center p-5">
          <h1>404</h1>
          <h2>
            El recurso que está solicitando <strong>NO</strong> existe
          </h2>
          <button onClick={() => regresar(-1)} className="btn btn-info">
            Regresar
          </button>
          <img
            src={imagenNoEncontrado}
            className="img-fluid py-5"
            alt="Page Not Found"
          />
        </section>
      </main>
    </div>
  );
};
