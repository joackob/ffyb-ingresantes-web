import Personaliza from "@/src/personaliza";
import { lctDeAlimentosMock } from "@/src/database/mocks";

const personaliza = () => {
  return <Personaliza carrera={lctDeAlimentosMock} />;
};

export default personaliza;
