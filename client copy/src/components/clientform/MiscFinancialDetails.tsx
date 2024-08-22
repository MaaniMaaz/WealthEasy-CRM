import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const MiscFinancialDetails = () => {
  const [miscFinancialDetails, setMiscFinancialDetails] = useState([{ type: '', details: '' }]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Miscellaneous Financial Details"
        state={miscFinancialDetails}
        setState={setMiscFinancialDetails}
        fields={[
          { label: 'Detail Type', name: 'type', width: 6 },
          { label: 'Details', name: 'details', width: 6 },
        ]}
      />
    </Box>
  );
};

export default MiscFinancialDetails;
