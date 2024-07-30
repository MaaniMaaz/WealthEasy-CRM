import React from 'react';
import { Box, Typography } from '@mui/material';

const HeadQuarterAddressCard: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        padding: 3,
        borderRadius: 2,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
        margin: 2,
      }}
    >
      <Typography fontSize={18} color="#808191" fontWeight={600}>
        Head Quarter Address
      </Typography>
      <Typography fontSize={30} color="#11142d" fontWeight={700} mt={1}>
        Philippines
      </Typography>
      <Typography fontSize={14} color="#808191">
        35 San Antonio, San Francisco del Monte, Quezon City, 1105 Metro Manila, Philippines
      </Typography>
    </Box>
  );
};

export default HeadQuarterAddressCard;
