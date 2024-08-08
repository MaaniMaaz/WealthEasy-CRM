import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const FinancialAssets = () => {
  const [financialAssets, setFinancialAssets] = useState([{ type: '', details: '' }]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Financial Assets"
        state={financialAssets}
        setState={setFinancialAssets}
        fields={[
          { label: 'Asset Type', name: 'type', width: 6 },
          { label: 'Details', name: 'details', width: 6 },
        ]}
      />
    </Box>
  );
};

export default FinancialAssets;
