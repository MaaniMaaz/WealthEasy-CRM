import React from 'react';
import { Typography, Box, TextField, Grid, IconButton, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const DynamicFieldGroup = ({ label, state, setState, fields }) => {
  const handleAddField = () => {
    const newField = fields.reduce((obj, field) => ({ ...obj, [field.name]: '' }), {});
    setState(prevFields => [...prevFields, newField]);
  };

  const handleRemoveField = (index) => {
    setState(prevFields => prevFields.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    setState(prevFields => prevFields.map((field, i) => (i === index ? { ...field, [name]: value } : field)));
  };

  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>{label}</Typography>
      {state.map((item, index) => (
        <Grid container spacing={2} key={index} alignItems="center">
          {fields.map((field, fieldIndex) => (
            <Grid item xs={12} sm={field.width} key={fieldIndex}>
              <TextField
                label={field.label}
                name={field.name}
                variant="outlined"
                fullWidth
                margin="normal"
                value={item[field.name]}
                onChange={(e) => handleFieldChange(index, e)}
              />
            </Grid>
          ))}
          <Grid item xs={12} sm={1}>
            <IconButton onClick={() => handleRemoveField(index)} color="secondary">
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button onClick={handleAddField} startIcon={<AddCircleOutlineIcon />}>
        Add {label}
      </Button>
    </Box>
  );
};

export default DynamicFieldGroup;
