import { StatsContainer, Statistic } from './Statistics.styled';

export const Statistics = ({
  stats: { good, neutral, bad },
  total,
  positive,
}) => {
  return (
    <StatsContainer>
      <Statistic>Good: {good}</Statistic>
      <Statistic>Neutral: {neutral}</Statistic>
      <Statistic>Bad: {bad}</Statistic>
      <Statistic>Total: {total}</Statistic>
      <Statistic>Positive feedback: {positive}%</Statistic>
    </StatsContainer>
  );
};
