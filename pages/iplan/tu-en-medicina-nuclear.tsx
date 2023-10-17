import CarreraComponent from "@/src/Carrera/Carrera";
import { tuEnMedicinaNuclearMock } from "@/src/database/mocks";

const tu_en_medicina_nuclear = () => {
  return <CarreraComponent carrera={tuEnMedicinaNuclearMock} />;
};

export default tu_en_medicina_nuclear;
