import styled from 'styled-components';

export const Item = styled.li`
  width: 20%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 8px;
  background-color: ${props => props.bgColor};
`;

export const Label = styled.span`
  color: white;
`;

export const Percentage = styled.span`
  color: white;
  font-size: 20px;
`;
