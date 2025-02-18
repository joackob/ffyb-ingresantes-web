import z from "zod";

export const EsquemaParaLasCarrerasAnexadasPorSuId = z.object({
  carreras: z.array(
    z.object({
      id: z.string(),
      nombre: z.union([
        z.literal("Farmacia"),
        z.literal("Bioquímica"),
        z.literal("Técnico Universitario en Medicina Nuclear"),
        z.literal("Técnico Universitario en Óptica y Contactología"),
        z.literal("Licenciatura en Ciencia y Tecnología de Alimentos"),
        z.literal("Tecnicatura Universitaria en Gestión Integral de Bioterio"),
      ]),
      cuatrimestres: z.array(
        z.object({
          id: z.string(),
          materias: z.array(
            z.object({
              id: z.string(),
              nombre: z.string(),
              correlativas: z.optional(z.array(z.string())),
            }),
          ),
        }),
      ),
    }),
  ),
});

export type CarrerasAnexadasPorSuId = z.infer<
  typeof EsquemaParaLasCarrerasAnexadasPorSuId
>;

export type Carrera = z.infer<
  typeof EsquemaParaLasCarrerasAnexadasPorSuId
>["carreras"][number];

export type Cuatrimestre = Carrera["cuatrimestres"][number];

export type Materia = Cuatrimestre["materias"][number];
