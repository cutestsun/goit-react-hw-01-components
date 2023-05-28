import { Item, Label, Percentage } from './StatItem.styled';
import getRandomHexColor from 'components/utils/random-color';
export const StatItem = ({ id, label, percentage }) => {
  return (
    <Item key={id} bgColor={getRandomHexColor}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};
