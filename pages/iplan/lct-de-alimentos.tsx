import CarreraComponent from "@/src/Carrera/Carrera";
import { lctDeAlimentosMock } from "@/src/database/mocks";

const lct_de_alimentos = () => {
  return <CarreraComponent carrera={lctDeAlimentosMock} />;
};

export default lct_de_alimentos;
