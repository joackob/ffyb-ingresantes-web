import { test, expect } from "@playwright/test";

test.describe("Siendo referente del Sistema de Tutorias, deseo que la web contenga material audio visual sobre los espacios de la facultad, para que los ingresantes puedan conocerla la misma", () => {
  test("Debe existir una sección dedicada a los espacios con información relevante para los estudiantes", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await page.getByRole("link", { name: "Aulas y espacios de la" }).click();
    await expect(
      page.getByRole("heading", {
        name: "UBA | Facultad de Farmacia y Bioquimica | Entrada",
      }),
    ).toBeVisible();
  });
});
