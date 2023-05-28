import { Td } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </tr>
  );
};
