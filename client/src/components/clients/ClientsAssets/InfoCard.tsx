import React from 'react';
import { Box, Typography } from '@mui/material';

interface InfoCardProps {
  title: string;
  data: { label: string; value: string }[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, data }) => {
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
        {title}
      </Typography>
      {data.map((item, index) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: index === 0 ? 2 : 1 }} key={index}>
          <Typography fontSize={14} color="#808191">
            {item.label}
          </Typography>
          <Typography fontSize={25} color="#11142d" fontWeight={700}>
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default InfoCard;
