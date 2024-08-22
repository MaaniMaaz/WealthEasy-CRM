import React from 'react';
import ClientNameCard from './ClientPersonalInfo/ClientNameCard';
import PrimaryContactCard from './ClientOverview/PrimaryContactCard';
import HeadQuarterAddressCard from './ClientOverview/HeadQuarterAddressCard';
import FinancialStatusCard from './ClientOverview/FinancialStatusCard';
import { Box } from '@mui/material';

const PersonalInfoContent: React.FC = () => {
  // Hardcoded data for demonstration purposes
  const data = {
    logo: 'https://via.placeholder.com/60',
    name: 'Yala Motors Ltd.',
    bankDetails: [
      { name: 'Swiss Bank', iban: 'GB29NWBK60161331926819', accountType: 'Business Checking' },
      { name: 'National California Bank', iban: 'GB29NWBK60161331926819', accountType: 'Saving Account' },
      { name: 'National Westminster Bank', iban: 'GB29NWBK60161331926819', accountType: 'Fixed Deposit' },
    ],
  };

  return (
    <Box sx={{ padding: 0, paddingTop: 0 }}>
      <ClientNameCard
        logo={data.logo}
        name={data.name}
        bankDetails={data.bankDetails}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <PrimaryContactCard />
        <HeadQuarterAddressCard />
        <FinancialStatusCard />
      </Box>
    </Box>
  );
};

export default PersonalInfoContent;
