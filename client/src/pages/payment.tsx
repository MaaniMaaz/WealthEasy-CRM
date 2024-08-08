import React from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Payment {
  date: string;
  amount: string;
  method: string;
  description: string;
}

const Payment: React.FC = () => {
  const payments: Payment[] = [
    { date: '2024-07-10', amount: '$100', method: 'Credit Card', description: 'Monthly Subscription' },
    { date: '2024-06-10', amount: '$100', method: 'Credit Card', description: 'Monthly Subscription' },
    { date: '2024-05-10', amount: '$100', method: 'Credit Card', description: 'Monthly Subscription' },
    { date: '2024-04-10', amount: '$100', method: 'Credit Card', description: 'Monthly Subscription' },
    { date: '2024-03-10', amount: '$100', method: 'Credit Card', description: 'Monthly Subscription' },
  ];

  return (
    <Box sx={{ padding: 5 }}>
      <Typography fontSize={30} fontWeight={700} color="#11142d" mb={3}>
        Payment History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment, index) => (
              <TableRow key={index}>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>{payment.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Payment;
