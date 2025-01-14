import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  // prettier-ignore
  await expect(page.getByRole("main")).toContainText("SOBRE EL SISTEMA DE TUTORÍAS");
  await expect(page.getByRole("main")).toContainText("SOBRE LOS TUTORES");
  await expect(page.getByRole("main")).toContainText("SOBRE EL COORDINADOR");
  // prettier-ignore
  await expect(page.getByRole("main")).toContainText("SOBRE LA FORMACIÓN DE LOS TUTORES");
  await expect(page.getByRole("main")).toContainText("SOBRE LOS ESTUDIANTES");
});
