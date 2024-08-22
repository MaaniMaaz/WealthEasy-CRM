import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Typography, Box, Stack } from '@mui/material';
import { PieChartProps } from '../../interfaces/home';

const TotalClients: React.FC<PieChartProps> = ({ title, value, series, colors }) => {
  return (
    <Box
      id="chart"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#fcfcfc"
      p={3}
      borderRadius="10px"
      boxShadow="0px 4px 4px rgba(86, 144, 198, 0.11)"
      minWidth="250px"
      border="1px solid #F2F2F2"

    >
      <Stack direction="column" alignItems="flex-start" width="100%">
        <Typography fontSize={18} color="#808191" fontWeight={600}>
          {title}
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center" width="100%" mt={1}>
          <Typography fontSize={40} color="#11142d" fontWeight={700}>
            {value}
          </Typography>
          <Box >
            <ReactApexChart
              options={{
                chart: { type: 'donut' },
                colors,
                legend: { show: false },
                dataLabels: { enabled: false },
                tooltip: {
                  y: {
                    formatter: (val, opts) => {
                      const labels = ["Corporate", "Individual"];
                      return `${labels[opts.seriesIndex]}: ${val}`;
                    },
                  },
                },
              }}
              series={series}
              type="donut"
              width="220px"
            />
          </Box>
        </Box>
        <Box mt={2} width="100%" display="flex" flexDirection="row" alignItems="center" gap={2}>
          <Stack direction="row" alignItems="center" gap={1}>
            <Box width={12} height={12} bgcolor={colors[0]} borderRadius="50%" />
            <Typography fontSize={14} color="#808191">Corporate Clients</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <Box width={12} height={12} bgcolor={colors[1]} borderRadius="50%" />
            <Typography fontSize={14} color="#808191">Individual Clients</Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default TotalClients;
