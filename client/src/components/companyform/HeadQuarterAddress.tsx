import React from 'react';
import { Typography, Box, TextField, Grid } from '@mui/material';

const HeadQuarterAddress = () => {
  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Headquarters Address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Street Address" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Postal Code" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Country" variant="outlined" fullWidth margin="normal" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeadQuarterAddress;
