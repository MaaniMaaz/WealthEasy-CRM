import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const AnnualExpensesCompany = () => {
  const [expenses, setExpenses] = useState([{ expenseType: '', amount: '' }]);

  const handleAddField = () => {
    setExpenses([...expenses, { expenseType: '', amount: '' }]);
  };

  const handleRemoveField = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    setExpenses(expenses.map((expense, i) => (i === index ? { ...expense, [name]: value } : expense)));
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
              label="Expense Type"
              name="expenseType"
              variant="outlined"
              fullWidth
              margin="normal"
              value={expense.expenseType}
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

export default AnnualExpensesCompany;
