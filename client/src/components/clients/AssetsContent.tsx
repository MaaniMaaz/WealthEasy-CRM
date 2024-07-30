import React from 'react';
import { Box } from '@mui/material';
import ClientAssetsChart from '../charts/ClientAssetsChart';

const AssetsContent: React.FC = () => {
  const totalAssetsData = {
    title: 'Total Assets',
    series: [834, 335, 38],
    labels: ['Current Assets', 'Non-Current', 'Others'],
    colors: ['#008FFB', '#00E396', '#FEB019'],
  };

  return (
    <Box sx={{ padding: 11, paddingTop: 0 }}>
      <ClientAssetsChart
        title={totalAssetsData.title}
        series={totalAssetsData.series}
        labels={totalAssetsData.labels}
        colors={totalAssetsData.colors}
      />
    </Box>
  );
};

export default AssetsContent;
