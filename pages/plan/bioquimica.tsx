import Carrera from "@/src/Carrera/Carrera";
import { bioquimicaMock } from "@/src/database/mocks";

const plan = () => {
  return <Carrera carrera={bioquimicaMock} />;
};

export default plan;
