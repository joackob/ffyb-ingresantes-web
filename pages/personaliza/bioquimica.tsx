import Personaliza from "@/src/personaliza";
import { bioquimicaMock } from "@/src/database/mocks";

const personaliza = () => {
  return <Personaliza carrera={bioquimicaMock} />;
};

export default personaliza;
