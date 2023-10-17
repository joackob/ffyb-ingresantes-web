import Personaliza from "@/src/Personaliza/Personaliza";
import { tuEnMedicinaNuclearMock } from "@/src/database/mocks";

const personaliza = () => {
  return <Personaliza carrera={tuEnMedicinaNuclearMock} />;
};

export default personaliza;
