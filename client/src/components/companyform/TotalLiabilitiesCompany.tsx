import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const TotalLiabilitiesCompany = () => {
  const [liabilities, setLiabilities] = useState([{ liabilityType: '', amount: '', interestRate: '', dueDate: '' }]);

  const handleAddField = () => {
    setLiabilities([...liabilities, { liabilityType: '', amount: '', interestRate: '', dueDate: '' }]);
  };

  const handleRemoveField = (index) => {
    setLiabilities(liabilities.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    setLiabilities(liabilities.map((liability, i) => (i === index ? { ...liability, [name]: value } : liability)));
  };

  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Total Liabilities
      </Typography>
      {liabilities.map((liability, index) => (
        <Grid container spacing={2} key={index} alignItems="center">
          <Grid item xs={12} sm={3}>
            <TextField
              label="Liability Type"
              name="liabilityType"
              variant="outlined"
              fullWidth
              margin="normal"
              value={liability.liabilityType}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Amount"
              name="amount"
              variant="outlined"
              fullWidth
              margin="normal"
              value={liability.amount}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Interest Rate"
              name="interestRate"
              variant="outlined"
              fullWidth
              margin="normal"
              value={liability.interestRate}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Due Date"
              name="dueDate"
              variant="outlined"
              fullWidth
              margin="normal"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={liability.dueDate}
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
        Add Liability
      </Button>
    </Box>
  );
};

export default TotalLiabilitiesCompany;
