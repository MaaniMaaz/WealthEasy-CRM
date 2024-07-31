import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

interface CallLog {
  date: string;
  time: string;
  contactPerson: string;
  notes: string;
}

interface CallLogDetailsProps {
  callLogs: CallLog[];
}

const CallLogDetails: React.FC<CallLogDetailsProps> = ({ callLogs }) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 3, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Contact Person</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {callLogs.map((log, index) => (
            <TableRow key={index}>
              <TableCell>{log.date}</TableCell>
              <TableCell>{log.time}</TableCell>
              <TableCell>{log.contactPerson}</TableCell>
              <TableCell>{log.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CallLogDetails;
