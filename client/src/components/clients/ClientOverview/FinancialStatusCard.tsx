import React from 'react';
import { Box, Typography } from '@mui/material';

const FinancialStatusCard: React.FC = () => {
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
        Financial Status
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Typography fontSize={14} color="#808191">
          Total Assets
        </Typography>
        <Typography fontSize={25} color="#11142d" fontWeight={700}>
          $152 M
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <Typography fontSize={14} color="#808191">
          Liabilities
        </Typography>
        <Typography fontSize={25} color="#11142d" fontWeight={700}>
          $13.4 M
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <Typography fontSize={14} color="#808191">
          Revenue
        </Typography>
        <Typography fontSize={25} color="#11142d" fontWeight={700}>
          $14.1 M
        </Typography>
      </Box>
    </Box>
  );
};

export default FinancialStatusCard;
