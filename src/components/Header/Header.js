import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const Header = () => {
  return (
    <Box sx={{ minHeight: "80vh", background: "url(images/capmodel.jpg)",
    backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
        <Box component="div" sx={{
            display:"flex", 
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "80vh",
            ml: 3,
            }}></Box>
      <Typography 
      sx={{ fontFamily: "cursive", fontWeight: "bold", color: "#D61C4E" }}
      variant="h3">
          Find your new Favourite
      </Typography>

      <Typography 
      sx={{ fontFamily: "cursive", fontWeight: "bold", color: "#D61C4E" }}
      variant="h3">
          Winter Collection
      </Typography>

      <Typography 
      sx={{ fontFamily: "cursive", fontWeight: "bold", color: "#D61C4E" }}
      variant="h3">
          Find your best Collection at 35 % Discount
      </Typography>

    </Box>
  )
}

export default Header
