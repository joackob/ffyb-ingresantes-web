import * as React from 'react';
import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Cartas = ({gridKeys}:{gridKeys:string[]}) => {
    return (
        <>
            <Box gridArea={gridKeys[0]} display={{xs:"none",md:"block"}} margin={"5px"}>
                <Card sx={{maxWidth: 200 ,border:"2px solid black",backgroundColor:"#3728b7",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" component="div" color="white" sx={{padding:"10px"}}>
                            ¿Tenés problemas económicos?
                        </Typography>
                        <Typography variant="subtitle1" color="white" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box gridArea={gridKeys[1]} display={{xs:"none",md:"block"}} margin={"5px"}>
                <Card sx={{maxWidth: 200 ,border:"2px solid black",backgroundColor:"#3728b7",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" component="div" color="white" sx={{padding:"10px"}}>
                            ¿Tenés problemas económicos?
                        </Typography>
                        <Typography variant="subtitle1" color="white" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box gridArea={gridKeys[2]} display={{xs:"none",md:"block"}} margin={"5px"}>
                <Card sx={{maxWidth: 200 ,border:"2px solid black",backgroundColor:"#3728b7",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" component="div" color="white" sx={{padding:"10px"}}>
                            ¿Tenés problemas económicos?
                        </Typography>
                        <Typography variant="subtitle1" color="white" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box gridArea={gridKeys[3]} display={{xs:"none",md:"block"}} margin={"5px"}>
                <Card sx={{maxWidth: 200 ,border:"2px solid black",backgroundColor:"#3728b7",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" component="div" color="white" sx={{padding:"10px"}}>
                            ¿Tenés problemas económicos?
                        </Typography>
                        <Typography variant="subtitle1" color="white" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box gridArea={gridKeys[4]} display={{xs:"none",md:"block"}} margin={"5px"}>
                <Card sx={{maxWidth: 200 ,border:"2px solid black",backgroundColor:"#3728b7",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" component="div" color="white" sx={{padding:"10px"}}>
                            ¿Tenés problemas económicos?
                        </Typography>
                        <Typography variant="subtitle1" color="white" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box gridArea={gridKeys[5]} display={{xs:"none",md:"block"}} margin={"5px"}>
                <Card sx={{maxWidth: 200 ,border:"2px solid black",backgroundColor:"#3728b7",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" component="div" color="white" sx={{padding:"10px"}}>
                            ¿Tenés problemas económicos?
                        </Typography>
                        <Typography variant="subtitle1" color="white" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box gridArea={gridKeys[6]} display={{xs:"none",md:"block"}} margin={"5px"}>
                <Card sx={{maxWidth: 200 ,border:"2px solid black",backgroundColor:"#3728b7",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" component="div" color="white" sx={{padding:"10px"}}>
                            ¿Tenés problemas económicos?
                        </Typography>
                        <Typography variant="subtitle1" color="white" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box gridArea={gridKeys[7]} display={{xs:"none",md:"block"}} margin={"5px"}>
                <Card sx={{maxWidth: 200 ,border:"2px solid black",backgroundColor:"#3728b7",borderRadius:"20px"}}>
                    <CardContent>
                        <Typography variant="h5" component="div" color="white" sx={{padding:"10px"}}>
                            ¿Tenés problemas económicos?
                        </Typography>
                        <Typography variant="subtitle1" color="white" sx={{textAlign:"center"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}
export default Cartas;