import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarreraComponent from "@/src/Carrera/Carrera";
import { farmaciaMock } from "@/src/database/mocks";

describe("Dashboard sobre el estado actual del plan de estudios de una carrera", () => {
  test("Deberia mostrar como titulo 'Farmacia' siendo Farmacia el plan seleccionado", () => {
    render(<CarreraComponent carrera={farmaciaMock} />);
    const nombre = farmaciaMock.nombre;
    const titulo = screen.findByText(nombre);
    expect(titulo).toBeVisible();
  });

  test("Deberia mostrar que un porcentaje de las materias estan aprobadas", () => {
    render(<CarreraComponent carrera={farmaciaMock} />);
    const porcentaje = farmaciaMock.porcentajeDeMateriasAprobadas();
    const porcentajeComponent = screen.findByText(String(porcentaje));
    expect(porcentajeComponent).toBeVisible();
  });
});
