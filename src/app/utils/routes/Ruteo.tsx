import { Routes, Route } from "react-router-dom";
import { Home } from "../../vistas/publicas/Home";
import { AcercaDe } from "../../vistas/compartidas/AcercaDe";
import { Servicios } from "../../vistas/publicas/Servicios";
import { Team } from "../../vistas/publicas/Team";
import { Contacto } from "../../vistas/publicas/Contacto";
import { InicioSesion } from "../../vistas/publicas/InicioSesion";
import { RegistroSesion } from "../../vistas/publicas/RegistroSesion";
import { NoEncontrado } from "../../vistas/compartidas/NoEncontrado";
// import { Cabecera } from "../../vistas/publicas/Cabecera";
import { lazy } from "react";

// Utilizar lazy para cargar las páginas solo cuando se soliciten
/* const LazyCabecera = lazy(() =>
    import("../../vistas/publicas/Cabecera").then(() => ({ default: Cabecera }))
); */

const LazyHome = lazy(() =>
    import("../../vistas/publicas/Home").then(() => ({ default: Home }))
);

const LazyAcercaDe = lazy(() =>
    import("../../vistas/compartidas/AcercaDe").then(() => ({ default: AcercaDe }))
);

const LazyServicios = lazy(() =>
    import("../../vistas/publicas/Servicios").then(() => ({ default: Servicios }))
);

const LazyTeam=lazy(()=>import("../../vistas/publicas/Team").then(()=>({default:Team})));


const LazyContacto = lazy(() =>
    import("../../vistas/publicas/Contacto").then(() => ({ default: Contacto }))
);

const LazyRegistroSesion = lazy(() =>
    import("../../vistas/publicas/RegistroSesion").then(() => ({ default: RegistroSesion }))
);

const LazyInicioSesion = lazy(() =>
    import("../../vistas/publicas/InicioSesion").then(() => ({ default: InicioSesion }))
);

const LazyNoEncontrado = lazy(() =>
    import("../../vistas/compartidas/NoEncontrado").then(() => ({ default: NoEncontrado }))
);

export const Ruteo = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<LazyCabecera />} /> */}
            <Route path="/" element={<LazyHome />} />
            <Route path="/acerca" element={<LazyAcercaDe />} />
            <Route path="/servicios" element={<LazyServicios />} />
            <Route path="/team" element={<LazyTeam />} />
            <Route path="/contacto" element={<LazyContacto />} />
            <Route path="/sesion" element={<LazyInicioSesion />} />
            <Route path="/registro" element={<LazyRegistroSesion/>} />
            <Route path="*" element={<LazyNoEncontrado />} />
        </Routes>
    );
};
