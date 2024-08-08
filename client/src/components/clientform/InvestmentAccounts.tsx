import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const InvestmentAccounts = () => {
  const [investmentAccounts, setInvestmentAccounts] = useState([{ type: '', details: '' }]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Investment Accounts"
        state={investmentAccounts}
        setState={setInvestmentAccounts}
        fields={[
          { label: 'Account Type', name: 'type', width: 6 },
          { label: 'Details', name: 'details', width: 6 },
        ]}
      />
    </Box>
  );
};

export default InvestmentAccounts;
