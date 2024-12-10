import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import Banner from "@/src/components/Banner";

interface StudentData {
  DE_LA_CARRERA_TERMINADA: number;
  MATERIAS_APROBADAS_POR_CUATRIMESTRE: number;
  AÑO_DE_EGRESO_ESTIMADO: number;
  NOTA_PROMEDIO: number;
  MATERIAS_APROBADAS_EN_EL_MEJOR_CUATRIMESTRE: number;
  TU_MEJOR_NOTA: number;
}

const Page = () => {
  // State to store the student data from the API
  const [studentData, setStudentData] = useState<StudentData | null>(null);

  useEffect(() => {
    fetch("/api/estudiante/estadisticas")
      .then((data) => data.json())
      .then((response) => {
        // Assuming `response[0].plan_estudios` is the structure
        setStudentData(response[0].plan_estudios); //muestra solo a 1 estudiante.
      });
  }, []);

  // Loading state while waiting for data
  if (!studentData) {
    return <div>Loading...</div>;
  }

  const studentDataStructure = {
    percentageCompleted: {
      value: `${studentData.DE_LA_CARRERA_TERMINADA}%`,
      customWidth: "240px",
      customHeight: "240px",
    },
    subjectsPerSemester: {
      value: studentData.MATERIAS_APROBADAS_POR_CUATRIMESTRE,
      customWidth: "260px",
      customHeight: "220px",
    },
    expectedGraduation: {
      value: studentData.AÑO_DE_EGRESO_ESTIMADO,
      customWidth: "280px",
      customHeight: "210px",
    },
    averageGrade: {
      value: studentData.NOTA_PROMEDIO,
      customWidth: "200px",
      customHeight: "220px",
    },
    maxSubjectsSemester: {
      value: studentData.MATERIAS_APROBADAS_EN_EL_MEJOR_CUATRIMESTRE,
      customWidth: "400px",
      customHeight: "200px",
    },
    highestGrade: {
      value: studentData.TU_MEJOR_NOTA,
      customWidth: "200px",
      customHeight: "200px",
    },
  };

  return (
    <>
      <Banner titulo={"Tu progreso"} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
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
          width: "320px",
          height: "auto",
          margin: "16px auto",
          padding: "10px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <h1>{/* Title if needed */}</h1>

        {Object.entries(studentDataStructure).map(
          ([key, { value, customWidth, customHeight }]) => (
            <div
              key={key}
              style={{
                margin: "16px 16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: customWidth || "auto",
                height: customHeight || "auto",
                maxWidth: "100%",
                wordWrap: "break-word",
                overflow: "hidden",
                whiteSpace: "normal",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
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
          ),
        )}
      </div>
    </>
  );
};

export default Page;
