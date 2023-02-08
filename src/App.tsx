import { BrowserRouter } from "react-router-dom";
import { Cabecera } from "./app/vistas/publicas/Cabecera";
import "./assets/css/main.css";
import "./assets/css/variables-blue.css";
import "./assets/css/variables-green.css";
import "./assets/css/variables-orange.css";
import "./assets/css/variables-pink.css";
import "./assets/css/variables-purple.css";
import "./assets/css/variables-red.css";
import "./assets/css/variables.css";
import "./App.css";
import { Ruteo } from "./app/utils/routes/Ruteo";
import { Suspense } from "react";

const spinnerEspera = (
  <button className="btn btn-primary" type="button" disabled>
    <span
      className="spinner-grow spinner-grow-sm"
      role="status"
      aria-hidden="true"
    ></span>
    Cargando...
  </button>
);

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Cabecera />
        <Suspense fallback={spinnerEspera}>
          <Ruteo />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
