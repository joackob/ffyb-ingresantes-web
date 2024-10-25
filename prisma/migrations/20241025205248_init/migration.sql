-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tutorandos" (
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "Tutorandos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Carreras" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nombre" TEXT NOT NULL,
    "tutorandoId" TEXT NOT NULL,
    CONSTRAINT "Carreras_tutorandoId_fkey" FOREIGN KEY ("tutorandoId") REFERENCES "Tutorandos" ("usuarioId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cuatrimestre" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "carreraId" TEXT NOT NULL,
    CONSTRAINT "Cuatrimestre_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carreras" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Asignaturas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nombre" TEXT NOT NULL,
    "cuatrimestreId" TEXT NOT NULL,
    CONSTRAINT "Asignaturas_cuatrimestreId_fkey" FOREIGN KEY ("cuatrimestreId") REFERENCES "Cuatrimestre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Correlativas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "asignaturaId" TEXT NOT NULL,
    "correlativaId" TEXT NOT NULL,
    CONSTRAINT "Correlativas_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "Asignaturas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Correlativas_correlativaId_fkey" FOREIGN KEY ("correlativaId") REFERENCES "Asignaturas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_contrasena_key" ON "Usuarios"("contrasena");

-- CreateIndex
CREATE UNIQUE INDEX "Tutorandos_usuarioId_key" ON "Tutorandos"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Correlativas_asignaturaId_key" ON "Correlativas"("asignaturaId");
