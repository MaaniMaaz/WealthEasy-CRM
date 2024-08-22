import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Box, TextField } from '@mui/material';
import ClientCard from '../components/clients/ClientCards';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const wealthManagerId = localStorage.getItem('wealthManagerId'); // Get the wealth manager ID from localStorage

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/api/clients/${wealthManagerId}`);
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, [wealthManagerId]);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredClients = clients.filter(client =>
    (client.individual_details?.full_name?.toLowerCase().includes(searchTerm) ||
    client.company_details?.company_name?.toLowerCase().includes(searchTerm))
  );

  return (
    <Box>
      <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">Clients</Typography>
        <TextField
          variant="outlined"
          placeholder="Search…"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          sx={{ width: '300px' }}
        />
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 2 }}>
        {filteredClients.map((client, index) => (
          <ClientCard
            key={index}
            id={client._id}  // Pass the MongoDB document ID here
            logo={client.individual_details?.company_logo || 'https://via.placeholder.com/60'}
            name={client.individual_details?.full_name || client.company_details?.company_name || 'Unknown'}
            location={client.individual_details?.company_address || client.company_details?.headquarters_address || 'N/A'}
            value={client.assets?.reduce((sum, asset) => sum + asset.amount, 0) || 'N/A'}
            accounts={`${client.liabilities.length} Accounts`}
            lastContact={client.interactions?.[0]?.last_contact_date || 'N/A'}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Clients;
