import Personaliza from "@/src/Personaliza/Personaliza";
import { bioquimicaMock } from "@/src/database/mocks";

const personaliza = () => {
  return <Personaliza carrera={bioquimicaMock} />;
};

export default personaliza;
