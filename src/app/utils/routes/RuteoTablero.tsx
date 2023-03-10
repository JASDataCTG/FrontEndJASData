import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Bienvenida } from "../../contenedores/Bienvenida";
import { AcercaDe } from "../../vistas/compartidas/AcercaDe";
import { NoEncontrado } from "../../vistas/compartidas/NoEncontrado";

// Carga Lazy - Supenso
// ***********************************************************************************************
const cargando = (
  <div className="d-flex justify-content-center">
    <div className="mt-3">
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Cargando ...
      </button>
    </div>
  </div>
);
// ***********************************************************************************************

const RecursoNoEncontrado = lazy(() =>
  import("../../vistas/compartidas/NoEncontrado").then(() => ({
    default: NoEncontrado,
  }))
);
const LazyBienvenida = lazy(() =>
  import("../../contenedores/Bienvenida").then(() => ({ default: Bienvenida }))
);
const LazyAcercaDe = lazy(() =>
  import("../../vistas/compartidas/AcercaDe").then(() => ({
    default: AcercaDe,
  }))
);

export const RuteoTablero = () => {
  return (
    <Suspense fallback={cargando}>
      <Routes>
        <Route path="/" element={<LazyBienvenida />} />
        <Route path="/about" element={<LazyAcercaDe />} />

        <Route path="*" element={<RecursoNoEncontrado />} />
      </Routes>
    </Suspense>
  );
};
