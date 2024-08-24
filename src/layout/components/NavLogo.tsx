import { Stack, Typography } from "@mui/material";

const NavLogo = () => {
  return (
    <Stack alignItems={"center"} flexWrap={"wrap"} direction={"row"}>
      <Typography
        variant={"h1"}
        fontSize={{
          xs: "24px",
          sm: "28px",
          md: "36px",
          lg: "36px",
          xl: "36px",
        }}
        fontWeight={"700"}
        letterSpacing={"-4%"}
        color={"black"}
        textTransform={"uppercase"}
      >
        .uba
      </Typography>
      <Typography
        variant={"h1"}
        fontWeight={"400"}
        fontSize={{
          xs: "24px",
          sm: "28px",
          md: "36px",
          lg: "36px",
          xl: "36px",
        }}
        letterSpacing={"-4%"}
        color={"#007AC6"}
        textTransform={"uppercase"}
      >
        farmacia y bíoquimica
      </Typography>
    </Stack>
  );
};

export default NavLogo;
