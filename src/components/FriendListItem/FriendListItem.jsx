import PropTypes from "prop-types";

import { Item, Status, Avatar, Name } from "./FriendListItem.styled";

export const FriendListItem = (props) => {
  const { name, avatar, isOnline } = props;
  const backgroundColor = isOnline ? "green" : "red";

  return (
    <Item>
      <Status style={{ backgroundColor: backgroundColor }}></Status>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
