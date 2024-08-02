import React from "react";
import { Carrera } from "../database/interfaces";
import TituloCarrera from "./components/TituloCarrera";
import PlanPersonalizable from "./components/PlanPersonalizable";

const Personaliza = ({ carrera }: { carrera: Carrera }) => {
  return (
    <>
      <TituloCarrera carrera={carrera.nombre} />
      <PlanPersonalizable plan={carrera.plan} />
    </>
  );
};

export default Personaliza;
