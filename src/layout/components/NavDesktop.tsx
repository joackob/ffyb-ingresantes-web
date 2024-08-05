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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            paddingTop: "20px",
            paddingBottom: "0px",
            marginBottom: "0px",
          }}
        >
          <Box>
            <Typography
              variant={"h1"}
              fontSize={"36px"}
              fontWeight={"700"}
              lineHeight={"43.88px"}
            >
              .UBA
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={"h1"}
              fontWeight={"400"}
              fontSize={"36px"}
              lineHeight={"42.19px"}
              letterSpacing={"-4%"}
              color={"#007AC6"}
            >
              FARMACIA Y BIOQUIMICA
            </Typography>
          </Box>
        </Box>
        <Stack
          alignItems="baseline"
          justifyContent="left"
          direction="row"
          color={"#3728b7"}
          borderBottom={"8px solid #011344"}
          paddingTop={"10px"}
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
          <Breadcrumbs separator={" "}>
            {links.map((item, index) => (
              <Box
                key={index}
                style={{ width: "125px", wordWrap: "break-word" }}
              >
                <Stack
                  spacing={1}
                  alignItems="center"
                  direction="row"
                  paddingBottom={"5px"}
                >
                  <Link
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
                    <Typography marginLeft={"1px"} variant="inherit">
                      {item.label}
                    </Typography>
                  </Link>
                </Stack>
              </Box>
            ))}
          </Breadcrumbs>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavDesktop;
