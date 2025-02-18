import { test, expect } from "@playwright/test";

test.describe("Siendo referente del Sistema de Tutorías, preciso que el mismo se dé a conocer a través de nuestro sitio web, para que cualquier persona pueda informarse acerca de nuestros objetivos y proceder", () => {
  test("Deberian existir al menos 5 tarjetas correspondientes a 5 articulos con informacion sobre las tutorias", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    // prettier-ignore
    await expect(page.getByRole("main")).toContainText("SOBRE EL SISTEMA DE TUTORÍAS");
    await expect(page.getByRole("main")).toContainText("SOBRE LOS TUTORES");
    await expect(page.getByRole("main")).toContainText("SOBRE EL COORDINADOR");
    // prettier-ignore
    await expect(page.getByRole("main")).toContainText("SOBRE LA FORMACIÓN DE LOS TUTORES");
    await expect(page.getByRole("main")).toContainText("SOBRE LOS ESTUDIANTES");
  });

  test("Deberia poder acceder al primer articulo dedicado a tutorias, a través de el enlace dispuesto en el resumen de la sección de bienvenida", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await page.locator("div > div > div > div > div > a").first().click();
    await expect(page.getByRole("main")).toContainText(
      "El Sistema de Tutorías de la Facultad de Farmacia y Bioquímica es un conjunto de actividades",
    );
    await expect(page.getByRole("main")).toContainText(
      "El objetivo del Sistema de Tutorías es hacer más fácil el ingreso y permanencia en la Facultad",
    );
  });
});
