import Carrera from "@/src/carrera";
import { lctDeAlimentosMock } from "@/src/database/mocks";

const plan = () => {
  return <Carrera carrera={lctDeAlimentosMock} />;
};

export default plan;
