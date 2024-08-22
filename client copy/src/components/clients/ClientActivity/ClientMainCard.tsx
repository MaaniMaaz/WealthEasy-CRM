import React from 'react';
import { Box, Typography } from '@mui/material';

interface CardProps {
  logo: string;
  title: string;
  subheading: string;
}

const ClientMainCard: React.FC<CardProps> = () => {
  return (
    <Box
     sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#f8fafc',
        padding: 1,
        borderRadius: 2,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '1280px',
        margin: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src="" alt= "" style={{ borderRadius: '50%', width: '60px', height: '60px', marginRight: '20px' }} />
        <Box>
          <Typography variant="h6" sx={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>
            Yalla Motors Inc.
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
            Call Log Details
          </Typography>
        </Box>
         
      </Box>
    </Box>
  );
};

export default ClientMainCard;
