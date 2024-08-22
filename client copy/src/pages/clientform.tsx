import React, { useState } from 'react';
import { Typography, Box, Button, Grid, CircularProgress } from '@mui/material';
import PersonalDetails from '../components/clientform/PersonalDetails';
import ProfessionalDetails from '../components/clientform/ProfessionalDetails';
import FinancialDetails from '../components/clientform/FinancialDetails';
import BankAccountDetails from '../components/clientform/BankAccountDetails';
import ConsolidatedAssets from '../components/clientform/ConsolidatedAssets';
import CreditAndLoanAccounts from '../components/clientform/CreditAndLoanAccounts';
import InsurancePolicies from '../components/clientform/InsurancePolicies';
import PensionAndAnnuities from '../components/clientform/PensionAndAnnuities';
import AlternativeInvestments from '../components/clientform/AlternativeInvestments';
import IncomeSources from '../components/clientform/IncomeSources';
import AnnualExpenses from '../components/clientform/AnnualExpenses';

const ClientForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      personalDetails: {/* Collect data from PersonalDetails component */},
      professionalDetails: {/* Collect data from ProfessionalDetails component */},
      financialDetails: {/* Collect data from FinancialDetails component */},
      bankAccountDetails: {/* Collect data from BankAccountDetails component */},
      consolidatedAssets: {/* Collect data from ConsolidatedAssets component */},
      creditAndLoanAccounts: {/* Collect data from CreditAndLoanAccounts component */},
      insurancePolicies: {/* Collect data from InsurancePolicies component */},
      pensionAndAnnuities: {/* Collect data from PensionAndAnnuities component */},
      alternativeInvestments: {/* Collect data from AlternativeInvestments component */},
      incomeSources: {/* Collect data from IncomeSources component */},
      annualExpenses: {/* Collect data from AnnualExpenses component */}
    };

    try {
      const response = await fetch('https://api.example.com/submitClientForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      // Optionally handle the result here (e.g., show a success message to the user)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally handle the error here (e.g., show an error message to the user)
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ paddingLeft: { xs: 5, md: 10 }, paddingTop: 5 }}>
      <Typography fontSize={30} fontWeight={700} color="#11142d" mb={3}>
        Client Form
      </Typography>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <PersonalDetails />
        <ProfessionalDetails />
        <FinancialDetails />
        <BankAccountDetails />
        <ConsolidatedAssets />
        <CreditAndLoanAccounts />
        <InsurancePolicies />
        <PensionAndAnnuities />
        <AlternativeInvestments />
        <IncomeSources />
        <AnnualExpenses />
        <Box mt={4}>
          <Button type="submit" variant="contained" color="primary" size="large" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientForm;
