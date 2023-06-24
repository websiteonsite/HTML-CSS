import React from 'react'
import { Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { DesktopCategories } from './DesktopCategories';
import { MobileCategories } from './MobileCategories';

const ProductContainer = () => {
  return (
     <Box sx={{ minHeight: "60vh", mr: 2, ml: 2, mt: -23 }}>   

            <Grid sx={{ mb: 4}} container spacing={2}> 

            <Grid sx={{display: "flex", flexDirection: {xs: "column", lg: "row"}}} 
            md={6} item>
              
              <Box sx={{width:{xs:'100%', lg:'40%'}}} component='img' src='images/products/f1.png'></Box>
              
              <Box sx={{paddingLeft: "10px", mt: {lg: 20, xs: 2}}}>
                <Typography sx={{fontWeight:"bold"}} variant="h6">
                  Winter Suits 2022
                </Typography>
                <Typography>
                  lorem ipsum is simple dummy text of the printing
                </Typography>
                <Typography sx={{ fontWeight:"bold", color: "#ff6161"}} variant="h6">
                  $520.00
                </Typography>
                <Button variant="outlined" size="medium">Add to Cart</Button>
              </Box>

            </Grid>

            <Grid sx={{display: "flex", flexDirection: {xs: "column", lg: "row", 
            justifyContent: "center", alignItems: "center"}}}
             md={6} item>

              <Box sx={{width:{xs:'100%', lg:'40%'}}} component='img' src='images/products/f1.png'></Box>

              <Box sx={{paddingLeft: "10px", mt: {lg: 20, xs: 2}}}>
                <Typography sx={{fontWeight:"bold"}} variant="h6">
                  Winter Suits 2022
                </Typography>
                <Typography>
                  lorem ipsum is simple dummy text of the printing
                </Typography>
                <Typography sx={{ fontWeight:"bold", color: "#ff6161"}} variant="h6">
                  $520.00
                </Typography>
                <Button variant="outlined" size="medium">Add to Cart</Button>
              </Box>

            </Grid> 

            </Grid> 

              {/* Featured products */}  
             <Box sx={{display:{xs:'none', lg:'block'}}}>
             <DesktopCategories />
             <Box/>

             {/* Product Listing */}
             <Box sx={{display:{xs:'block', lg:'none'}}}>
             <MobileCategories />
             </Box>
          </Box>

   </Box>
                
  );
};

export default ProductContainer;