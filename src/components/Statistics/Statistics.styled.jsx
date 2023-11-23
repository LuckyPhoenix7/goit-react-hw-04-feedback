import styled from 'styled-components';

export const StatsContainer = styled.div`
  background-color: white;

  text-align: left;
  padding: 20px;
  margin: 20px 0;

  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Statistic = styled.p`
  color: #333;

  margin: 5px 0;

  &:last-child {
    color: #1380f6;

    font-weight: bold;
    margin-top: 15px;
  }
`;
