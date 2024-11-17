const index = () => {
  const studentData = {
    percentageCompleted: "80%",
    subjectsPerSemester: "Último cuatrimestre: 5 materias",
    expectedGraduation: "2025",
    averageGrade: "8.7",
    maxSubjectsSemester: "6 materias",
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
      <h1 style={{ textAlign: "center", color: "#007bff" }}></h1>
      <div
        style={{
          width: "56%", // Ancho de cada indicador (ajústalo según tus necesidades)
          margin: "32px", // espacio alrededor del contenedor
          padding: "32px", // espacio dentro del contenedor
          borderLeft: "5px solid #007bff",
          backgroundColor: "#e9ecef",
          borderRadius: "5px",
        }}
      >
        <h2>Porcentaje de la carrera aprobada</h2>
        <p>{studentData.percentageCompleted}</p>
      </div>

      <div
        style={{
          margin: "32px",
          padding: "32px",
          borderLeft: "5px solid #007bff",
          backgroundColor: "#e9ecef",
          borderRadius: "5px",
        }}
      >
        <h2>Cantidad de materias aprobadas por cuatrimestre</h2>
        <p>{studentData.subjectsPerSemester}</p>
      </div>

      <div
        style={{
          margin: "32px",
          padding: "32px",
          borderLeft: "5px solid #007bff",
          backgroundColor: "#e9ecef",
          borderRadius: "5px",
        }}
      >
        <h2>Posible año de egreso</h2>
        <p>{studentData.expectedGraduation}</p>
      </div>

      <div
        style={{
          margin: "32px",
          padding: "32px",
          borderLeft: "5px solid #007bff",
          backgroundColor: "#e9ecef",
          borderRadius: "5px",
        }}
      >
        <h2>Nota promedio</h2>
        <p>{studentData.averageGrade}</p>
      </div>

      <div
        style={{
          margin: "32px",
          padding: "32px",
          borderLeft: "5px solid #007bff",
          backgroundColor: "#e9ecef",
          borderRadius: "5px",
        }}
      >
        <h2>Máxima cantidad de materias aprobadas en un cuatrimestre</h2>
        <p>{studentData.maxSubjectsSemester}</p>
      </div>

      <div
        style={{
          margin: "32px",
          padding: "23px",
          borderLeft: "5px solid #007bff",
          backgroundColor: "#e9ecef",
          borderRadius: "5px",
        }}
      >
        <h2>Máxima nota obtenida</h2>
        <p>{studentData.highestGrade}</p>
      </div>
    </div>
  );
};

export default index;
