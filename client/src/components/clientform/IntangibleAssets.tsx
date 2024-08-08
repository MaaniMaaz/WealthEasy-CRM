import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const IntangibleAssets = () => {
  const [intangibleAssets, setIntangibleAssets] = useState([{ type: '', details: '' }]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Intangible Assets"
        state={intangibleAssets}
        setState={setIntangibleAssets}
        fields={[
          { label: 'Asset Type', name: 'type', width: 6 },
          { label: 'Details', name: 'details', width: 6 },
        ]}
      />
    </Box>
  );
};

export default IntangibleAssets;
