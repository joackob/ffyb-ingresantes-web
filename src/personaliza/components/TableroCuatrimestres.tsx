import { Cuatrimestre } from "@/src/database/interfaces";
import TarjetaCuatrimestre from "./TarjetaCuatrimestre";
import { Box, Stack } from "@mui/material";

const TableroCuatrimestres = ({
  cuatrimestres,
}: {
  cuatrimestres: Cuatrimestre[];
}) => {
  return (
    <div>
      <Stack direction="row" spacing={1} overflow={"scroll"} >
      {cuatrimestres.map((cuatrimestre, index) => (
        <Box sx={{display: "flex"}}>

        <TarjetaCuatrimestre
          cuatrimestre={cuatrimestre}
          key={cuatrimestre.id}
          index={index}
          />
          </Box>
      ))}
      </Stack>
    </div>
  );
};

export default TableroCuatrimestres;
