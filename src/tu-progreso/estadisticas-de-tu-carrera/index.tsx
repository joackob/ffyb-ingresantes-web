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
        maxWidth: "600px",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center",
                   color: "#007bff" }}></h1>

      {/* Contenedor de cada tarjeta */}
      {Object.entries(studentData).map(([key, value]) => (
        <div
          key={key}
          style={{
            margin: "32px",
            padding: "32px",
            borderLeft: "5px solid #007bff",
            backgroundColor: "#e9ecef",
            borderRadius: "5px",
            display: "flex", // Usamos flex para centrar contenido
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "100%",
            wordWrap: "break-word", // Para que el texto largo se ajuste
            overflow: "hidden", // Oculta cualquier desbordamiento
            whiteSpace: "nowrap", // Evita el salto de línea
            textOverflow: "ellipsis", // Añade "..." si el texto es muy largo
          }}
        >
          <h2 style={{ margin: 0,
                       fontSize: "24px" }}>{value}</h2>
          <p style={{ margin: "8px 0 0",
                      fontSize: "14px" }}>

            {key === "percentageCompleted"
              ? "Porcentaje de la carrera aprobada"
              : key === "subjectsPerSemester"
              ? "MATERIAS APROBADAS POR CUATRIMESTRE"
              : key === "expectedGraduation"
              ? "AÑO DE EGRESO ESTIMADO"
              : key === "averageGrade"
              ? "Nota promedio"
              : key === "maxSubjectsSemester"
              ? "Máxima cantidad de materias aprobadas en un cuatrimestre"
              : "Máxima nota obtenida"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default index;

