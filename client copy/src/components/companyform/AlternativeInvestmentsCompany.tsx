import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const AlternativeInvestmentsCompany = () => {
  const [investments, setInvestments] = useState([{ investmentType: '', amount: '', currentValue: '' }]);

  const handleAddField = () => {
    setInvestments([...investments, { investmentType: '', amount: '', currentValue: '' }]);
  };

  const handleRemoveField = (index) => {
    setInvestments(investments.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    setInvestments(investments.map((investment, i) => (i === index ? { ...investment, [name]: value } : investment)));
  };

  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Alternative Investments
      </Typography>
      {investments.map((investment, index) => (
        <Grid container spacing={2} key={index} alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              label="Investment Type"
              name="investmentType"
              variant="outlined"
              fullWidth
              margin="normal"
              value={investment.investmentType}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Amount"
              name="amount"
              variant="outlined"
              fullWidth
              margin="normal"
              value={investment.amount}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Current Value"
              name="currentValue"
              variant="outlined"
              fullWidth
              margin="normal"
              value={investment.currentValue}
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
        Add Investment
      </Button>
    </Box>
  );
};

export default AlternativeInvestmentsCompany;
