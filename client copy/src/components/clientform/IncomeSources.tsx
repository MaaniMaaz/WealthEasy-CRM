import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const IncomeSources = () => {
  const [incomeSources, setIncomeSources] = useState([{ type: 'Salary', amount: '' }, { type: 'Bonuses', amount: '' }, { type: 'Others', amount: '' }]);

  const handleAddField = () => {
    setIncomeSources([...incomeSources, { type: '', amount: '' }]);
  };

  const handleRemoveField = (index) => {
    setIncomeSources(incomeSources.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    const newIncomeSources = incomeSources.map((source, i) => (i === index ? { ...source, [name]: value } : source));
    setIncomeSources(newIncomeSources);
  };

  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Income Sources
      </Typography>
      {incomeSources.map((source, index) => (
        <Grid container spacing={2} key={index} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Income Type"
              name="type"
              variant="outlined"
              fullWidth
              margin="normal"
              value={source.type}
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
              value={source.amount}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <IconButton onClick={() => handleRemoveField(index)} color="secondary">
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button
        onClick={handleAddField}
        startIcon={<AddCircleOutlineIcon />}
      >
        Add Income Source
      </Button>
    </Box>
  );
};

export default IncomeSources;
