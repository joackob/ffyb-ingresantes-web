import { test, expect } from "@playwright/test";

test.describe("Como estudiante no registrado, deseo una sección donde personalizar mi carrera para tomar decisiones en base a mi situacion y mi contexto", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.getByRole("link", { name: "Tu plan de estudios" }).click();
  });

  test("Debe ser Farmacia, la primer carrera visualizada, lo que comprende materias como Quimica General, Matemática, Anatomía", async ({
    page,
  }) => {
    await expect(page.getByText("3° cuatrimestre")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "No disponible Química General" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "No disponible Matemática" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "No disponible Anatomía" }),
    ).toBeVisible();
  });

  test("Debe ser posible seleccionar la carrera Bioquimica, lo que comprende materias como Física, Biología, Quimica Organica", async ({
    page,
  }) => {
    await page.getByRole("combobox").click();
    await page.getByRole("option", { name: "Bioquimica" }).click();
    await expect(page.getByText("4° cuatrimestre")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "No disponible Física" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "No disponible Biología" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", {
        name: "No disponible Química Orgánica I",
        exact: true,
      }),
    ).toBeVisible();
  });
});
