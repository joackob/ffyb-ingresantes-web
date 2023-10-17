import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CCarrera from "@/src/Carrera/Carrera";
import { farmaciaMock } from "@/src/database/mocks";

describe("Dashboard sobre el estado actual del plan de estudios de una carrera", () => {
  test("Deberia mostrar como titulo 'Farmacia' siendo Farmacia el plan seleccionado", async () => {
    render(<CCarrera carrera={farmaciaMock} />);
    const nombre = farmaciaMock.nombre;
    const titulo = await screen.findByText(nombre);
    expect(titulo).toBeVisible();
  });

  test("Deberia mostrar que un porcentaje de las materias estan aprobadas", async () => {
    render(<CCarrera carrera={farmaciaMock} />);
    const porcentaje = farmaciaMock.porcentajeDeMateriasAprobadas();
    const cporcentajes = await screen.findAllByText(`${porcentaje}%`);
    cporcentajes.forEach((cporcentaje) => expect(cporcentaje).toBeVisible());
  });
});
