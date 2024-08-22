import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Typography, Box, Stack } from '@mui/material';
import { BarChartProps } from '../../interfaces/home';

const TotalAssets: React.FC<BarChartProps> = ({ title, value, series, colors }) => {
  const options = {
    chart: { type: 'bar', stacked: true, toolbar: { show: false } },
    plotOptions: { bar: { horizontal: true, barHeight: '40%' } },
    colors: colors,
    xaxis: { categories: ['Clients'] },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: {
      y: {
        formatter: (val, opts) => {
          const labels = ["Corporate Clients", "Individual Clients"];
          return `${labels[opts.seriesIndex]}: ${val}`;
        },
      },
    },
    legend: { show: false },
    dataLabels: { enabled: false }
  };

  return (
    <Box
      id="chart"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#fcfcfc"
      p={3}
      borderRadius="10px"
      boxShadow="0px 4px 4px rgba(86, 144, 198, 0.11)"
      minWidth="250px"
      border="1px solid #F2F2F2"

    >
      <Stack direction="column" alignItems="flex-start" width="300px">
        <Typography fontSize={18} color="#808191" fontWeight={600}>
          {title}
        </Typography>
        <Typography fontSize={40} color="#11142d" fontWeight={700} mt={1}>
          {value}
        </Typography>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height="100px"
          width="100%"
        />
        <Box mt={-2} width="100%" display="flex" flexDirection="row" alignItems="center" gap={2}>
          <Stack direction="row" alignItems="center" gap={1}>
            <Box width={12} height={12} bgcolor={colors[0]} />
            <Typography fontSize={14} color="#808191">Corporate Clients</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <Box width={12} height={12} bgcolor={colors[1]} />
            <Typography fontSize={14} color="#808191">Individual Clients</Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default TotalAssets;
