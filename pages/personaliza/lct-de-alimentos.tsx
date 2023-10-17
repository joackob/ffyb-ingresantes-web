import Personaliza from "@/src/Personaliza/Personaliza";
import { lctDeAlimentosMock } from "@/src/database/mocks";

const personaliza = () => {
  return <Personaliza carrera={lctDeAlimentosMock} />;
};

export default personaliza;
