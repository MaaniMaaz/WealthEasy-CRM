import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const ConsolidatedAssets = () => {
  const [assets, setAssets] = useState([
    { type: 'Financial Asset', category: 'Cash and Cash Equivalents', details: '', amount: '' },
    { type: 'Physical Asset', category: 'Real Estate', details: '', amount: '' },
    { type: 'Intangible Asset', category: 'Intellectual Property', details: '', amount: '' },
    { type: 'Human Asset', category: 'Human Capital', details: '', amount: '' },
    { type: 'Natural Resource', category: 'Commodities', details: '', amount: '' },
    { type: 'Digital Asset', category: 'Cryptocurrencies', details: '', amount: '' },
    { type: 'Fixed Asset', category: 'Buildings and Infrastructure', details: '', amount: '' },
    { type: 'Current Asset', category: 'Accounts Receivable', details: '', amount: '' },
    { type: 'Long-term Asset', category: 'Long-term Investments', details: '', amount: '' },
  ]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Consolidated Assets"
        state={assets}
        setState={setAssets}
        fields={[
          { label: 'Type', name: 'type', width: 3 },
          { label: 'Category', name: 'category', width: 3 },
          { label: 'Details', name: 'details', width: 4 },
          { label: 'Amount', name: 'amount', width: 2 },
        ]}
      />
    </Box>
  );
};

export default ConsolidatedAssets;
