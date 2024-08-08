import React from 'react';
import { Typography, Box, Grid, TextField } from '@mui/material';

const FinancialDetails = () => (
  <Box>
    <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
      Financial Details
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label="Tax Identification Number" variant="outlined" fullWidth margin="normal" />
      </Grid>
    </Grid>
  </Box>
);

export default FinancialDetails;
