import React, { useState } from 'react';
import { Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Client {
  name: string;
  address: string;
  email: string;
  phoneNumber: string;
}

const Accounts: React.FC = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState<Client[]>([
    { name: 'TATA Ltd.', address: 'New York, USA', email: 'contact@tata.com', phoneNumber: '123-456-7890' },
    { name: 'ABC Corp.', address: 'Los Angeles, USA', email: 'info@abc.com', phoneNumber: '098-765-4321' },
    { name: 'XYZ Inc.', address: 'San Francisco, USA', email: 'support@xyz.com', phoneNumber: '111-222-3333' },
    { name: 'DEF Ltd.', address: 'Chicago, USA', email: 'hello@def.com', phoneNumber: '444-555-6666' },
    { name: 'GHI Corp.', address: 'Houston, USA', email: 'contact@ghi.com', phoneNumber: '777-888-9999' },
    { name: 'JKL Inc.', address: 'Boston, USA', email: 'info@jkl.com', phoneNumber: '000-111-2222' },
    // more client data...
  ]);

  const handleEdit = (client: Client) => {
    navigate('/ClientForm', { state: client });
  };

  return (
    <Box sx={{ padding: 5 }}>
      <Typography fontSize={30} fontWeight={700} color="#11142d" mb={3}>
        Client Accounts
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client, index) => (
              <TableRow key={index}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.address}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phoneNumber}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(client)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Accounts;
