import React from 'react';
import { Typography, Box, TextField, Grid } from '@mui/material';

const PrimaryContact = () => {
  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Primary Contact Person
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Full Name" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Job Title" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Email Address" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Phone Number" variant="outlined" fullWidth margin="normal" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrimaryContact;
