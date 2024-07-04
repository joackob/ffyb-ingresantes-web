import Personaliza from "@/src/personaliza";
import { tuEnMedicinaNuclearMock } from "@/src/database/mocks";

const personaliza = () => {
  return <Personaliza carrera={tuEnMedicinaNuclearMock} />;
};

export default personaliza;
