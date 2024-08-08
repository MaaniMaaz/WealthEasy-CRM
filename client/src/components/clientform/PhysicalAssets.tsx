import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const PhysicalAssets = () => {
  const [physicalAssets, setPhysicalAssets] = useState([{ type: '', details: '' }]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Physical Assets"
        state={physicalAssets}
        setState={setPhysicalAssets}
        fields={[
          { label: 'Asset Type', name: 'type', width: 6 },
          { label: 'Details', name: 'details', width: 6 },
        ]}
      />
    </Box>
  );
};

export default PhysicalAssets;
