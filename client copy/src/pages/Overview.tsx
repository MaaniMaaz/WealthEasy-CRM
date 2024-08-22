import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Box } from '@mui/material';

import Welcome from '../components/home/Welcome';
import TotalClients from '../components/charts/TotalClients';
import TotalAssets from '../components/charts/TotalAssets';
import RecentUpdates from '../components/clients/ClientOverview/RecentUpdates';

const Overview: React.FC = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const wealthManagerId = localStorage.getItem('wealthManagerId'); // Assuming the ID is stored in localStorage
  const wealthManagerName = localStorage.getItem('wealthManagerName'); // Retrieve the name from localStorage

  useEffect(() => {
    console.log('Wealth Manager Name:', name); // Debugging statement

    const fetchClients = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/api/clients/${wealthManagerId}`);
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClients();
  }, [wealthManagerId]);

  // Calculate total clients
  const totalClients = clients.length;

  // Calculate total assets under management
  const totalAssets = clients.reduce((sum, client) => {
    return sum + (client.assets?.reduce((assetSum, asset) => assetSum + asset.amount, 0) || 0);
  }, 0);

  // Calculate distribution of corporate vs individual clients
  const corporateClients = clients.filter(client => client.client_type === 'company').length;
  const individualClients = totalClients - corporateClients;

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ paddingLeft: { xs: 5, md: 10 }, paddingTop: 5 }}>
      <Typography fontSize={30} fontWeight={700} color="#11142d">
        Overview
      </Typography>
      <Box mt="20px" display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
        <Box flex={1} minWidth={1000}>
          <Welcome userName={wealthManagerName} welcomeMessage={`Welcome back, ${wealthManagerName}!`} />
          <Box mt="40px" display="flex" flexDirection="row" gap={4} maxWidth={1280} justifyContent={'space-between'}>
            <TotalClients
              title="TOTAL CLIENTS"
              value={totalClients}
              series={[individualClients, corporateClients]}
              colors={['#0085FF', '#94CCFF']}
            />
            <TotalAssets
              title="Total Assets Under Management"
              value={`$${(totalAssets / 1e6).toFixed(2)} M`}  // Assuming the value is in millions
              series={[
                { name: 'Corporate Clients', data: [corporateClients] },
                { name: 'Individual Clients', data: [individualClients] },
              ]}
              colors={['#0085FF', '#94CCFF']}
            />
          </Box>
        </Box>
        <Box mt="0px" width={{ xs: '100%', md: '30%' }}>
          <RecentUpdates data={clients} />
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
