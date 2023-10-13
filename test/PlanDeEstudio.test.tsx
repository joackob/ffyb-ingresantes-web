import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carrera from "@/src/Carrera/Carrera";
import { Farmacia } from "@/src/database/carreras";

describe("Dashboard sobre el estado actual del plan de estudios de una carrera", () => {
  test("Deberia mostrar como titulo 'Farmacia' siendo Farmacia el plan seleccionado", () => {
    const farmacia = new Farmacia();
    render(<Carrera planSeleccionado={farmacia} />);
    const titulo = screen.findByText(farmacia.nombre);
    expect(titulo).toBeVisible();
  });

  test("Deberia mostrar que un 14% de las materias estan aprobadas", () => {
    const farmacia = new Farmacia();
    render(<Carrera planSeleccionado={farmacia} />);
    const porcentaje = screen.findByText(
      `${farmacia.porcentajeDeMateriasAprobadas()}`
    );
    expect(porcentaje).toBeVisible();
  });
});
