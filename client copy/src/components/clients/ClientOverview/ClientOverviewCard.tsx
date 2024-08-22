import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface ClientOverviewCardProps {
  logo: string;
  name: string;
  address: string;
  taxId: string;
  lastContact: string;
}

const ClientOverviewCard: React.FC<ClientOverviewCardProps> = ({ logo, name, address, taxId, lastContact }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#f8fafc',
        padding: 4,
        borderRadius: 2,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '1280px',
        height: '220px',
        margin: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <img src={logo} alt={name} style={{ borderRadius: '50%', width: '120px', height: '120px', marginTop: '10px' }} />
        <Box sx={{ marginLeft: 2 }}>
          <Typography variant="h6" sx={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: '#808191', fontSize: 18, maxWidth: '400px', whiteSpace: 'pre-wrap' }}>
            {address}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', height: '100%', justifyContent: 'start' }}>
      <IconButton aria-label="edit" size="small" sx={{ ml: 1 }}>
            <EditIcon fontSize="small" />
          </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
       
          <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: 18,  }}>
            Last Contact
          </Typography>
         
        </Box>
        <Typography variant="body2" sx={{ color: '#808191', fontSize: 18, mb: 2 }}>
          {lastContact}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: 18 }}>
          Tax Identification Number
        </Typography>
        <Typography variant="body2" sx={{ color: '#808191', fontSize: 18 }}>
          Corporate Tax ID: {taxId}
        </Typography>
      </Box>
    </Box>
  );
};

export default ClientOverviewCard;
