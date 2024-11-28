import ReactApexChart from 'react-apexcharts';
import { Box } from '@chakra-ui/react';

export const PieChart = () => {
  const series = [44, 55, 13, 43, 22];
  const options = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: [
      'Assigment/Lab',
      'Concept/Lecture',
      'Guide/Preview',
      'Test/Quiz',
      'Exam',
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <>
      <Box
        borderWidth='1px'
        borderRadius='xl'
        borderColor='black'
        overflow='hidden'
      >
        <Box bg='#2D3748'>
          <h6 style={{ fontWeight: 'bold', color: 'white' }}>
            Time allocation
          </h6>
        </Box>
        <ReactApexChart
          options={options}
          series={series}
          type='pie'
          width={355}
        />
      </Box>
    </>
  );
};
