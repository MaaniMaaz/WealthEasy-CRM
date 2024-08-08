import React from 'react';
import { Typography, Box, TextField, Grid } from '@mui/material';

const CompanyDetails = () => {
  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Company Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Company Name" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Tax Identification Number" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Headquarters Address" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Company Website" variant="outlined" fullWidth margin="normal" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyDetails;
