import { createContext } from "react";
import { propUsuario } from "../modelos/MisInterfases";

export const ContextoUsuario = createContext<propUsuario | null>(null);
