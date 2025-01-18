import { ReactNode } from "react";
import { Box, Stack } from "@mui/material";

const TableroParaCuatrimestres = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      style={{
        minHeight: "inherit",
        paddingBottom: "16px",
        overflowY: "hidden",
        overflowX: "scroll",
        scrollbarWidth: "none",
      }}
    >
      <Stack direction="row" spacing={"16px"} minHeight={"inherit"}>
        {children}
      </Stack>
    </Box>
  );
};

export default TableroParaCuatrimestres;
