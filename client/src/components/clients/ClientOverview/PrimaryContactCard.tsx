import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const PrimaryContactCard: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        padding: 3,
        borderRadius: 2,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        width: '350px',
        margin: 2,
      }}
    >
      <Typography fontSize={18} color="#808191" fontWeight={600}>
        Primary Contact Person
      </Typography>
      <Typography fontSize={30} color="#11142d" fontWeight={700} mt={1}>
        John Doe
      </Typography>
      <Typography fontSize={16} color="#808191" mb={2}>
        Chief Technical Officer
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <PhoneIcon sx={{ color: '#808191', mr: 1 }} />
        <Typography fontSize={14} color="#808191">
          +1 (234) 567 890
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <EmailIcon sx={{ color: '#808191', mr: 1 }} />
        <Typography fontSize={14} color="#808191">
          johndoe@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default PrimaryContactCard;
