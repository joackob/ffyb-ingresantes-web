import Personaliza from "@/src/personaliza";
import { farmaciaMock } from "@/src/database/mocks";

const personaliza = () => {
  return <Personaliza carrera={farmaciaMock} />;
};

export default personaliza;
