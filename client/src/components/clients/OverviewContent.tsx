import React from 'react';
import ClientOverviewCard from './ClientOverview/ClientOverviewCard';
import PrimaryContactCard from './ClientOverview/PrimaryContactCard';
import HeadQuarterAddressCard from './ClientOverview/HeadQuarterAddressCard';
import FinancialStatusCard from './ClientOverview/FinancialStatusCard';
import { Box } from '@mui/material';

const OverviewContent: React.FC = () => {
  // Hardcoded data for demonstration purposes
  const data = {
    logo: 'https://via.placeholder.com/60',
    name: 'Yala Motors Ltd.',
    address: '35 San Antonio, San Francisco del Monte, Quezon City, 1105 Metro Manila, Philippines',
    taxId: '123-456-786',
    lastContact: '24/07/2024',
  };

  return (
    <Box sx={{ padding: 0, paddingTop:0 }}>
      <ClientOverviewCard
        logo={data.logo}
        name={data.name}
        address={data.address}
        taxId={data.taxId}
        lastContact={data.lastContact}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <PrimaryContactCard />
        <HeadQuarterAddressCard />
        <FinancialStatusCard />
      </Box>
    </Box>
  );
};

export default OverviewContent;
