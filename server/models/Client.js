// Import necessary modules
const mongoose = require('mongoose');

// Define your Client schema
const clientSchema = new mongoose.Schema({
  client_type: { type: String, required: true },
  wealth_manager_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  individual_details: {
    full_name: String,
    gender: String,
    dob: Date,
    nationality: String,
    marital_status: String,
    children_count: Number,
    phone_number: String,
    professional_details: {
      job_designation: String,
      company_name: String,
      company_phone: String,
      company_email: String,
      company_address: String,
    },
    financial_details: {
      tax_identification_number: String,
      bank_account: {
        bank_name: String,
        iban: String,
        account_type: String,
        account_number: String,
      },
    },
  },
  company_details: {
    company_name: String,
    tax_identification_number: String,
    headquarters_address: String,
    company_website: String,
    primary_contact_person: {
      name: String,
      occupation: String,
      email: String,
      phone_number: String,
    },
    financial_status: {
      total_assets: Number,
      total_liabilities: Number,
      revenue: Number,
      bank_account: {
        bank_name: String,
        iban: String,
        account_type: String,
        balance: Number,
      },
    },
  },
  assets: [
    {
      asset_type: String,
      category: String,
      details: String,
      amount: Number,
    },
  ],
  liabilities: [
    {
      liability_type: String,
      amount: Number,
      interest_rate: Number,
      term: Number,
      lender: String,
    },
  ],
  insurance_policies: Array,
  income_sources: Array,
  annual_expenses: Array,
  pensions_and_annuities: Array,
  key_financial_ratios: Array,
  alternative_investments: Array,
  interactions: [
    {
      last_contact_date: Date,
      activity_performed: String,
      time: String,
      contact_person: String,
    },
  ],
});

// Create the Client model
const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
