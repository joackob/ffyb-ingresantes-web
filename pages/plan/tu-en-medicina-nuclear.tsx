import Carrera from "@/src/carrera";
import { tuEnMedicinaNuclearMock } from "@/src/database/mocks";

const plan = () => {
  return <Carrera carrera={tuEnMedicinaNuclearMock} />;
};

export default plan;
