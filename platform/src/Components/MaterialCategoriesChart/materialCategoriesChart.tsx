import { LineChart } from '@Components';
import {
  Container,
  LineCard,
  LineContainer,
  Title,
  SubTitle,
  TimeRangeContainer,
  Option,
  Div,
} from './materialCategoriesChart.styles';

export interface TimeRangeOption {
  name: string;
  value: number;
}

const MaterialCategoriesChart = ({
  title,
  subtitle,
  xAxis,
  yAxis,
  targetAxis,
  timeRanges,
  onTimeRangeChange,
}: {
  title: string;
  subtitle: string;
  xAxis: string[];
  yAxis: number[];
  targetAxis?: number[];
  timeRanges: TimeRangeOption[];
  onTimeRangeChange: (value: number) => void;
}) => {
  const onTimeRangeClicked = (option: TimeRangeOption) => {
    onTimeRangeChange(option.value);
  };

  return (
    <Container>
      <LineCard>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <LineContainer>
          <LineChart xAxis={xAxis} yAxis={yAxis} targetAxis={targetAxis} />
        </LineContainer>
        <TimeRangeContainer>
          {timeRanges.map((timeRange) => {
            const option = <Option onClick={() => onTimeRangeClicked(timeRange)}>{timeRange.name}</Option>;
            return <Div key={timeRange.value}>{option}</Div>;
          })}
        </TimeRangeContainer>
      </LineCard>
    </Container>
  );
};

MaterialCategoriesChart.defaultProps = { targetAxis: [] };

export default MaterialCategoriesChart;
