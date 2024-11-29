import { ReactNode } from "react";
import { Container, Stack } from "@mui/material";

const TableroParaCuatrimestres = ({ children }: { children: ReactNode }) => {
  return (
    <Container
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
    </Container>
  );
};

export default TableroParaCuatrimestres;
