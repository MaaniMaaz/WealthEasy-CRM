import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const IncomeSourcesCompany = () => {
  const [incomes, setIncomes] = useState([{ incomeType: '', amount: '' }]);

  const handleAddField = () => {
    setIncomes([...incomes, { incomeType: '', amount: '' }]);
  };

  const handleRemoveField = (index) => {
    setIncomes(incomes.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    setIncomes(incomes.map((income, i) => (i === index ? { ...income, [name]: value } : income)));
  };

  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Income Sources
      </Typography>
      {incomes.map((income, index) => (
        <Grid container spacing={2} key={index} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Income Type"
              name="incomeType"
              variant="outlined"
              fullWidth
              margin="normal"
              value={income.incomeType}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Amount"
              name="amount"
              variant="outlined"
              fullWidth
              margin="normal"
              value={income.amount}
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
        Add Income
      </Button>
    </Box>
  );
};

export default IncomeSourcesCompany;
