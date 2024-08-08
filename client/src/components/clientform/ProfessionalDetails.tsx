import React from 'react';
import { Typography, Box, Grid, TextField } from '@mui/material';

const ProfessionalDetails = () => (
  <Box>
    <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
      Professional Details
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField label="Job Designation" variant="outlined" fullWidth margin="normal" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Company Name" variant="outlined" fullWidth margin="normal" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Company Phone" variant="outlined" fullWidth margin="normal" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Company Email" variant="outlined" fullWidth margin="normal" />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Company Address" variant="outlined" fullWidth margin="normal" />
      </Grid>
    </Grid>
  </Box>
);

export default ProfessionalDetails;
