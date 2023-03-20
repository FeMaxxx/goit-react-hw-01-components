import PropTypes from "prop-types";

import { Item, Status, Avatar, Name } from "./FriendListItem.styled";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Item key={id}>
      <Status></Status>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
};
