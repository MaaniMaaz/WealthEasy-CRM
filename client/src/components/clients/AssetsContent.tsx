import React from 'react';
import { Box } from '@mui/material';
import ClientAssetsChart from '../charts/ClientAssetsChart';
import AssetBreakdownChart from '../charts/AssetBreakdownChart';
import InfoCard from '../clients/ClientsAssets/InfoCard';

const AssetsContent: React.FC = () => {
  const totalAssetsData = {
    title: 'Total Assets',
    series: [69.0969, 27.7548, 3.1483],
    labels: ['Current Assets', 'Non-Current', 'Others'],
    colors: ['#005BAE', '#0085FF', '#94CCFF'],
  };

  const assetBreakdownData = {
    title: 'Current Assets Breakdown',
    series: [500, 1000, 750, 500],
    categories: ['Cash Equivalents', 'Accounts Receivable', 'Inventory', 'Others'],
    colors: ['#005BAE'],
  };

  const keyFinancialRatios = {
    title: 'Key Financial Ratios',
    data: [
      { label: 'Assets Turnover Ratio', value: '1.2' },
      { label: 'Return On Assets', value: '7%' },
      { label: 'Current Ratio', value: '2.5' },
    ],
  };

  const totalLiabilities = {
    title: 'Total Liabilities',
    data: [
      { label: 'Shortterm', value: '$10M' },
      { label: 'Long Term', value: '$5M' },
      { label: 'Total', value: '$15M' },
    ],
  };

  const AssetsAllocation = {
    title: 'Total Liabilities',
    data: [
      { label: 'RealEstate', value: '$110M' },
      { label: 'Investments', value: '$15M' },
      { label: 'Crypto', value: '$35M' },
    ],
  };


  return (
    <Box sx={{ padding: 2, paddingTop: 0 }}>
      <Box sx={{ display: 'flex', gap: 3, marginBottom: 4 }}>
        <ClientAssetsChart
          title={totalAssetsData.title}
          series={totalAssetsData.series}
          labels={totalAssetsData.labels}
          colors={totalAssetsData.colors}
        />
        <AssetBreakdownChart
          title={assetBreakdownData.title}
          series={assetBreakdownData.series}
          categories={assetBreakdownData.categories}
          colors={assetBreakdownData.colors}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 3 , width:"1280px", justifyContent: "space-between" }}>
        <InfoCard title={keyFinancialRatios.title} data={keyFinancialRatios.data} />
        <InfoCard title={totalLiabilities.title} data={totalLiabilities.data} />
        <InfoCard title={AssetsAllocation.title} data={AssetsAllocation.data} />
      </Box>
    </Box>
  );
};

export default AssetsContent;
