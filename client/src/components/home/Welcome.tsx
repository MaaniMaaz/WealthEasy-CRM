// src/components/Welcome.tsx
import React from 'react';
import { Typography, Box, Stack, Paper } from '@mui/material';

const Welcome: React.FC = () => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        padding: '20px',
        borderRadius: 2, 
        border: '1px solid #F2F2F2', 
        boxShadow: '0px 4px 4px rgba(86, 144, 198, 0.11)',
        width: '100%', // Set width to 100% of its parent
        maxWidth: 1280, // Set a maximum width if needed
        backgroundColor: "#fcfcfc",
        height: '250px',

     
    
      
      }}
    >
      <Box>
        <Stack direction="column" spacing={5}>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'black', 
              fontSize: 40, 
              fontWeight: 'bold' 
            }}
          >
            Welcome, Maani Roy!
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#808191', 
              fontSize: 18 
            }}
          >
            Let's get back to business and make the most of your wealth management journey!
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Welcome;
