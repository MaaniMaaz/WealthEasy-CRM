import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface BankDetail {
  name: string;
  iban: string;
  accountType: string;
}

interface ClientNameCardProps {
  logo: string;
  name: string;
  bankDetails: BankDetail[];
}

const ClientNameCard: React.FC<ClientNameCardProps> = ({ logo, name, bankDetails }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#f8fafc',
        padding: 1,
        borderRadius: 2,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '1280px',
        margin: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt={name} style={{ borderRadius: '50%', width: '60px', height: '60px', marginRight: '20px' }} />
        <Box>
          <Typography variant="h6" sx={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
            Bank Details
          </Typography>
        </Box>
         
      </Box>
      
      <TableContainer component={Paper} sx={{ marginTop: 3, boxShadow: 'none' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>IBAN</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Account Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bankDetails.map((detail, index) => (
              <TableRow key={index}>
                <TableCell>{detail.name}</TableCell>
                <TableCell>{detail.iban}</TableCell>
                <TableCell>{detail.accountType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClientNameCard;
