import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const LongTermAssets = () => {
  const [longTermAssets, setLongTermAssets] = useState([{ type: '', details: '' }]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Long-term Assets"
        state={longTermAssets}
        setState={setLongTermAssets}
        fields={[
          { label: 'Asset Type', name: 'type', width: 6 },
          { label: 'Details', name: 'details', width: 6 },
        ]}
      />
    </Box>
  );
};

export default LongTermAssets;
