import Carrera from "@/src/carrera";
import { bioquimicaMock } from "@/src/database/mocks";

const plan = () => {
  return <Carrera carrera={bioquimicaMock} />;
};

export default plan;
