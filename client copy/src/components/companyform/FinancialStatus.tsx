import React from 'react';
import { Typography, Box, TextField, Grid } from '@mui/material';

const FinancialStatus = () => {
  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Financial Status
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField label="Total Assets" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Total Liabilities" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Revenue" variant="outlined" fullWidth margin="normal" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinancialStatus;
