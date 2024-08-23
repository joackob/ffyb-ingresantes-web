import {
  Breadcrumbs,
  Container,
  Link,
  Stack,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import links from "../links";
import NavLogo from "./NavLogo";

const NavDesktop = () => {
  const theme = useTheme();
  return (
    <Box
      display={{
        xs: "none",
        sm: "none",
        md: "block",
        lg: "block",
        xl: "block",
      }}
    >
      <Container sx={{ height: "8vh", padding: "0px" }}>
        <NavLogo />

        <Stack
          alignItems="baseline"
          justifyContent="left"
          direction="row"
          color={"#3728b7"}
          borderBottom={"8px solid #011344"}
          paddingTop={"1px"}
          paddingBottom={"10px"}
          paddingLeft={"none"}
          marginBottom={"1px"}
          marginLeft={"0px"}
          sx={{
            paddingBottom: "none",
            marginBottom: "0px",
          }}
        >
          {/*<AppBar position="static"
          sx={{
            height :92,
            backgroundColor : "transparent",
            paddingTop: 1.6,
            paddingBottom: 0,
            borderSpacing: 5,
            borderBottom: "8px solid #011344",
            wordBreak: "break-word",
            alignItems: "start"
            
          }}
          >
         <Breadcrumbs separator={" "}>
            <Stack alignItems="center" direction="row" spacing={1}>
              <Link
                href="/"
                underline="none"
                color="inherit"
                fontWeight="bold"
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                  "&:active": {
                    color: theme.palette.primary.dark, // Cambia el color cuando se hace clic en el enlace
                  },
                }}
              >
                <Typography marginRight={"1.5vw"} variant="inherit">
                  Home
                </Typography>
              </Link>
            </Stack>
          </Breadcrumbs>
          </AppBar>
          <MenuDesplegable /> */}
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Breadcrumbs separator={" "}>
              {links.map((item, index) => (
                <Box key={index}>
                  <Stack
                    spacing={1}
                    alignItems="center"
                    direction="row"
                    paddingBottom={"10px"}
                  >
                    <Link
                      fontSize={"12px"}
                      lineHeight={"1.2"}
                      href={item.url}
                      display={"flex"}
                      justifyContent={"bottom"}
                      color={"#8b8b8b"}
                      border={"none"}
                      borderRadius={"10px"}
                      alignItems={"baseline"}
                      underline="none"
                      fontWeight={"light"}
                    >
                      <Typography
                        marginLeft={"1px"}
                        textTransform={"uppercase"}
                        variant="inherit"
                        dangerouslySetInnerHTML={{ __html: item.label }}
                      ></Typography>
                    </Link>
                  </Stack>
                </Box>
              ))}
            </Breadcrumbs>
            <Box
              paddingLeft={"8px"}
              paddingRight={"8px"}
              paddingTop={"2px"}
              alignItems={"center"}
              marginBottom={"10px"}
              marginLeft={"20px"}
              sx={{
                backgroundColor: "#818A91",
                borderRadius: "99%",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                style={{ width: "20px", height: "30px" }}
              >
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                  fill="white"
                />
              </svg>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
export default NavDesktop;
