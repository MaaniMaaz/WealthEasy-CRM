import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const PensionAndAnnuitiesCompany = () => {
  const [pensions, setPensions] = useState([{ planType: '', expectedBenefits: '', retirementAge: '', contributionHistory: '' }]);

  const handleAddField = () => {
    setPensions([...pensions, { planType: '', expectedBenefits: '', retirementAge: '', contributionHistory: '' }]);
  };

  const handleRemoveField = (index) => {
    setPensions(pensions.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    setPensions(pensions.map((pension, i) => (i === index ? { ...pension, [name]: value } : pension)));
  };

  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Pension and Annuities
      </Typography>
      {pensions.map((pension, index) => (
        <Grid container spacing={2} key={index} alignItems="center">
          <Grid item xs={12} sm={3}>
            <TextField
              label="Plan Type"
              name="planType"
              variant="outlined"
              fullWidth
              margin="normal"
              value={pension.planType}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Expected Benefits"
              name="expectedBenefits"
              variant="outlined"
              fullWidth
              margin="normal"
              value={pension.expectedBenefits}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Retirement Age"
              name="retirementAge"
              variant="outlined"
              fullWidth
              margin="normal"
              value={pension.retirementAge}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Contribution History"
              name="contributionHistory"
              variant="outlined"
              fullWidth
              margin="normal"
              value={pension.contributionHistory}
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
        Add Plan
      </Button>
    </Box>
  );
};

export default PensionAndAnnuitiesCompany;
