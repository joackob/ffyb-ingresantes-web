import { Breadcrumbs, Container, Link, Stack, Typography} from "@mui/material";
import { ReactNode } from "react";

const NavDesktop = ({
  linksLeft,
  linksRight,
}: {
  linksLeft: { label: string; href: string; icon: ReactNode }[];
  linksRight: { label: string; href: string; icon: ReactNode }[];
}) => (
  <Container sx={{ height: "8vh",marginLeft:"12vw",padding:"0px" }}>
    <Stack
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="space-around"
      direction="row"
    >
      <Breadcrumbs separator={" "}>
        <Stack alignItems="center" direction="row" spacing={1}>
          <Link href="/" underline="none" color="inherit" fontWeight="bold">
            <Typography marginRight={"1.5vw"} variant="inherit">Home</Typography>
          </Link>
        </Stack>

        {linksLeft.map((item, index) => (
          <Stack key={index} spacing={1} alignItems="center" direction="row">
            <Link
              href={item.href}
              underline="none"
              color="inherit"
              fontWeight="bold"
            >
              <Typography marginRight={"1.5vw"} variant="inherit">{item.label}</Typography>
            </Link>
          </Stack>
        ))}
      </Breadcrumbs>
      <Breadcrumbs separator={" "}>
        {linksRight.map((item, index) => (
          <Stack border={"solid 2.5px"} color={"#3728b7"} borderRadius={"10px"} borderColor={"#3728b7"} padding={"10px 30px"} marginRight={"-10vw"} key={index} spacing={1} alignItems="center" direction="row">
            {item.icon}
            <Link
              href={item.href}
              underline="none"
              color="inherit"
              fontWeight="bold"
            >
              <Typography variant="inherit">{item.label}</Typography>
            </Link>
          </Stack>
        ))}
      </Breadcrumbs>
    </Stack>
  </Container>
);

export default NavDesktop;
