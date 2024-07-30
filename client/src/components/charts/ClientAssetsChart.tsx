import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Typography, Stack } from '@mui/material';

interface ClientAssetsChartProps {
  title: string;
  series: number[];
  labels: string[];
  colors: string[];
}

const ClientAssetsChart: React.FC<ClientAssetsChartProps> = ({ title, series, labels, colors }) => {
  const options = {
    chart: {
      type: 'pie',
      toolbar: { show: false },
    },
    colors: colors,
    labels: labels,
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `$${val} M`,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        colors: ['#11142d'],
      },
    },
    legend: {
      show: false,
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
        minWidth: '250px',
        border: '1px solid #F2F2F2',
      }}
    >
      <Typography fontSize={18} color="#808191" fontWeight={600}>
        {title}
      </Typography>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width="100%"
        height="200px"
      />
      <Box mt={2} width="100%">
        {labels.map((label, index) => (
          <Stack direction="row" alignItems="center" gap={1} key={label}>
            <Box width={12} height={12} bgcolor={colors[index]} />
            <Typography fontSize={14} color="#808191">{label}</Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default ClientAssetsChart;
