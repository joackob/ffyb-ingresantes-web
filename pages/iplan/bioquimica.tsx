import CarreraComponent from "@/src/Carrera/Carrera";
import { bioquimicaMock } from "@/src/database/mocks";

const bioquimica = () => {
  return <CarreraComponent carrera={bioquimicaMock} />;
};

export default bioquimica;
