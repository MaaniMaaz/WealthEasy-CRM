import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const BankAccountDetailsCompany = () => {
  const [bankAccounts, setBankAccounts] = useState([{ bankName: '', iban: '', accountType: '', balance: '' }]);

  const handleAddField = () => {
    setBankAccounts([...bankAccounts, { bankName: '', iban: '', accountType: '', balance: '' }]);
  };

  const handleRemoveField = (index) => {
    setBankAccounts(bankAccounts.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    setBankAccounts(bankAccounts.map((account, i) => (i === index ? { ...account, [name]: value } : account)));
  };

  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Bank Account Details
      </Typography>
      {bankAccounts.map((account, index) => (
        <Grid container spacing={2} key={index} alignItems="center">
          <Grid item xs={12} sm={3}>
            <TextField
              label="Bank Name"
              name="bankName"
              variant="outlined"
              fullWidth
              margin="normal"
              value={account.bankName}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="IBAN"
              name="iban"
              variant="outlined"
              fullWidth
              margin="normal"
              value={account.iban}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Account Type"
              name="accountType"
              variant="outlined"
              fullWidth
              margin="normal"
              value={account.accountType}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              label="Balance"
              name="balance"
              variant="outlined"
              fullWidth
              margin="normal"
              value={account.balance}
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
        Add Bank Account
      </Button>
    </Box>
  );
};

export default BankAccountDetailsCompany;
