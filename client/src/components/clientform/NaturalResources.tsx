import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const NaturalResources = () => {
  const [naturalResources, setNaturalResources] = useState([{ type: '', details: '' }]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Natural Resources"
        state={naturalResources}
        setState={setNaturalResources}
        fields={[
          { label: 'Resource Type', name: 'type', width: 6 },
          { label: 'Details', name: 'details', width: 6 },
        ]}
      />
    </Box>
  );
};

export default NaturalResources;
