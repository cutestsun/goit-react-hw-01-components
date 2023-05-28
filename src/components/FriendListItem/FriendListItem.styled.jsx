import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 8px;
  box-shadow: 2px 2px 7px #090909;
  border-radius: 8px;
`;

export const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
