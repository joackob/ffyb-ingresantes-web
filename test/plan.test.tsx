import { render, screen } from "@testing-library/react";
import Plan from "@/pages/plan";
import "@testing-library/jest-dom";

const carreras = [
  "Farmacia",
  "Bioquímica",
  "Licenciatura en Ciencias y Tecnología de Alimentos",
  "Tecnicatura Universitaria en Medicina Nuclear",
];

describe("Interfaz para la selección de carreras a personalizar", () => {
  const datosParaTests = carreras.map((carrera) => ({
    carrera: carrera,
    descripcion: `${carrera} deberia poder visualizarse`,
  }));
  datosParaTests.forEach(({ carrera, descripcion }) => {
    test(descripcion, async () => {
      render(<Plan />);
      const elementos = await screen.findAllByText(carrera);
      elementos.forEach((elemento) => expect(elemento).toBeVisible());
    });
  });
});
