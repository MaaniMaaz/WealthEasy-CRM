import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const PensionAndAnnuities = () => {
  const [pensionAndAnnuities, setPensionAndAnnuities] = useState([{ type: '', details: '' }]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Pension and Annuities"
        state={pensionAndAnnuities}
        setState={setPensionAndAnnuities}
        fields={[
          { label: 'Type', name: 'type', width: 6 },
          { label: 'Details', name: 'details', width: 6 },
        ]}
      />
    </Box>
  );
};

export default PensionAndAnnuities;
