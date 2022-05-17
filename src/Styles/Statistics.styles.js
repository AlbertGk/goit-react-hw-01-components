import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  margin-top: 40px;

  display: flex;
  flex-direction: column;

  width: 300px;
  border: 1px solid #b2b2b2;
  border-radius: 10px;
  box-shadow: 0 0 1em #cfcfcf;
`;

export const Tittle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const BottomSection = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  border-top: 2px solid #b2b2b2;
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
`;

export const LiElem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;

  background-color: ${({ color }) => (color)};
`;

export const SpanLabel = styled.span`
  font-size: 10px;
  color: #5d5b5a;
`;