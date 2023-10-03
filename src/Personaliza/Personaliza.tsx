import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { Box, Button, Container, List, ListItem, ListItemIcon, ListItemText, Modal, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";


const Personaliza = ({ subjects }: { subjects: (string | boolean)[][][]; }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = useTheme();
    const md = useMediaQuery("min-width(900px)");

    return (
        <Box>
            <Container>
                <Box justifyItems={"center"} display={"grid"} gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr", }} gridTemplateRows={{ xs: "80px", md: "130px" }} gridTemplateAreas={{ xs: "'title' 'subjects' 'footer' ", md: "'title title' 'subjects subjects'" }} columnGap={{ xs: 0, md: 0, }} height={{ md: "92vh", xs: "93vh" }} >

                    <Box height={"75px"} paddingTop={{ xs: "10px", md: "30px" }} gridArea={"title"} alignSelf={{ xs: "start", md: "start", }} textAlign={{ xs: "center", md: "center", }}>
                        <Typography fontSize={{ xs: "40px", md: "55px" }} fontWeight="bold">Personaliza</Typography>
                    </Box>

                    <Box gridArea={"subjects"} display={"grid"} columnGap={{ md: "100px" }} rowGap={{ xs: "5px", md: "30px" }} justifyItems={"start"} alignContent={{ xs: "end", md: "center" }} gridTemplateColumns={{ md: "1fr 1fr 1fr", xs: "1fr" }} gridTemplateRows="auto" gridAutoColumns={"1fr"} gridAutoRows={"auto"}>
                        {
                            subjects.map(elem => (
                                <List sx={{ width: "100%", display: "flex", flexDirection: "column", paddingBottom: "15px", borderBottom: "solid 1px", borderColor: theme.palette.primary.main }}>
                                    {elem.map((item) => (
                                        <ListItem sx={{ padding: "2px" }}>
                                            <ListItemIcon sx={{ justifyContent: "center" }}>
                                                {item[1] == true ? <RadioButtonChecked sx={{ fontSize: { md: "30px", xs: "20px" } }} /> : ""}
                                                {item[2] == true ? <RadioButtonChecked sx={{ color: theme.palette.primary.main, fontSize: { md: "30px", xs: "20px" } }} /> : ""}
                                                {item[1] == false && item[2] == false ? <RadioButtonUnchecked sx={{ fontSize: { md: "30px", xs: "20px" } }} /> : ""}
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Button onClick={handleOpen} sx={{padding:{xs:"1px",md:"4px"},display:"block",textAlign:"start",minWidth:"0px",lineHeight:"normal",textTransform:"none",color:"black",textDecoration:"none",paddingLeft:{xs:"0px",md:"10px"},fontSize:{xs:"15px",md:"20px"}}}>{item[0]}</Button>
                                            </ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            ))
                        }
                    </Box>




                    <div>
                        <Modal open={open} onClose={handleClose}>
                            <Box>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    modal
                                </Typography>
                            </Box>
                        </Modal>
                    </div>







                    <Box gridArea={"footer"} height={"40px"} width={"100%"}>

                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default Personaliza;