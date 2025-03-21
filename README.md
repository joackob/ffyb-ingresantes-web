# Aplicación para ingresantes a la Facultad de Farmacia y Bioquímica de la Universidad de Buenos Aires

Bajo el Sistema de Tutorías orientado a ingresantes de las carreras de Facultad de Farmacia y Bioquímica, es que se desarrolla esta aplicación que organización y planificación de estudios, manejo de herramientas digitales, actividades para el entrenamiento en el uso de la plataforma Moodle y otras que fomenten el sentido de pertenencia que implica formar parte de la comunidad de FFyB.

## Entorno

Asegurarse de tener instalado `git` . Esto se puede revisar muy fácilmente a trevés del comando `git --version` . En caso de no estar instalado, se puede hacer a través de los siguientes paso

- En Linux, a través del comando `sudo apt install git`.
- En Windows, a través de la pagina oficial <https://git-scm.com/>

Procurar tener actualizado `node.js` a la versión `lts`. Si desea asegurarse, puede ejecutar el comando `npm doctor` que le indicara si cumple con los requisitos. Si el comando no se encuentra o `node.js` esta desactualizado, puede instalar `node.js --lts` mediante alguno de los siguientes pasos

- En windows, desde la [pagina oficial](https://nodejs.org/en/), descargando y ejecutando la versión `lts`.

- En Linux, a través de [nvm](https://github.com/nvm-sh/nvm)

  - Abrir una terminal y ejecutar el comando que se encuentra en la sección [Install & update script](https://github.com/nvm-sh/nvm#install--update-script)

  - Cerrar la terminal y abrir otra para ejecutar el siguiente comando para verificar la correcta instalación`nvm --version` . Una vez observada la versión, ejecutar el siguiente comando para instalar Node.js

    ```bash
    nvm install --lts
    ```

## Instalación y ejecución

- 🛠Para instalar las dependencias ejecutar el siguiente comando `npm install`
- 🛠Para inicializar la base de datos desde cero (para desarrollo), ejecutar el comando `npm run db:init:dev`. Para producción, se debe ejecutar el comando `npm run db:init:deploy`
- ⚒Para ejecutar el modo playground o repl, ejecutar el siguiente comando `npm run dev`
- 🔧Para traducir el código en `/src` a `JavaScript` , usar el comando `npm run build`
- 🔑Para ejecutar el código con `Node.js`, usar el comando `npm run start`
- 🧪Para ejecutar los test con jest, usar el comando `npm run test`

## Variables de entorno

- `NODE_ENV=development`: Variable que identifica el entorno en que se ejecuta el proyecto. `development`: en desarrollo, `deploy`: en producción, `testing`: en testing.
- `DATABASE_URL="file:test.db"`: URL para la base de datos. En entornos de desarrollo, se usa sqlite por defecto. En producción, se trabaja con PostgresSQL
- `CI=off`: Variable que identifica un entorno de integración. Usado junto a GitHub Actions para CI.
- `NEXTAUTH_URL=http://localhost:3000/api/auth`: En producción, la variable identifica la dirección de la api para NextAuth
- `NEXTAUTH_SECRET=secret_for_jwt`: Clave secreta usada para encriptar JWT

Se puede usar el archivo `.env` para configurar estas variables de entorno en testing y desarrollo. Solo se debe ejecutar el comando `cp .env.example .env`.

## Características

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Next-pwa](https://www.npmjs.com/package/next-pwa)
- [NextAuth](https://next-auth.js.org/)

## Artículos y ejemplos tomados en cuenta para el desarrollo del template

- <https://www.npmjs.com/package/next-pwa>
- <https://nextjs.org/docs/testing>

## Pasos para crear este template

Este proyecto esta listo para ser customizado, pero si te parece necesario, podes empezar todo desde cero. El primer comando a ejecutar es el que setea el proyecto desde cero.

```bash
npx create-next-app --example progressive-web-app my-pwa
```

Con esto, se creara una carpeta llamada “my-pwa”. Este nombre puede ser reemplazado en el mismo comando para ajustarlo a su proyecto.

Con el siguiente comando se puede incluir Jest como libreria para testing

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

Como lo menciona la documentación oficial, es necesario crear el archivo `jest.config.js` con el siguiente contenido

```jsx
// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
```

Por último, se incluye material UI como librería frontend

```bash
npm install @mui/material @emotion/react @emotion/styled
```

```bash
npm install @mui/icons-material
```

## Pasos para customizar este template

### Favicon

Empieza eligiendo el icono o logotipo que representará a la pagina. Recomiendo <https://favicon.io/> para este trabajo. Es rápido, sencillo, y nos provee de todo lo necesario para incluir el icono en la pagina. Cuando termine de crear la marca, descargue el comprimido y su contenido debe moverse a la carpeta `public` del proyecto.

La propia pagina nos otorga los links que debemos pegar en el `Layout/components/Header` para que los iconos sean tomados en cuenta.

### Colores

Con la marca ya elegida, proceda a elegir los colores que serán parte del estilo de la pagina. En la carpeta `src/theme/Theme.tsx` se encuentra el componente a cargo de customizar la paleta de colores, ademas de otras características del estilo. Recomiendo leer los siguientes artículos para saber más.

- <https://mui.com/material-ui/customization/theming/>
- <https://mui.com/material-ui/customization/color/>

### Mobile

Para que la modalidad mobile sea una experiencia completa, se recomienda modificar los códigos de colores presentes en los archivos `manifest.json`, `site.webmanifest`, `src/layout/components/Header`.
