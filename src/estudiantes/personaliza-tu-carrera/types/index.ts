export type Materia = {
  id: number;
  nombre: string;
  estado: string;
};

export type Cuatrimestre = {
  id: string;
  materias: Materia[];
};

export const mapearMateriasConSuID = (cuatremestres: Cuatrimestre[]) => {
  const materias = cuatremestres!.flatMap(({ materias }) => materias);
  return materias.reduce(
    (map, materia) => map.set(materia.nombre, materia),
    new Map<string, Materia>()
  );
};

export const mapearMateriasConSuCuatrimestre = (
  cuatrimestres: Cuatrimestre[]
) => {
  return cuatrimestres!.reduce(
    (map, cuatri) => map.set(cuatri.id, cuatri.materias),
    new Map<string, Materia[]>()
  );
};
