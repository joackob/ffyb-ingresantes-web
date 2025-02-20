import { test, expect } from "@playwright/test";

test.describe("Como tutor, deseo obtener la lista de tutorandos a mi cargo para poder ver su progreso", () => {
  test("El tutor puede ver la lista de tutorandos a su cargo", async ({
    request,
  }) => {
    const tutorandos = await request.get("/api/tutores/tutor-id/tutorandos");
    expect(tutorandos.status()).toBe(200);
  });

  test("El tutor puede ver la lista de cuatro tutorandos a su cargo", async ({
    request,
  }) => {
    const tutorandos = await request.get("/api/tutores/tutor-id/tutorandos");
    expect(await tutorandos.json()).toHaveLength(4);
  });
});
