import Carrera from "@/src/Carrera/Carrera";
import { useRouter } from "next/router";
import { carreras } from "@/src/Plan/Plan";

const carrera = () => {
  const router = useRouter();
  const id = router.query.id != undefined ? Number(router.query.id): 0;
  const item = carreras[id];
  return <Carrera title={item.nombre} subjects={item.materias} />;
};

export default carrera;