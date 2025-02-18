"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";

export const useFormularioParaIniciarSesion = () => {
  const { register, handleSubmit } = useForm();
  const [estado, cambiarEstado] = useState<
    | "completando-el-formulario"
    | "esperando-iniciar-sesion"
    | "hubo-un-problema"
  >("completando-el-formulario");

  const iniciarSesion = handleSubmit(async (data) => {
    try {
      cambiarEstado("esperando-iniciar-sesion");
      await signIn("credentials", {
        email: data.email,
        contrasena: data.contrasena,
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
      cambiarEstado("hubo-un-problema");
    }
  });

  const referenciaAlCampoEmail = register("email", { required: true });
  const referenciaAlCampoContrasena = register("contrasena", {
    required: true,
  });

  return {
    cargandoSesion: () => estado === "esperando-iniciar-sesion",
    huboUnProblema: () => estado === "hubo-un-problema",
    configurarCampoParaLaContrasena: () => referenciaAlCampoContrasena,
    configurarCampoParaElEmail: () => referenciaAlCampoEmail,
    iniciarSesion,
  } as const;
};
