import { test, expect } from "@playwright/test";

test.describe("Como usuario registrado, deseo acceder al sistema a través de mi correo y mi constraseña para poder operar con el sistema", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.getByRole("button", { name: "iniciar sesión" }).click();
    await page.getByLabel("Email *").click();
    await page.getByLabel("Email *").fill("estudiante@ffyb.uba.ar");
    await page.getByLabel("Contraseña *").click();
    await page.getByLabel("Contraseña *").fill("contrasena-larga");
    await page.getByRole("button", { name: "Continuar" }).click();
  });

  test("Deberia aparecer un boton para cerrar sesión despues de acceder al sistema con un usuario registrado", async ({
    page,
  }) => {
    await expect(
      page.getByRole("button", { name: "cerrar sesión" }),
    ).toBeVisible();
  });

  test("Deberia aparecer un link para ver el progreso de la carrera solo si se trata de un estudiante registrado", async ({
    page,
  }) => {
    await expect(page.getByRole("banner")).toContainText("progreso");
  });

  test("Deberia aparecer un boton para iniciar sesión despues de salir del sistema", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "cerrar sesión" }).click();
    await expect(page.getByRole("banner")).toContainText("iniciar sesión");
  });
});
