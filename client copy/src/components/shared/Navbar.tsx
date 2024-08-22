// src/components/Navbar.tsx

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export const Navbar: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="100%"
      padding="20px"
      pl={10} 
      pr={10}
      alignItems="center"
      position="fixed"
      top="0"
      left="0"
      bgcolor="#fff"
      boxShadow="0 1px 2px rgba(0, 0, 0, 0.1)"
      zIndex="1000"
    >
      <Box display="flex" alignItems="center">
       
      <Typography variant="h6" component="div">
  <Box component="span" fontWeight="fontWeightBold" color="#0085FF">
    Wealth
  </Box>
  <Box component="span" fontWeight="fontWeightBold" color="#000">
    Easy
  </Box>
</Typography>
      </Box>
      <Button
  variant="outlined"
  sx={{
    color: 'black', // Text color
    borderColor: 'lightgrey', // Border color
    '&:hover': {
      borderColor: 'lightgrey', // Ensure border color remains the same on hover
      backgroundColor: 'transparent', // Keep the background transparent on hover
    },
  }}
>
  Contact Us
</Button>

    </Box>
  );
};
