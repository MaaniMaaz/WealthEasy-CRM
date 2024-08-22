import React, { useState } from 'react';
import { Typography, Box, Button, TextField, Grid } from '@mui/material';
import CompanyDetails from '../components/companyform/CompanyDetails';
import FinancialStatus from '../components/companyform/FinancialStatus';
import BankAccountDetails from '../components/companyform/BankAccountDetailsCompany';
import TotalLiabilities from '../components/companyform/TotalLiabilitiesCompany';
import AssetsAllocation from '../components/companyform/AssetsAllocationCompany';
import KeyFinancialRatios from '../components/companyform/KeyFinancialRatiosCompany';
import AnnualExpenses from '../components/companyform/AnnualExpensesCompany';
import InsurancePolicies from '../components/companyform/InsurancePoliciesCompany';
import PensionAndAnnuities from '../components/companyform/PensionAndAnnuitiesCompany';
import AlternativeInvestments from '../components/companyform/AlternativeInvestmentsCompany';
import IncomeSources from '../components/companyform/IncomeSourcesCompany';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    companyDetails: {},
    financialStatus: {},
    bankAccounts: [],
    totalLiabilities: [],
    assetsAllocation: [],
    keyFinancialRatios: [],
    annualExpenses: [],
    insurancePolicies: [],
    pensionAndAnnuities: [],
    alternativeInvestments: [],
    incomeSources: [],
  });

  const handleFieldChange = (section, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updatedSection = [...prevFormData[section]];
      updatedSection[index] = { ...updatedSection[index], [name]: value };
      return { ...prevFormData, [section]: updatedSection };
    });
  };

  const handleAddField = (section, newField) => {
    setFormData((prevFormData) => {
      const updatedSection = [...prevFormData[section], newField];
      return { ...prevFormData, [section]: updatedSection };
    });
  };

  const handleRemoveField = (section, index) => {
    setFormData((prevFormData) => {
      const updatedSection = prevFormData[section].filter((_, i) => i !== index);
      return { ...prevFormData, [section]: updatedSection };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add actual submission logic here (e.g., sending data to an API)
  };

  return (
    <Box sx={{ paddingLeft: { xs: 5, md: 10 }, paddingTop: 5 }}>
      <Typography fontSize={30} fontWeight={700} color="#11142d" mb={3}>
        Company Form
      </Typography>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <CompanyDetails
          data={formData.companyDetails}
          onChange={(e) => setFormData({ ...formData, companyDetails: { ...formData.companyDetails, [e.target.name]: e.target.value } })}
        />
        <FinancialStatus
          data={formData.financialStatus}
          onChange={(e) => setFormData({ ...formData, financialStatus: { ...formData.financialStatus, [e.target.name]: e.target.value } })}
        />
        <BankAccountDetails
          data={formData.bankAccounts}
          onChange={(index, e) => handleFieldChange('bankAccounts', index, e)}
          onAdd={() => handleAddField('bankAccounts', { bankName: '', iban: '', accountType: '', accountNumber: '', amount: '' })}
          onRemove={(index) => handleRemoveField('bankAccounts', index)}
        />
        <TotalLiabilities
          data={formData.totalLiabilities}
          onChange={(index, e) => handleFieldChange('totalLiabilities', index, e)}
          onAdd={() => handleAddField('totalLiabilities', { liabilityType: '', amount: '' })}
          onRemove={(index) => handleRemoveField('totalLiabilities', index)}
        />
        <AssetsAllocation
          data={formData.assetsAllocation}
          onChange={(index, e) => handleFieldChange('assetsAllocation', index, e)}
          onAdd={() => handleAddField('assetsAllocation', { assetType: '', amount: '' })}
          onRemove={(index) => handleRemoveField('assetsAllocation', index)}
        />
        <KeyFinancialRatios
          data={formData.keyFinancialRatios}
          onChange={(index, e) => handleFieldChange('keyFinancialRatios', index, e)}
          onAdd={() => handleAddField('keyFinancialRatios', { ratioType: '', value: '' })}
          onRemove={(index) => handleRemoveField('keyFinancialRatios', index)}
        />
        <AnnualExpenses
          data={formData.annualExpenses}
          onChange={(index, e) => handleFieldChange('annualExpenses', index, e)}
          onAdd={() => handleAddField('annualExpenses', { expenseType: '', amount: '' })}
          onRemove={(index) => handleRemoveField('annualExpenses', index)}
        />
        <InsurancePolicies
          data={formData.insurancePolicies}
          onChange={(index, e) => handleFieldChange('insurancePolicies', index, e)}
          onAdd={() => handleAddField('insurancePolicies', { policyType: '', coverageAmount: '', premium: '', provider: '' })}
          onRemove={(index) => handleRemoveField('insurancePolicies', index)}
        />
        <PensionAndAnnuities
          data={formData.pensionAndAnnuities}
          onChange={(index, e) => handleFieldChange('pensionAndAnnuities', index, e)}
          onAdd={() => handleAddField('pensionAndAnnuities', { planType: '', expectedBenefits: '', retirementAge: '', contributionHistory: '' })}
          onRemove={(index) => handleRemoveField('pensionAndAnnuities', index)}
        />
        <AlternativeInvestments
          data={formData.alternativeInvestments}
          onChange={(index, e) => handleFieldChange('alternativeInvestments', index, e)}
          onAdd={() => handleAddField('alternativeInvestments', { investmentType: '', amount: '', currentValue: '' })}
          onRemove={(index) => handleRemoveField('alternativeInvestments', index)}
        />
        <IncomeSources
          data={formData.incomeSources}
          onChange={(index, e) => handleFieldChange('incomeSources', index, e)}
          onAdd={() => handleAddField('incomeSources', { incomeType: '', amount: '' })}
          onRemove={(index) => handleRemoveField('incomeSources', index)}
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

export default CompanyForm;
