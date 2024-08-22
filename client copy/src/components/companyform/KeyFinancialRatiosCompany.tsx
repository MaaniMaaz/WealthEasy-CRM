import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const KeyFinancialRatiosCompany = () => {
  const [ratios, setRatios] = useState([{ ratioType: '', value: '' }]);

  const handleAddField = () => {
    setRatios([...ratios, { ratioType: '', value: '' }]);
  };

  const handleRemoveField = (index) => {
    setRatios(ratios.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    setRatios(ratios.map((ratio, i) => (i === index ? { ...ratio, [name]: value } : ratio)));
  };

  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Key Financial Ratios
      </Typography>
      {ratios.map((ratio, index) => (
        <Grid container spacing={2} key={index} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Ratio Type"
              name="ratioType"
              variant="outlined"
              fullWidth
              margin="normal"
              value={ratio.ratioType}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Value"
              name="value"
              variant="outlined"
              fullWidth
              margin="normal"
              value={ratio.value}
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
        Add Ratio
      </Button>
    </Box>
  );
};

export default KeyFinancialRatiosCompany;
