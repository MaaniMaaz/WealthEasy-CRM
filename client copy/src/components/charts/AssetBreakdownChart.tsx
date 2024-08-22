import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Typography } from '@mui/material';

interface AssetBreakdownChartProps {
  title: string;
  series: number[];
  categories: string[];
  colors: string[];
}

const AssetBreakdownChart: React.FC<AssetBreakdownChartProps> = ({ title, series, categories, colors }) => {
  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    colors: colors,
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      title: {
        text: 'Amount (in M)',
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$${val} M`,
      },
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#f8fafc',
        padding: 3,
        borderRadius: '10px',
        boxShadow: '0px 4px 4px rgba(86, 144, 198, 0.11)',
        minWidth: '300px',
        border: '1px solid #F2F2F2',
      }}
    >
      <Typography fontSize={18} color="#808191" fontWeight={600} mb={2}>
        {title}
      </Typography>
      <ReactApexChart
        options={options}
        series={[{ data: series }]}
        type="bar"
        width="800px"
        height="200px"
      />
    </Box>
  );
};

export default AssetBreakdownChart;
