import { Container, Stack, Box } from "@mui/material";
import { ReactNode } from "react";

const NavBarContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display={{
        xs: "none",
        sm: "none",
        md: "block",
        lg: "block",
        xl: "block",
      }}
      minHeight={{
        xs: "0vh",
        sm: "0vh",
        md: "80px",
        lg: "80px",
        xl: "80px",
      }}
      borderBottom={"8px solid #011344"}
    >
      <Container style={{ paddingBottom: "16px", paddingTop: "16px" }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          alignItems={"center"}
        >
          {children}
        </Stack>
      </Container>
    </Box>
  );
};
export default NavBarContainer;
