// src/pages/home.tsx
import React from 'react';
import { useList } from "@refinedev/core";
import { Typography, Box, Stack } from '@mui/material';

import { Welcome } from '../components';

const Overview = () => {
  const { data, isLoading } = useList({
    resource: "clients",
  });

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <Welcome />
      </Box>
    </Box>
  );
};

export default Overview;
