import { test, expect } from "@playwright/test";

test.describe("Siendo referente del Sistema de Tutorías, preciso que la web contenga todos los recursos con los que cuentan los ingresantes para atender a sus dudas e inquietudes", () => {
  test("Deberian existir al menos 3 articulos con los principales recursos para estudiantes", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await page.getByRole("link", { name: "Recursos y ofertas" }).click();
    await expect(page.getByRole("main")).toContainText("Dosis de radio");
    await expect(page.getByRole("main")).toContainText("RRHH");
    await expect(page.getByRole("main")).toContainText("UBANEX");
  });
});
