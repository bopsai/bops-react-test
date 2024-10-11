import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { baseTheme } from '@Themes';
import { Container } from './lineChart.styles';
import { NoDataContainer } from '../MaterialCategoriesChart/materialCategoriesChart.styles';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        maxTicksLimit: 8,
        autoSkip: true,
        maxRotation: 0,
        minRotation: 0,
        color: baseTheme.colors.fontGrey,
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        color: baseTheme.colors.fontGrey,
      },
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ xAxis, yAxis, targetAxis }: { xAxis: string[]; yAxis: number[]; targetAxis?: number[] }) => {
  const hasData = xAxis.length > 0 && yAxis.length > 0;

  const datasets = {
    labels: xAxis,
    datasets: [
      {
        data: yAxis,
        borderWidth: 2,
        borderColor: baseTheme.colors.bopsPurple,
        backgroundColor: baseTheme.colors.bopsPurpleTransparent,
        pointBorderColor: baseTheme.colors.bopsPurpleTransparent2,
        pointBackgroundColor: baseTheme.colors.bopsPurpleTransparent2,
        tension: 0.4,
        fill: true,
      },
      {
        data: targetAxis,
        borderColor: baseTheme.colors.fontGrey,
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  return (
    <Container>
      {hasData ? (
        <Line data={datasets} options={options} />
      ) : (
        <NoDataContainer>
          <p>No data available for the selected time range.</p>
        </NoDataContainer>
      )}
    </Container>
  );
};

LineChart.defaultProps = { targetAxis: [] };

export default LineChart;
