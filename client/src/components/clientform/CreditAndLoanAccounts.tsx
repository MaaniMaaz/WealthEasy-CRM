import React, { useState } from 'react';
import { Box } from '@mui/material';
import DynamicFieldGroup from './DynamicFieldGroup';

const CreditAndLoanAccounts = () => {
  const [creditAndLoanAccounts, setCreditAndLoanAccounts] = useState([
    { type: 'Mortgage', amount: '', interestRate: '', term: '', lender: '' },
    { type: 'Loan', amount: '', interestRate: '', term: '', lender: '' },
    { type: 'Credit Card Debt', amount: '', interestRate: '', lender: '' },
    { type: 'Other', amount: '', interestRate: '', term: '', lender: '' }
  ]);

  return (
    <Box>
      <DynamicFieldGroup
        label="Total Liabilities"
        state={creditAndLoanAccounts}
        setState={setCreditAndLoanAccounts}
        fields={[
          { label: 'Type', name: 'type', width: 3 },
          { label: 'Amount', name: 'amount', width: 3 },
          { label: 'Interest Rate', name: 'interestRate', width: 2 },
          { label: 'Term', name: 'term', width: 2 },
          { label: 'Lender', name: 'lender', width: 2 },
        ]}
      />
    </Box>
  );
};

export default CreditAndLoanAccounts;
