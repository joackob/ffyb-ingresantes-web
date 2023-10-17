import Carrera from "@/src/Carrera/Carrera";
import { farmaciaMock } from "@/src/database/mocks";

const plan = () => {
  return <Carrera carrera={farmaciaMock} />;
};

export default plan;
