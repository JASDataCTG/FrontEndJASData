class CrearUsuario {
  public nombreUsuario: string;
  public apellidoUsuario: string;
  public nuipUsuario: string;
  public direccionUsuario: string;
  public correoUsuario: string;
  public telFijoUsuario: string;
  public celUsuario: string;
  public claveUsuario: string;

  constructor(
    nomu: string,
    apeu: string,
    nuipu: string,
    diru: string,
    coru: string,
    tfu: string,
    celu: string,
    clu: string
  ) {
    this.nombreUsuario = nomu;
      this.apellidoUsuario = apeu;
      this.nuipUsuario = nuipu;
      this.direccionUsuario = diru;
      this.correoUsuario = coru;
      this.telFijoUsuario = tfu;
      this.celUsuario = celu;
      this.claveUsuario = clu;
  }
}

export default CrearUsuario;
