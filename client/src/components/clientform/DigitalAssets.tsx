import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const DigitalAssets = () => {
  const [digitalAssets, setDigitalAssets] = useState([{ type: '', details: '' }]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Digital Assets"
        state={digitalAssets}
        setState={setDigitalAssets}
        fields={[
          { label: 'Asset Type', name: 'type', width: 6 },
          { label: 'Details', name: 'details', width: 6 },
        ]}
      />
    </Box>
  );
};

export default DigitalAssets;
