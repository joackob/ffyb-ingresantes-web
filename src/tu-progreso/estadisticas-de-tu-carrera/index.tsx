const index = () => {
  const studentData = {
    percentageCompleted: "80%",
    subjectsPerSemester: "5",
    expectedGraduation: "2025",
    averageGrade: "8.7",
    maxSubjectsSemester: "6",
    highestGrade: "10",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
        width: "320px", // Ancho fijo del bloque
        height: "950px", // Alto fijo del bloque
        margin: "16px auto", // Centrado automático con margen superior e inferior de 30px
        padding: "10px", // Espaciado interno
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
      <h1
        style={{
          textAlign: "center",
          color: "#007bff",
          fontSize: "1.8rem", // Tamaño de fuente moderado
          margin: "10px 0", // Espaciado de arriba y abajo
        }}
      ></h1>

      {/* Contenedor de cada tarjeta */}
      {Object.entries(studentData).map(([key, value]) => (
        <div
          key={key}
          style={{
            margin: "16px 0px", // Márgenes de arriba y abajo
            padding: "32px 32px", // Ajustamos el padding para que no ocupe tanto
            backgroundColor: "#4287f5", //color de fondo(blanco)
            display: "flex",
            flexDirection: "column", // Asegura que el contenido esté en columna
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "100%", // Ocupa todo el ancho disponible
            wordWrap: "break-word", // Para que el texto largo se ajuste
            overflow: "hidden", // Evitar desbordamiento
            whiteSpace: "normal", // Permitir que el texto se ajuste
            textOverflow: "ellipsis",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "4rem" }}>{value}</h2>
          <p style={{ margin: "4px 0 0", fontSize: "1rem" }}>
            {key === "percentageCompleted"
              ? "Porcentaje de la carrera aprobada"
              : key === "subjectsPerSemester"
              ? "MATERIAS APROBADAS POR CUATRIMESTRE"
              : key === "expectedGraduation"
              ? "AÑO DE EGRESO ESTIMADO"
              : key === "averageGrade"
              ? "Nota promedio"
              : key === "maxSubjectsSemester"
              ? "Máxima cantidad de materias aprobadas"
              : "Máxima nota obtenida"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default index;
