import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const BankAccountDetails = () => {
  const [bankAccounts, setBankAccounts] = useState([{ bankName: '', iban: '', accountType: '', accountNumber: '', amount: '' }]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Bank Account Details"
        state={bankAccounts}
        setState={setBankAccounts}
        fields={[
          { label: 'Bank Name', name: 'bankName', width: 3 },
          { label: 'IBAN', name: 'iban', width: 3 },
          { label: 'Account Type', name: 'accountType', width: 2 },
          { label: 'Account Number', name: 'accountNumber', width: 2 },
          { label: 'Amount', name: 'amount', width: 2 },
        ]}
      />
    </Box>
  );
};

export default BankAccountDetails;
