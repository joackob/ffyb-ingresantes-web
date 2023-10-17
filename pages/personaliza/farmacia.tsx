import Personaliza from "@/src/Personaliza/Personaliza";
import { farmaciaMock } from "@/src/database/mocks";

const personaliza = () => {
  return <Personaliza carrera={farmaciaMock} />;
};

export default personaliza;

