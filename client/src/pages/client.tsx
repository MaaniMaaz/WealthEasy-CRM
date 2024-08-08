import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Menu, MenuItem, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ClientCard from '../components/clients/ClientCards'; // Ensure the path to ClientCard is correct

interface Client {
  logo: string;
  name: string;
  location: string;
  value: string;
  accounts: string;
  lastContact: string;
}

const Clients = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const [filter, setFilter] = useState('oldest');
  const [clients, setClients] = useState<Client[]>([
    { logo: 'https://via.placeholder.com/60', name: 'TATA Ltd.', location: 'New York, USA', value: '$30.6 Mil', accounts: '3 Accounts', lastContact: '2024-07-10' },
    { logo: 'https://via.placeholder.com/60', name: 'ABC Corp.', location: 'Los Angeles, USA', value: '$20.1 Mil', accounts: '5 Accounts', lastContact: '2024-07-05' },
    { logo: 'https://via.placeholder.com/60', name: 'XYZ Inc.', location: 'San Francisco, USA', value: '$15.3 Mil', accounts: '2 Accounts', lastContact: '2024-07-03' },
    { logo: 'https://via.placeholder.com/60', name: 'DEF Ltd.', location: 'Chicago, USA', value: '$40.2 Mil', accounts: '4 Accounts', lastContact: '2024-07-08' },
    { logo: 'https://via.placeholder.com/60', name: 'GHI Corp.', location: 'Houston, USA', value: '$22.5 Mil', accounts: '3 Accounts', lastContact: '2024-07-06' },
    { logo: 'https://via.placeholder.com/60', name: 'JKL Inc.', location: 'Boston, USA', value: '$18.7 Mil', accounts: '2 Accounts', lastContact: '2024-07-04' },
    // more client data...
  ]);

  useEffect(() => {
    sortClients(filter);
  }, [filter]);

  const sortClients = (criteria: string) => {
    const sortedClients = [...clients].sort((a, b) => {
      const dateA = new Date(a.lastContact);
      const dateB = new Date(b.lastContact);

      if (criteria === 'newest') {
        return dateB.getTime() - dateA.getTime();
      } else {
        return dateA.getTime() - dateB.getTime();
      }
    });
    setClients(sortedClients);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleFilterChange = (criteria: string) => {
    setFilter(criteria);
    handleFilterClose();
  };

  const handleAddClient = () => {
    navigate('/ClientForm');
    handleClose();
  };

  const handleAddCompany = () => {
    navigate('/CompanyForm');
    handleClose();
  };

  return (
    <Box>
      <Box
        sx={{
          paddingLeft: { xs: 5, md: 10 },
          paddingTop: 5,
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            onClick={handleFilterClick}
            sx={{
              backgroundColor: "#F0F0F0",
              borderRadius: "8px",
              height: "40px",
              minWidth: "120px",
              marginRight: 2,
              '&:hover': {
                backgroundColor: "#E0E0E0"
              }
            }}
          >
            <Typography fontSize={16} color="#11142d">
              Filter
            </Typography>
          </Button>
          <Menu
            anchorEl={filterAnchorEl}
            open={Boolean(filterAnchorEl)}
            onClose={handleFilterClose}
            PaperProps={{
              sx: {
                borderRadius: "0px 0px 13px 13px",
                boxShadow: "0px 4px 4px rgba(86, 144, 198, 0.11)",
                border: "1px solid #F2F2F2"
              }
            }}
          >
            <MenuItem onClick={() => handleFilterChange('newest')} sx={{ fontSize: 16, fontWeight: 500 }}>Newest</MenuItem>
            <MenuItem onClick={() => handleFilterChange('oldest')} sx={{ fontSize: 16, fontWeight: 500 }}>Oldest</MenuItem>
          </Menu>
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
            <MenuItem onClick={handleAddClient} sx={{ fontSize: 16, fontWeight: 500 }}>Add Client</MenuItem>
            <Divider sx={{ my: 0.5, borderColor: '#F2F2F2' }} />
            <MenuItem onClick={handleAddCompany} sx={{ fontSize: 16, fontWeight: 500 }}>Add Company</MenuItem>
          </Menu>
        </Box>
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
