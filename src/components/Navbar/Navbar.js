import React, { useState } from 'react'
import { AppBar, IconButton, Toolbar, Typography,Button, Badge,Menu,MenuItem  } from '@mui/material'
//import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box } from '@mui/system';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Navbar = () => {
  
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
  };

  const handleClose = () =>{
    setAnchorEl(null);
  }
  return (
    <Box elevation={0} sx={{ backgroundColor:"#FAC213", marginBottom:"10px"}}>
        <Toolbar>
          <Box sx ={{ display:"flex", justifyContent:"space-between",
           width:'100%',alignItems:"center",padding:"10px 0px" }} component="div">
          

        {/* logo */}
          <Box>
          <IconButton>
              <ShoppingBagIcon sx={{fontSize:'2.4rem'}}/>
          </IconButton>
          </Box>

        {/* menu Button links */}

         <Box sx={{ display:"flex"}}>
           <Typography sx={{ marginRight:"20px", cursor:"pointer", color:'#616161'}}>
           Home
           </Typography>
           <Typography sx={{ marginRight:"20px", cursor:"pointer", color:'#616161'}}>
            Brand
           </Typography>

          <Typography sx={{ marginRight:"20px", cursor:"pointer", color:'#616161'}}
           aria-controls='basic-menu'
           aria-hashpopup="true"
           aria-expanded={openMenu ? "true" : undefined}
           onClick={handleClick}  >
            Categories
          </Typography>

          {/* Dropdown Items */}
          <Menu id="basic-menu"
           anchorEl={anchorEl}
           open={openMenu}
           onClose={handleClose}>

             <MenuItem>Men</MenuItem>
             <MenuItem>Women</MenuItem>
             <MenuItem>Phones</MenuItem>
             <MenuItem>Accessories</MenuItem>
             <MenuItem onClick={handleClose}>Others</MenuItem>
             
           </Menu>


           <Typography sx={{ marginRight:"20px", cursor:"pointer", color:'#616161'}}>Men</Typography>
           <Typography sx={{ marginRight:"20px", cursor:"pointer", color:'#616161'}}>Women</Typography>
           <Typography sx={{ marginRight:"20px", cursor:"pointer", color:'#616161'}}>FAQ</Typography>         
         </Box>

        {/* Button links */}

         <Box sx={{ display:"flex", justifyContent:"center" }}>
         <Button sx={{ color:"#fffff"}} disableElevation variant="contained">account</Button>

         <Badge badgeContent={3} color="secondary">
           <ShoppingBasketIcon color="action" />
          </Badge>     
         
         </Box>
          </Box>
        </Toolbar>      
    </Box>
  );
};

export default Navbar