import z, { ZodError } from "zod";

export const EsquemaDeLaSolicitudParaRegistrarUnNuevoUsuario = z.object({
  nombre: z.string(),
  apellido: z.string(),
  email: z.string(),
  contrasena: z.string(),
  tipo: z.union([
    z.literal("tutor"),
    z.literal("tutorando"),
    z.literal("coordinador"),
  ]),
});

export type SolicitudParaRegistrarUnNuevoUsuario = z.infer<
  typeof EsquemaDeLaSolicitudParaRegistrarUnNuevoUsuario
>;

export const validarSolicitud = (
  datos: any,
): SolicitudParaRegistrarUnNuevoUsuario => {
  try {
    return EsquemaDeLaSolicitudParaRegistrarUnNuevoUsuario.parse(datos);
  } catch (error) {
    const erroresEncontradosAlChequearDatosDeLaConsulta = (
      error as ZodError
    ).issues.map((problema) => {
      return `El campo ${problema?.path.at(
        0,
      )} no se encuentra en el formato correcto: ${problema?.message}`;
    });
    console.error(
      "Error al chequear los datos necesarios para registrar a un nuevo usuario",
    );
    console.table(erroresEncontradosAlChequearDatosDeLaConsulta);
    throw new Error(erroresEncontradosAlChequearDatosDeLaConsulta.join("\n"));
  }
};
