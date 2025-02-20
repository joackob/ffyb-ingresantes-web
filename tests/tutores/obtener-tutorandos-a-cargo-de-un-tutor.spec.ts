import { test, expect } from "@playwright/test";

test.describe("Como tutor registrado, deseo acceder al sistema a través de mi correo y mi constraseña para poder operar con el sistema", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.getByRole("button", { name: "iniciar sesión" }).click();
    await page.getByLabel("Email *").click();
    await page.getByLabel("Email *").fill("tutor-con-tutorandos@ffyb.uba.ar");
    await page.getByLabel("Contraseña *").click();
    await page.getByLabel("Contraseña *").fill("contrasena-larga");
    await page.getByRole("button", { name: "Continuar" }).click();
  });

  test("Deberia aparecer un link para ver el progreso de la carrera solo si se trata de un estudiante registrado", async ({
    page,
  }) => {
    await expect(page.getByRole("banner")).toContainText("tutorandos");
  });

  test("Deberia aparecer un listado de tutorandos a cargo de un tutor", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "tutorandos" }).click();
    await expect(
      page.getByRole("heading", { name: "Ana García" })
    ).toBeVisible();
  });
});
