import { Link, Stack, Typography, Box } from "@mui/material";
import links from "@/src/layout/links";

const NavDesktop = () => {
  return (
    <Stack
      height={"100%"}
      alignItems={"center"}
      direction={"row"}
      spacing={"32px"}
    >
      {links.map((link, index) => (
        <Box key={index}>
          <Stack spacing={1} alignItems="center" direction="row">
            <Link
              fontSize={"12px"}
              lineHeight={"1.2"}
              href={link.url}
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
                dangerouslySetInnerHTML={{ __html: link.label }}
              ></Typography>
            </Link>
          </Stack>
        </Box>
      ))}

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
    </Stack>
  );
};
export default NavDesktop;
