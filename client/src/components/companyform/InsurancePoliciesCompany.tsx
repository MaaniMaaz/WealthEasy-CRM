import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const InsurancePoliciesCompany = () => {
  const [policies, setPolicies] = useState([{ policyType: '', coverageAmount: '', premium: '', provider: '' }]);

  const handleAddField = () => {
    setPolicies([...policies, { policyType: '', coverageAmount: '', premium: '', provider: '' }]);
  };

  const handleRemoveField = (index) => {
    setPolicies(policies.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    setPolicies(policies.map((policy, i) => (i === index ? { ...policy, [name]: value } : policy)));
  };

  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Insurance Policies
      </Typography>
      {policies.map((policy, index) => (
        <Grid container spacing={2} key={index} alignItems="center">
          <Grid item xs={12} sm={3}>
            <TextField
              label="Policy Type"
              name="policyType"
              variant="outlined"
              fullWidth
              margin="normal"
              value={policy.policyType}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Coverage Amount"
              name="coverageAmount"
              variant="outlined"
              fullWidth
              margin="normal"
              value={policy.coverageAmount}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Premium"
              name="premium"
              variant="outlined"
              fullWidth
              margin="normal"
              value={policy.premium}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Provider"
              name="provider"
              variant="outlined"
              fullWidth
              margin="normal"
              value={policy.provider}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={1}>
            <IconButton onClick={() => handleRemoveField(index)} color="secondary">
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button onClick={handleAddField} startIcon={<AddCircleOutlineIcon />}>
        Add Policy
      </Button>
    </Box>
  );
};

export default InsurancePoliciesCompany;
