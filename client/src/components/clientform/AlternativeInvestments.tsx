import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const AlternativeInvestments = () => {
  const [alternativeInvestments, setAlternativeInvestments] = useState([{ type: '', details: '' }]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Alternative Investments"
        state={alternativeInvestments}
        setState={setAlternativeInvestments}
        fields={[
          { label: 'Investment Type', name: 'type', width: 6 },
          { label: 'Details', name: 'details', width: 6 },
        ]}
      />
    </Box>
  );
};

export default AlternativeInvestments;
