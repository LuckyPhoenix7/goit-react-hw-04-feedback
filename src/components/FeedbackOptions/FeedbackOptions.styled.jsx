import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 10px;
`;

export const OptionBtn = styled.button`
  background-color: #1380f6;
  color: white;

  padding: 10px 20px;
  margin: 0 5px;

  border: none;
  border-radius: 5px;

  cursor: pointer;
  transition: background-color 250ms;

  &:hover {
    background-color: #0056b3;
  }
`;
