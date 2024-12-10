import { useCarreraSeleccionable } from "@/src/estudiantes/personaliza-tu-carrera/hooks/useCarrerasSeleccionables";
import Personaliza from "@/src/estudiantes/personaliza-tu-carrera/index";
import { LinearProgress, Alert } from "@mui/material";
import { useRouter } from "next/router";

const Page = () => {
  const enrutador = useRouter();
  const carreraSeleccionada = enrutador.query.carrera?.toString();
  const carrera = useCarreraSeleccionable(carreraSeleccionada);

  return (
    <>
      {carrera.descargando() && <LinearProgress />}
      {carrera.fallida() && (
        <Alert severity="error">Hubo un error al cargar la carrera</Alert>
      )}
      {carrera.descargada() && (
        <Personaliza
          nombre={carrera.nombre()}
          cuatrimestres={carrera.cuatrimestres()}
          materias={carrera.materias()}
        />
      )}
    </>
  );
};

export default Page;
