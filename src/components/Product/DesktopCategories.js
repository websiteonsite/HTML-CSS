import React from 'react'
import { Box } from '@mui/material'
import { Grid, Typography } from '@mui/material'


const DesktopCategories = () => {
  return (
    <Grid sx={{ border: "1px solid #e0e0e0", mt: 8, mb: 4}}
    justifyContent="space-between" alignItems="center" container spacing={2}>
        
        <Grid sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
         item md={1}>
            <Box sx={{width: "40px"}} 
            component='img' 
            src='images/categories/babysitter.jpg'></Box>
            <Typography>Baby Sitter</Typography>
        </Grid>

        <Grid sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
         item md={1}>
            <Box sx={{width: "40px"}} 
            component='img' 
            src='images/categories/barley.jpg'></Box>
            <Typography>Barley</Typography>
        </Grid>

        <Grid sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
         item md={1}>
            <Box sx={{width: "40px"}} 
            component='img' 
            src='images/categories/cinema.png'></Box>
            <Typography>Cinema</Typography>
        </Grid>

        <Grid sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
         item md={1}>
            <Box sx={{width: "40px"}} 
            component='img' 
            src='images/categories/concert.png'></Box>
            <Typography>Concert</Typography>
        </Grid>

        <Grid sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
         item md={1}>
            <Box sx={{width: "40px"}} 
            component='img' 
            src='images/categories/fitness.jpg'></Box>
            <Typography>Fitness</Typography>
        </Grid>

        <Grid sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
         item md={1}>
            <Box sx={{width: "40px"}} 
            component='img' 
            src='images/categories/hanger.png'></Box>
            <Typography>Hanger</Typography>
        </Grid>

        <Grid sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
         item md={1}>
            <Box sx={{width: "40px"}} 
            component='img' 
            src='images/categories/nuclear.png'></Box>
            <Typography>Nuclear </Typography>
        </Grid>

        <Grid sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
         item md={1}>
            <Box sx={{width: "40px"}} 
            component='img' 
            src='images/categories/observation.png'></Box>
            <Typography>Observation </Typography>
        </Grid>
        
        <Grid sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
         item md={1}>
            <Box sx={{width: "40px"}} 
            component='img' 
            src='images/categories/pets.png'></Box>
            <Typography>Pet Care</Typography>
        </Grid>
        <Grid sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
         item md={1}>
            <Box sx={{width: "40px"}} 
            component='img' 
            src='images/categories/restro.png'></Box>
            <Typography>Restaurant</Typography>
        </Grid>
        <Grid sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
         item md={1}>
            <Box sx={{width: "40px"}} 
            component='img' 
            src='images/categories/rocket.png'></Box>
            <Typography>Rocket</Typography>
        </Grid>
        <Grid sx={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column",}}
         item md={1}>
            <Box sx={{width: "40px"}} 
            component='img' 
            src='images/categories/ship.png'></Box>
            <Typography>Ship</Typography>
        </Grid>
        
        </Grid>
        
  );
};

export default DesktopCategories;