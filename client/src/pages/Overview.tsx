import React from 'react';
import { useList } from "@refinedev/core";
import { Typography, Box } from '@mui/material';

import Welcome from '../components/home/Welcome';
import TotalClients from '../components/charts/TotalClients';
import TotalAssets from '../components/charts/TotalAssets';

const Overview: React.FC = () => {
  const { data, isLoading } = useList({
    resource: "clients",
  });

  return (
    <Box sx={{ paddingLeft: { xs: 5, md: 10 }, paddingTop: 5 }}>
      <Typography fontSize={30} fontWeight={700} color="#11142d">
        Overview
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <Welcome />
      </Box>
      <Box mt="40px" display="flex" flexDirection="row" gap={4} maxWidth={900} justifyContent={'space-between'} >
        <TotalClients
          title="TOTAL CLIENTS"
          value={684}
          series={[75, 25]}
          colors={['#0085FF', '#94CCFF']}
        />
        <TotalAssets
          title="Total Assets Under Management"
          value="$153 M"
          series={[
            { name: 'Corporate Clients', data: [100] },
            { name: 'Individual Clients', data: [53] },
          ]}
          colors={['#0085FF', '#94CCFF']}
        />
      </Box>
    </Box>
  );
};

export default Overview;
