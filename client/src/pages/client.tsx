import React, { useState } from 'react';
import { Typography, Box, Button, Menu, MenuItem, Divider } from '@mui/material';
import ClientCard from '../components/clients/ClientCards'; // Ensure the path to ClientCard is correct

const Clients = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clients = [
    {
      logo: 'https://via.placeholder.com/60',
      name: 'TATA Ltd.',
      location: 'New York, USA',
      value: '$30.6 Mil',
      accounts: '3 Accounts',
      lastContact: '10th July, 2024',
    },
    {
      logo: 'https://via.placeholder.com/60',
      name: 'ABC Corp.',
      location: 'Los Angeles, USA',
      value: '$20.1 Mil',
      accounts: '5 Accounts',
      lastContact: '5th July, 2024',
    },
    {
      logo: 'https://via.placeholder.com/60',
      name: 'XYZ Inc.',
      location: 'San Francisco, USA',
      value: '$15.3 Mil',
      accounts: '2 Accounts',
      lastContact: '3rd July, 2024',
    },
    {
      logo: 'https://via.placeholder.com/60',
      name: 'DEF Ltd.',
      location: 'Chicago, USA',
      value: '$40.2 Mil',
      accounts: '4 Accounts',
      lastContact: '8th July, 2024',
    },
    {
      logo: 'https://via.placeholder.com/60',
      name: 'GHI Corp.',
      location: 'Houston, USA',
      value: '$22.5 Mil',
      accounts: '3 Accounts',
      lastContact: '6th July, 2024',
    },
    {
      logo: 'https://via.placeholder.com/60',
      name: 'JKL Inc.',
      location: 'Boston, USA',
      value: '$18.7 Mil',
      accounts: '2 Accounts',
      lastContact: '4th July, 2024',
    },
  ];

  return (
    <Box >
      <Box
        sx={{
          paddingLeft: { xs: 5, md: 10 },
          paddingTop: 5 ,
          maxWidth: "1258px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3
        }}
      >
        <Typography fontSize={30} fontWeight={700} color="#11142d">
          Clients
        </Typography>
        <Button
          onClick={handleClick}
          sx={{
            backgroundColor: "#005BAE",
            borderRadius: "8px",
            width: "40px",
            height: "40px",
            minWidth: "40px",
            '&:hover': {
              backgroundColor: "#004494"
            }
          }}
        >
          <Typography fontSize={24} color="#ffffff">
            +
          </Typography>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              borderRadius: "0px 0px 13px 13px",
              boxShadow: "0px 4px 4px rgba(86, 144, 198, 0.11)",
              border: "1px solid #F2F2F2"
            }
          }}
        >
          <MenuItem onClick={handleClose} sx={{ fontSize: 16, fontWeight: 500 }}>Add Client</MenuItem>
          <Divider sx={{ my: 0.5, borderColor: '#F2F2F2' }} />
          <MenuItem onClick={handleClose} sx={{ fontSize: 16, fontWeight: 500 }}>Add Company</MenuItem>
        </Menu>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 2,
          maxWidth: "1280px",
          paddingLeft: { xs: 5, md: 10 },
          paddingTop: "20px",
        
        }}
      >
        {clients.map((client, index) => (
          <ClientCard
            key={index}
            logo={client.logo}
            name={client.name}
            location={client.location}
            value={client.value}
            accounts={client.accounts}
            lastContact={client.lastContact}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Clients;
