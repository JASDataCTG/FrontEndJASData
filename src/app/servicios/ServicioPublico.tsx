import ApiBack from "../utils/dominios/ApiBack";

class ServicioPublico {
  public static async crearUsu(miObjetoJson: any) {
    // Servicio para crear usuarios
    // *******************************************************************
    const datosEnvio = {
      method: "POST",
      body: JSON.stringify(miObjetoJson),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    };
    const urlBack = ApiBack.URL + ApiBack.CREAR_USUARIO;
    const respuesta = fetch(urlBack, datosEnvio)
      .then((respuesta) => respuesta.json())
      .then((misDatos) => {
        return misDatos;
      })
      .catch((miError) => {
        return miError;
      });

    return respuesta;
  }

  // Servicio para iniciar sesión
  // *******************************************************************
  public static async iniciarSesion(objeto: any) {
    const datosEnviar = {
      method: "POST",
      body: JSON.stringify(objeto),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    };
    const url = ApiBack.URL + ApiBack.INICIAR_SESION;
    const respuesta = fetch(url, datosEnviar)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        return datos;
      })
      .catch((miError) => {
        return miError;
      });
    return respuesta;
  }
}

export default ServicioPublico;
