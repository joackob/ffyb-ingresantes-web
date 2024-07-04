import Carrera from "@/src/carrera";
import { farmaciaMock } from "@/src/database/mocks";

const plan = () => {
  return <Carrera carrera={farmaciaMock} />;
};

export default plan;
