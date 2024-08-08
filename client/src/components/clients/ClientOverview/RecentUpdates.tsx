// src/components/home/RecentUpdates.tsx

import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const dummyData = [
  {
    id: 1,
    clientName: 'John Doe',
    date: '2023-12-01',
    discussion: 'Discussed investment opportunities and risk management strategies.',
  },
  {
    id: 2,
    clientName: 'Jane Smith',
    date: '2023-11-29',
    discussion: 'Reviewed portfolio performance and adjusted asset allocation.',
  },
  {
    id: 3,
    clientName: 'Sam Wilson',
    date: '2023-11-28',
    discussion: 'Explored options for tax-efficient investments.',
  },
  {
    id: 4,
    clientName: 'Lisa Johnson',
    date: '2023-11-25',
    discussion: 'Discussed retirement planning and long-term goals.',
  },
  {
    id: 5,
    clientName: 'Michael Brown',
    date: '2023-11-22',
    discussion: 'Reviewed insurance coverage and policy updates.',
  },
];

const RecentUpdates: React.FC = () => {
  const data = dummyData; // Use dummy data for now
  const isLoading = false; // No loading state needed for dummy data

  return (
    <Box>
   
      {data.map((update) => (
        <Paper key={update.id} elevation={2} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography fontWeight={600}>{update.clientName}</Typography>
          <Typography variant="body2" color="textSecondary">
            {new Date(update.date).toLocaleDateString()}
          </Typography>
          <Typography>{update.discussion}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default RecentUpdates;
