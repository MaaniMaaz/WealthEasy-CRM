import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const AnnualExpenses = () => {
  const [expenses, setExpenses] = useState([{ name: 'Living Expense', amount: '' }, { name: 'Investments', amount: '' }, { name: 'Others', amount: '' }]);

  const handleAddField = () => {
    setExpenses([...expenses, { name: '', amount: '' }]);
  };

  const handleRemoveField = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    const newExpenses = [...expenses];
    newExpenses[index][name] = value;
    setExpenses(newExpenses);
  };

  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Annual Expenses
      </Typography>
      {expenses.map((expense, index) => (
        <Grid container spacing={2} key={index} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expense Name"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={expense.name}
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
              value={expense.amount}
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
        Add Expense
      </Button>
    </Box>
  );
};

export default AnnualExpenses;
