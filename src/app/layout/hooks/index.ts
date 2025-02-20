import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import {
  links,
  linksParaTutorandos,
  linksParaCoordinadores,
  linksParaTutores,
} from "../links";
import { Usuarios } from "@prisma/client";
import router from "next/router";

export const useSesion = () => {
  const sesion = useSession();
  const [estado, cambiarEstado] = useState<
    "inactiva" | "activa" | "cerrando" | "iniciando"
  >("inactiva");

  return {
    enlaces: (): { label: string; url: string }[] => {
      try {
        switch ((sesion.data?.user as Usuarios).tipo) {
          case "tutorando":
            return linksParaTutorandos;
          case "coordinador":
            return linksParaCoordinadores;
          case "tutor":
            return linksParaTutores((sesion.data?.user as Usuarios).id);
          default:
            return links;
        }
      } catch {
        return links;
      }
    },
    estaInactivo: () => sesion.status === "unauthenticated",
    estaActivo: () => sesion.status === "authenticated",
    estaIniciando: () => estado === "iniciando" && sesion.status === "loading",
    estaCerrando: () => estado === "cerrando" && sesion.status === "loading",
    cerrar: async () => {
      cambiarEstado("cerrando");
      await signOut({ callbackUrl: "/" });
    },
    iniciar: () => {
      cambiarEstado("iniciando");
      router.push("/inicio-de-sesion");
    },
    usuario: () => sesion.data?.user as Usuarios,
  } as const;
};

export default useSesion;
