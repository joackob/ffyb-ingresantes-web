import Banner from "@/src/components/Banner";
import { Avatar } from "@mui/material";
import link from "next/link";

const index = () => {
  const studentData = {
    percentageCompleted: {
      value: "80%",
      customWidth: "240px", // Ancho personalizable para este cuadro
      customHeight: "240px", // Altura personalizable para este cuadro
    },
    subjectsPerSemester: {
      value: "5",
      customWidth: "260px", // Otro ancho personalizado
      customHeight: "220px", // Otra altura personalizada
    },
    expectedGraduation: {
      value: "2025",
      customWidth: "280px", // Ancho personalizado
      customHeight: "210px", // Altura personalizada
    },
    averageGrade: {
      value: "8,7",
      customWidth: "200px",
      customHeight: "220px",
    },
    maxSubjectsSemester: {
      value: "6",
      customWidth: "400px",
      customHeight: "200px",
    },
    highestGrade: {
      value: "10",
      customWidth: "200px",
      customHeight: "200px",
    },
  };

  return (
    <>
      <Banner titulo={"Tu progreso"} />

      {/* Contenedor del Avatar con margen superior para moverlo hacia abajo */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Centra horizontalmente
          alignItems: "center", // Centra verticalmente
          marginTop: "50px", // Mueve el Avatar hacia abajo (ajusta el valor según si es necesario :))
        }}
      >
        <Avatar
          alt="Avatar"
          src="https://picsum.photos/200/200"
          sx={{ width: 180, height: 180 }}
        />
      </div>

      <div
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#061847",
          width: "320px", // Ancho fijo del bloque contenedor
          height: "auto", // El bloque se adapta al tamaño del contenido
          margin: "16px auto", // Centrado automático con margen superior e inferior
          padding: "10px", // Espaciado interno del contenedor principal
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column", // Disposición en columna
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", // Evitar desbordamiento
        }}
      >
        <h1>{/* Título general si es necesario */}</h1>

        {/* Contenedor de cada tarjeta */}
        {Object.entries(studentData).map(
          ([key, { value, customWidth, customHeight }]) => (
            <div
              key={key}
              style={{
                margin: "16px 16px", // Márgenes de arriba y abajo para separar los cuadros
                padding: "32px", // Espaciado de 32px (aproximadamente 32px de distancia alrededor del contenido)
                display: "flex",
                flexDirection: "column", // Asegura que el contenido esté en columna
                justifyContent: "center", // Centra el contenido verticalmente
                alignItems: "center", // Centra el contenido horizontalmente
                textAlign: "center", // Centra el texto
                width: customWidth || "auto", // El ancho del cuadro se ajusta, pero se puede personalizar
                height: customHeight || "auto", // La altura del cuadro también se ajusta, pero se puede personalizar
                maxWidth: "100%", // Asegura que el cuadro no se salga del contenedor padre
                wordWrap: "break-word", // Para que el texto largo se ajuste
                overflow: "hidden", // Evita desbordamientos
                whiteSpace: "normal", // Permite el ajuste de línea
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra sutil para el cuadro
              }}
            >
              <h2 style={{ margin: 1, fontSize: "5rem" }}>{value}</h2>
              <p style={{ margin: "8px 0 0", fontSize: "1rem" }}>
                {key === "percentageCompleted"
                  ? "DE LA CARRERA TERMINADA"
                  : key === "subjectsPerSemester"
                  ? "MATERIAS APROBADAS POR CUATRIMESTRE"
                  : key === "expectedGraduation"
                  ? "AÑO DE EGRESO ESTIMADO"
                  : key === "averageGrade"
                  ? "NOTA PROMEDIO"
                  : key === "maxSubjectsSemester"
                  ? "MATERIAS APROBADAS EN EL MEJOR CUATRIMESTRE"
                  : "TU MEJOR NOTA"}
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default index;
