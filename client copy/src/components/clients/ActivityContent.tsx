import React from 'react';
import { Box } from '@mui/material';
import ClientMainCard from './ClientActivity/ClientMainCard';
import CallLogDetails from './/ClientActivity/CallLogDetails';

const ActivityContent = () => {
  const callLogs = [
    { date: '2024-07-15', time: '10:00 AM', contactPerson: 'John Doe (CTO)', notes: 'Discussed project updates and next steps.' },
    { date: '2024-07-15', time: '10:00 AM', contactPerson: 'John Doe (CTO)', notes: 'Negotiated contract terms.' },
    { date: '2024-07-15', time: '10:00 AM', contactPerson: 'John Doe (CTO)', notes: 'Reviewed quarterly financial report.' },
    { date: '2024-07-15', time: '10:00 AM', contactPerson: 'John Doe (CTO)', notes: 'Discussed project updates and next steps.' },
    { date: '2024-07-15', time: '10:00 AM', contactPerson: 'John Doe (CTO)', notes: 'Negotiated contract terms.' },
    { date: '2024-07-15', time: '10:00 AM', contactPerson: 'John Doe (CTO)', notes: 'Reviewed quarterly financial report.' },
    { date: '2024-07-15', time: '10:00 AM', contactPerson: 'John Doe (CTO)', notes: 'Discussed project updates and next steps.' },
    { date: '2024-07-15', time: '10:00 AM', contactPerson: 'John Doe (CTO)', notes: 'Negotiated contract terms.' },
    { date: '2024-07-15', time: '10:00 AM', contactPerson: 'John Doe (CTO)', notes: 'Reviewed quarterly financial report.' },
    { date: '2024-07-15', time: '10:00 AM', contactPerson: 'John Doe (CTO)', notes: 'Discussed project updates and next steps.' },
    { date: '2024-07-15', time: '10:00 AM', contactPerson: 'John Doe (CTO)', notes: 'Negotiated contract terms.' },
    { date: '2024-07-15', time: '10:00 AM', contactPerson: 'John Doe (CTO)', notes: 'Reviewed quarterly financial report.' },
  ];

  return (
    <Box sx={{ padding: 0, paddingTop: 0, maxWidth: '1280px', margin: 'auto' }}>
      <ClientMainCard
        logo="https://example.com/logo.png"  // Replace with the actual logo URL
        title="Yala Motors Inc."
        subheading="Call Logs Table"
      />
      <CallLogDetails callLogs={callLogs} />
    </Box>
  );
}

export default ActivityContent;
