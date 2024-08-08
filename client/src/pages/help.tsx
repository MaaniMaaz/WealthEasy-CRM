import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

const Help: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    query: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <Box sx={{ padding: 5 }}>
      <Typography fontSize={30} fontWeight={700} color="#11142d" mb={3}>
        Help
      </Typography>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Phone"
          name="phone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          label="Query"
          name="query"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={formData.query}
          onChange={handleChange}
        />
        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Help;
