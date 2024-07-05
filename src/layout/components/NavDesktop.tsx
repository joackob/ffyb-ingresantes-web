import {
  AppBar,
  Breadcrumbs,
  Container,
  Link,
  Stack,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import MenuDesplegable from "@/src/menu-desplegable";
import links from "../links";

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
        <Box>
        </Box>
        <Stack
          
          alignItems="center"
          justifyContent="space-around"
          direction="row"
          
          color={"#3728b7"}
          //borderBottom={"8"}
          sx={{
            height: 124
          }}
        >
        <AppBar position="static"
          sx={{
            height :92,
            backgroundColor : "transparent",
            paddingTop: 1.6,
            paddingBottom: 1.6,
            borderSpacing: 5,
            borderBottom: "8px solid #011344",
            wordBreak: "break-word"
          }}
          >
         {/*<Breadcrumbs separator={" "}>
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
          <MenuDesplegable /> */}
          <Breadcrumbs separator={" "}>
            {links.map((item, index) => (
              <Stack
                key={index}
                spacing={1}
                alignItems="center"
                direction="row"
              >
                <Link
                  href={item.url}
                  display={"flex"}
                  justifyContent={"space-between"}
                  color={"#123546"}
                  border={"none"}
                  borderRadius={"10px"}
                  
                  padding={"10px 20px"}
                  underline="none"
                  fontWeight={"bold"}
                >
                  <Typography marginLeft={"10px"} variant="inherit">
                    {item.label}
                  </Typography>
                </Link>
              </Stack>
            ))}
          </Breadcrumbs>
          </AppBar>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavDesktop;
