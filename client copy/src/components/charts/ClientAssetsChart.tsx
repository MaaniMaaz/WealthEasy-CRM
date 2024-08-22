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
      enabled: false, // Disable data labels on the chart
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
      id="chart"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="left"
      bgcolor="#fcfcfc"
      p={3}
      borderRadius="10px"
      boxShadow="0px 4px 4px rgba(86, 144, 198, 0.11)"
      maxWidth="420px"
      border="1px solid #F2F2F2"
    >
      <Typography fontSize={18} color="#808191" fontWeight={600}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}
        >
          {labels.map((label, index) => (
            <Stack direction="row" alignItems="center" gap={1} key={label}>
              <Box width={10} height={10} bgcolor={colors[index]} borderRadius="50%" />
              <Typography fontSize={14} color="#808191">{label}</Typography>
            </Stack>
          ))}
        </Box>
        <Box
          sx={{
            flex: 2,
            display: 'flex',
            justifyContent: 'flex-end', // Align to the end horizontally
            alignItems: 'center' // Center vertically
          }}
        >
          <ReactApexChart
            options={options}
            series={series}
            type="pie"
            width="100%"
            height="200px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ClientAssetsChart;
