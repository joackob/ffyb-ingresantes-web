import { test, expect } from "@playwright/test";

test.describe("Como usuario registrado, deseo acceder al sistema a través de mi correo y mi constraseña para poder operar con el sistema", () => {
  test("Deberia aparecer un boton para cerrar sesión despues de acceder al sistema con un usuario registrado", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await page.getByRole("link", { name: "Iniciar sesión" }).click();
    await page.getByLabel("Email *").click();
    await page.getByLabel("Email *").fill("usuario-registrado@ffyb.uba.ar");
    await page.getByLabel("Contraseña *").click();
    await page.getByLabel("Contraseña *").fill("contrasena-larga");
    await page.getByRole("button", { name: "Continuar" }).click();
    await expect(page.getByRole("banner")).toContainText("cerrar sesión");
  });
});
