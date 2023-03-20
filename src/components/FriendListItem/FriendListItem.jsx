import PropTypes from "prop-types";

import { Item, Status, Avatar, Name } from "./FriendListItem.styled";

export const FriendListItem = (props) => {
  const { id, name, avatar, isOnline } = props;
  const backgroundColor = isOnline ? "green" : "red";

  return (
    <Item key={id}>
      <Status style={{ backgroundColor: backgroundColor }}></Status>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
};
