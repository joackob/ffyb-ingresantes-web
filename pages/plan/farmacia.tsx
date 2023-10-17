import CarreraComponent from "@/src/Carrera/Carrera";
import { farmaciaMock } from "@/src/database/mocks";

const farmacia = () => {
  return <CarreraComponent carrera={farmaciaMock} />;
};

export default farmacia;
