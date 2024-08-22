import React from 'react';
import { Typography, Box, Grid, TextField, MenuItem } from '@mui/material';

const PersonalDetails = () => (
  <Box>
    <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
      Personal Details
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField label="Full Name" variant="outlined" fullWidth margin="normal" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField select label="Gender" variant="outlined" fullWidth margin="normal">
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="non-binary">Non-binary</MenuItem>
          <MenuItem value="prefer-not-to-say">Prefer not to say</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Date of Birth" variant="outlined" fullWidth margin="normal" type="date" InputLabelProps={{ shrink: true }} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Email Address" variant="outlined" fullWidth margin="normal" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Phone Number" variant="outlined" fullWidth margin="normal" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Nationality" variant="outlined" fullWidth margin="normal" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField select label="Marital Status" variant="outlined" fullWidth margin="normal">
          <MenuItem value="single">Single</MenuItem>
          <MenuItem value="married">Married</MenuItem>
          <MenuItem value="divorced">Divorced</MenuItem>
          <MenuItem value="widowed">Widowed</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Children" variant="outlined" fullWidth margin="normal" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Age" variant="outlined" fullWidth margin="normal" />
      </Grid>
    </Grid>
  </Box>
);

export default PersonalDetails;
