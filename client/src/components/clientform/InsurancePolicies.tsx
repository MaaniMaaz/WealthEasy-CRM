import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const InsurancePolicies = () => {
  const [insurancePolicies, setInsurancePolicies] = useState([{ type: '', details: '' }]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Insurance Policies"
        state={insurancePolicies}
        setState={setInsurancePolicies}
        fields={[
          { label: 'Policy Type', name: 'type', width: 6 },
          { label: 'Details', name: 'details', width: 6 },
        ]}
      />
    </Box>
  );
};

export default InsurancePolicies;
