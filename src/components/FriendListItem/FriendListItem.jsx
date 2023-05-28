import { Item, Status } from './FriendListItem.styled';

export const FriendListItem = ({ name, avatar, isOnline, id }) => {
  return (
    <Item key={id}>
      <Status isOnline={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
};
