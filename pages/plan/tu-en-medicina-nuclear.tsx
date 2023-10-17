import Carrera from "@/src/Carrera/Carrera";
import { tuEnMedicinaNuclearMock } from "@/src/database/mocks";

const plan = () => {
  return <Carrera carrera={tuEnMedicinaNuclearMock} />;
};

export default plan;
