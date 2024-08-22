import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ClientCardProps {
  logo: string;
  id: string; // Add the id property here
  name: string;
  location: string;
  value: string;
  accounts: string;
  lastContact: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ logo, id, name, location, value, accounts, lastContact }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/client/${id}`); // Navigate using the client id instead of name
  };

  // Optional: Format the date for last contact
  const formattedLastContact = new Date(lastContact).toLocaleDateString();

  return (
    <Box
      sx={{
        backgroundColor: '#005BAE',
        borderRadius: '13px',
        padding: 2,
        width: '370px',
        color: 'white',
        position: 'relative',
        boxShadow: '0px 4px 4px rgba(86, 144, 198, 0.11)',
        marginBottom: 3,
      }}
    >
      <Button
        onClick={handleViewMore}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          backgroundColor: 'white',
          color: '#005BAE',
          borderRadius: '8px',
          padding: '2px 8px',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
      >
        View More
      </Button>
      <Box display="flex" justifyContent="center" mb={2}>
        <img src={logo} alt={`${name} logo`} style={{ borderRadius: '50%', width: '60px', height: '60px' }} />
      </Box>
      <Typography variant="h6" fontWeight={700} textAlign="center">
        {name}
      </Typography>
      <Typography variant="subtitle1" textAlign="center" color="rgba(255, 255, 255, 0.8)">
        {location}
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} borderTop="1px solid rgba(255, 255, 255, 0.5)" pt={1}>
        <Box textAlign="center">
          <Typography variant="h6">{value !== 'N/A' ? `$${Number(value).toLocaleString()}` : 'No Data'}</Typography>
          <Typography variant="subtitle2">{accounts !== '0 Accounts' ? accounts : 'No Accounts'}</Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="h6">{formattedLastContact !== 'Invalid Date' ? formattedLastContact : 'N/A'}</Typography>
          <Typography variant="subtitle2">Last Contact</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientCard;
