import Carrera from "@/src/Carrera/Carrera";
import { lctDeAlimentosMock } from "@/src/database/mocks";

const plan = () => {
  return <Carrera carrera={lctDeAlimentosMock} />;
};

export default plan;
